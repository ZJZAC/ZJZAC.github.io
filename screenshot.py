from playwright.sync_api import sync_playwright
import sys

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:7100/')
    page.wait_for_timeout(3000)
    page.screenshot(path='/Users/zhangj6/Nutstore Files/ZJZAC.github.io/preview_top.png', full_page=False)
    page.evaluate('window.scrollTo(0, 800)')
    page.wait_for_timeout(1000)
    page.screenshot(path='/Users/zhangj6/Nutstore Files/ZJZAC.github.io/preview_pub.png', full_page=False)
    page.evaluate('window.scrollTo(0, 2400)')
    page.wait_for_timeout(1000)
    page.screenshot(path='/Users/zhangj6/Nutstore Files/ZJZAC.github.io/preview_bottom.png', full_page=False)
    browser.close()
    print('done')
