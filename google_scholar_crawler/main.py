from scholarly import scholarly
import jsonpickle
import json
from datetime import datetime
import os
import sys

scholar_id = os.environ.get('GOOGLE_SCHOLAR_ID', '').strip()
if not scholar_id:
    print('ERROR: GOOGLE_SCHOLAR_ID secret is not set. '
          'Add it in repo Settings -> Secrets and variables -> Actions.')
    sys.exit(1)
print(f'GOOGLE_SCHOLAR_ID is set (length {len(scholar_id)}). Fetching author...')

try:
    author: dict = scholarly.search_author_id(scholar_id)
    scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
except Exception as e:
    print(f'ERROR: failed to fetch from Google Scholar: {type(e).__name__}: {e}')
    print('This is often caused by Google CAPTCHA blocking the runner IP. '
          'Re-running later usually helps.')
    sys.exit(1)

name = author['name']
print(f"Fetched author: {name}, citedby={author.get('citedby')}, "
      f"publications={len(author.get('publications', []))}")
author['updated'] = str(datetime.now())
author['publications'] = {v['author_pub_id']: v for v in author['publications']}
print(json.dumps(author, indent=2))
os.makedirs('results', exist_ok=True)
with open(f'results/gs_data.json', 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False)

shieldio_data = {
  "schemaVersion": 1,
  "label": "citations",
  "message": f"{author['citedby']}",
}
with open(f'results/gs_data_shieldsio.json', 'w') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)
