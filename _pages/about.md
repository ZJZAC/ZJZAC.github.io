---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<div class="hero-banner">
  <div class="hero-title">Hi, I'm <span class="hero-name">Jie Zhang</span> 👋</div>
  <div class="hero-subtitle">
    <span id="hero-typing" data-phrases='["CEO @ SiliconProspect AI (硅基守望)", "Trustworthy AI Researcher", "80+ Publications @ Top Venues", "Champion @ ECCV 2026 LifeGenIP Challenge"]'></span><span class="hero-cursor">|</span>
  </div>
</div>

<div class="stats-wall">
  <div class="stat-card">
    <div class="stat-number" data-count="77" data-suffix="+">0</div>
    <div class="stat-label">📄 Publications</div>
  </div>
  <div class="stat-card">
    <div class="stat-number"><span id="total_cit">—</span>+</div>
    <div class="stat-label">📊 Citations</div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-count="6" data-suffix="+">0</div>
    <div class="stat-label">🎖️ Honors & Awards</div>
  </div>
  <div class="stat-card">
    <div class="stat-number" data-count="1" data-suffix="">0</div>
    <div class="stat-label">🏆 ECCV 2026 Champion</div>
  </div>
</div>

<span class='anchor' id='about-me'></span>

I am currently the CEO and Principal Researcher at **SiliconProspect AI (硅基守望)**, an AI startup I co-founded, dedicated to ***Understanding AI, Trusting AI, and Embracing AI***. Before that, I was a Principal Investigator, Innovation Lead, and Research Scientist at A*STAR Centre for Frontier AI Research ([CFAR](https://www.a-star.edu.sg/cfar)), working with [**Prof. Ivor Tsang**](https://www.a-star.edu.sg/cfar/about-cfar/management/prof-ivor-tsang), and a Research Fellow at Nanyang Technological University, working with [**Prof. Tianwei Zhang**](https://personal.ntu.edu.sg/tianwei.zhang/) and [**Prof. Yang Liu**](https://personal.ntu.edu.sg/yangliu/). Besides, I worked with [**Prof. Florian Kerschbaum**](https://cs.uwaterloo.ca/~fkerschb/) (from University of Waterloo).  I received my Ph.D. degree with honors in School of Cyber Science and Technology from University of Science and Technology of China (USTC) in 2022, advised by [**Prof. Nenghai Yu**](https://scholar.google.com/citations?user=7620QAMAAAAJ&hl=zh-CN), [**Prof. Weiming Zhang**](https://scholar.google.com/citations?user=eTCfl6cAAAAJ&hl=zh-CN), and **Prof. Huamin Feng**. I also very luckily collaborated closely with [**Prof. Qing Guo**](https://tsingqguo.github.io/) (at Nankai University), [**Dr. Dongdong Chen**](https://www.dongdongchen.bid/) (at Microsoft GenAI) and [**Prof. Jing Liao**](https://www.cityu.edu.hk/stfprofile/jingliao.htm) (at City University of Hong Kong). 

<details markdown="1">
<summary><strong>🔬 My Research Interests: How to build Trustworthy AI & Gen-AI (click to expand)</strong></summary>

<div style="text-align: center;">
    <img src="/images/Research_focus.png" alt="Research Interest" width="70%">
</div>


My recent research interest mainly focuses on ***How to build Trustworthy AI & Gen-AI***:

- **Vulnerability Evaluation**: [[TIP 2022]](#pub-poison-ink), [[AAAI 2023]](#pub-plg-mia),  [[MM 2023]](#pub-protego), [[AAAI 2024]](#pub-zeroday), [[AAAI 2024]](#pub-dfhl), [[AAAI 2024]](#pub-same), [[CCS 2024]](#pub-gendercare),  [[NeurIPS 2024]](#pub-art), [[Information Fusion 2024]](#pub-inffus), [[USENIX Security 2025]](#pub-ghost), [[NAACL 2025]](#pub-sanitization), [[USENIX Security 2025]](#pub-translators), [[TMM 2025]](#pub-deephash), [[CVPR 2025]](#pub-scenetap), [[S&P 2025]](#pub-camlopa), [[CCS 2025]](#pub-oedipus), [[USENIX Security 2025]](#pub-diffloc), [[NeurIPS 2025]](#pub-depthvanish), [[Agent4Science 2025]](#pub-blindspot), [[CIKM 2025]](#pub-dpgen), [[TIFS 2025]](#pub-ssd), [[AAAI 2026]](#pub-magic), [[NDSS 2026]](#pub-promptstealing), [[USENIX Security 2026]](#pub-memory), 
[[TPAMI 2026]](#pub-mst), [[ACL 2026]](#pub-corba), [[ICML 2026]](#pub-searchwrong), [[ICML 2026]](#pub-objvanish), [[ICML 2026]](#pub-sdsf), [[USENIX Security 2026]](#pub-glitch), [[CCS 2026]](#pub-tokenbuncher), [[MM 2026]](#pub-beyondretrieval), [[EMNLP 2026]](#pub-intenttool), [[EMNLP 2026]](#pub-personaswitch), [[EMNLP 2026]](#pub-bpeaudit) 

- **Proactive Safeguard**: [[AAAI 2021]](#pub-initiative), [[MM 2023]](#pub-ada3diff),  [[IJCAI 2024]](#pub-fedau), [[ICML 2024]](#pub-facialprivacy), [[MM 2024]](#pub-modelxray), [[NDSS 2025]](#pub-themis), [[AAAI 2025]](#pub-evolutionary), [[ICASSP 2025]](#pub-segue), [[TDSC 2025]](#pub-inferdpt), [[TOSEM 2025]](#pub-jailguard), [[ICML 2025]](#pub-eraseanything), [[ICML 2025]](#pub-cowpox), [[CCS 2025]](#pub-safeguider)

- **Post-hoc Forensic**: [[AAAI 2020]](#pub-mwipn), [[NeurIPS 2020]](#pub-passport), [[MM 2020]](#pub-reversible), [[TPAMI 2021]](#pub-deepip), [[AAAI 2022]](#pub-provenance),  [[TAI 2023]](#pub-mac), [[Springer Book]](#pub-book), [[AAAI 2023]](#pub-dear), [[AAAI 2023]](#pub-autostegafont), [[TKDE 2023]](#pub-dbwm), [[TPAMI 2024]](#pub-scwm), [[NDSS 2024]](#pub-timbre), [[ICML 2024]](#pub-aqualora), [[ECCV 2024]](#pub-robustwide), [[S&P 2025]](#pub-siren), [[TIFS 2025]](#pub-knowledgeinjection), [[ICLR 2025]](#pub-videoshield), [[ICME 2025]](#pub-wmupdating), [[ICME 2025]](#pub-aparecium), [[TDSC 2025]](#pub-glyph), [[TPAMI 2025]](#pub-facetracer), [[NeurIPS 2025]](#pub-maskwm), [[Information Science 2025]](#pub-deepfakeforensics) 

Others
- **Affective Computing**: [[MM 2024]](#pub-facialpulse), [[CVPR 2025]](#pub-avfmae), [[MM 2025]](#pub-heterogeneity), [[TIFS 2026]](#pub-trustdfer)
- **AI for Science**: [[AI4X 2025]](#pub-sae), [[AI for Science 2025]](#pub-chemsafety)

</details>

⭐️⭐️ *If you are interested in my research topics or have innovative ideas to share, I would love to hear from you! I am always open to external collaborations and exploring new possibilities together! **Feel free to email me anytime!*** 🚀🚀





# 🔥 News

<style>
.news-item {
    display: block;
    margin-bottom: 8px;
}

.news-item.hidden {
    display: none;
}

.toggle-button {
    text-decoration: underline;
    color: #007bff;
    border: none;
    outline: none;
    padding: 8px 15px;
    cursor: pointer;
    /* margin-top: 5px; */
    font-size: 16px;
    background: transparent !important;
    box-shadow: none !important;
    /* transition: background-color 0.3s; */
}

.toggle-button:hover {
    background: transparent !important;
    box-shadow: none !important;
}
</style>

<ul id="news-list" style="list-style-type: none; padding-left: 0;">
<li class="news-item">- <em>2026.08</em>: &nbsp;🏆 Our team KVeil won the 🏅 <span style="color: red;"><strong>Champion (1st Place)</strong></span> in both the preliminary and final phases of the <a href="https://github.com/tmllab/ECCV26_LifeGenIP_starting_kit">LifeGenIP Challenge: Unlearnable Videos against Diffusion-based Customization @ ECCV 2026</a>! Our technical report and paper will be available soon.</li>
<li class="news-item">- <em>2026.08</em>: &nbsp;🎉🎉 Three papers are accepted to EMNLP 2026 (Main Conference). Congrats to Qingjie Zhang, Yanghao Su, and Yutong Zhang!</li>
<li class="news-item">- <em>2026.08</em>: &nbsp;🎉🎉 One paper is accepted to TIFS. Congrats to Fengqi Cui!</li>
<li class="news-item">- <em>2026.07</em>: &nbsp;🎉🎉 One paper is accepted to ECCV 2026. Congrats to Mingxuan Cui!</li>
<li class="news-item">- <em>2026.07</em>: &nbsp;🎉🎉 One paper is accepted to ACM MM 2026. Congrats to Haoran Ou!</li>
<li class="news-item">- <em>2026.05</em>: &nbsp;🎉🎉 One paper is accepted to ACM CCS 2026. Congrats to Weitao Feng!</li>
<li class="news-item">- <em>2026.05</em>: &nbsp;🎉🎉 One paper is accepted to USENIX Security 2026. Congrats to Kunsheng Tang!</li>
<li class="news-item">- <em>2026.05</em>: &nbsp;🎉🎉 Three papers are accepted to ICML 2026. Congrats to Haoran Ou, Bing Li, and Pengcheng Li!</li>
<li class="news-item">- <em>2026.04</em>: &nbsp;🎉🎉 One paper is accepted to ACL 2026 (Findings). Congrats to Zhenhong Zhou!</li>
<li class="news-item">- <em>2026.01</em>: &nbsp;🎉🎉 One paper is accepted to TPAMI. Congrats to Chang Liu!</li>
<li class="news-item">- <em>2026.01</em>: &nbsp;🎉🎉 One paper is accepted to ICRA 2026. Congrats to Sicheng Li!</li>
<li class="news-item">- <em>2026.01</em>: &nbsp;🎉🎉 One paper is accepted to USENIX Security 2026. Congrats to Shiqian Zhao!</li>
<li class="news-item">- <em>2026.01</em>: &nbsp;🎉🎉 Our project on AI-assisted animation copyright and governance is awarded funding by <a href="https://aisingapore.org/research/joint-grant-call/">AI Singapore (AI Research – Governance Joint Grant Call)</a>, with me serving as PI. Congarts to my team and myself! </li>
<li class="news-item">- <em>2025.12</em>: &nbsp;🎉🎉 One paper is accepted to Information Science. Congrats to Xiaoshuai Wu!</li>
<li class="news-item">- <em>2025.12</em>: &nbsp;🎉🎉 One paper is accepted to TIFS. Congrats to Zhaoxuan Wang!</li>
<li class="news-item">- <em>2025.11</em>: &nbsp;🎉🎉 One paper is accepted to NDSS 2026. Congrats to Shiqian Zhao!</li>
<li class="news-item">- <em>2025.11</em>: &nbsp;🎉🎉 I’m honored to be invited as a guest lecturer for the NUS ECE postgraduate course CEG5304: Deep Learning for Digitalization Technologies! The <a href="https://drive.google.com/file/d/1HKkiLBUmrlrMmHmX6dp_AhfMHf1ouyox/view?usp=sharing">lecture video</a> is available.</li>
<li class="news-item">- <em>2025.11</em>: &nbsp;🎉🎉 One paper is accepted to AAAI 2026. Congrats to Yun Xing!</li>
<li class="news-item">- <em>2025.11</em>: &nbsp;🎉🎉 One paper is accepted to CIKM 2025. Congrats to Yidan Sun!</li>
<li class="news-item">- <em>2025.10</em>: &nbsp;🎉🎉 One paper is accepted to <a href="https://agents4science.stanford.edu/">Open Conference of AI Agents for Science 2025</a> as a <a href="https://agents4science.stanford.edu/accepted-papers.html#:~:text=Visible%20Yet%20Unreadable%3A%20A%20Systematic%20Blind%20Spot%20of%20Vision%E2%80%93Language%20Models%20Across%20Writing%20Systems"><span style="color: red;"><strong>Spotlight</strong></span></a> paper. Congrats to my collaborators and myself!</li>
<li class="news-item">- <em>2025.10</em>: &nbsp;🎉🎉 I’m honored to join the <a href="https://jis-eurasipjournals.springeropen.com/">EURASIP Journal on Information Security</a> as an Associate Editor. I warmly welcome your submissions!</li>
<li class="news-item">- <em>2025.09</em>: &nbsp;🎉🎉 Two papers are accepted to NeurIPS 2025. Congrats to Runyi Hu and Yun Xing!</li>
<li class="news-item">- <em>2025.08</em>: &nbsp;🎉🎉 One paper is accepted to TPAMI. Congrats to Zhongyi Zhang!</li>
<li class="news-item">- <em>2025.08</em>: &nbsp;🎉🎉 One paper is accepted to AI for Science. Congrats to Jiyan He!</li>
<li class="news-item">- <em>2025.07</em>: &nbsp;🎉🎉 One paper is accepted to ACM MM 2025. Congrats to Fengqi Cui!</li>
<li class="news-item">- <em>2025.07</em>: &nbsp;🎉🎉 One paper is accepted to AI4X 2025 international conference. Congrats to Haoxiang Guan!</li>
<li class="news-item">- <em>2025.06</em>: &nbsp;🎉🎉 Our Watermark Updating Framework has been selected as <a href="https://2025.ieeeicme.org/awards/"><span style="color: red;"><strong>Candidates of best paper</strong></span></a> (one of the Top 15 Papers) in ICME 2025. Congrats to Yanyan Liu!</li>
<li class="news-item">- <em>2025.06</em>: &nbsp;🎉🎉 One paper is accepted to TDSC. Congrats to Xi Yang!</li>
<li class="news-item">- <em>2025.06</em>: &nbsp;🎉🎉 One paper is accepted to USENIX Security 2025. Congrats to Xiang Zhang!</li>
<li class="news-item">- <em>2025.05</em>: &nbsp;🎉🎉 Two papers are accepted to ACM CCS 2025. Congrats to Peigui Qi and Gelei Deng!</li>
<li class="news-item">- <em>2025.05</em>: &nbsp;🎉🎉 Two papers are accepted to ICML 2025. Congrats to Yutong Wu and Daiheng Gao!</li>
<li class="news-item">- <em>2025.04</em>: &nbsp;🎉🎉 I am excited to serve as the Organizer of <a href="https://practical-dl.github.io/">the 4th Workshop on Practical Deep Learning (Practical-DL 2025)</a>! We warmly welcome your paper submissions, looking forward to your contributions!</li>
<li class="news-item">- <em>2025.04</em>: &nbsp;🎉🎉 I'm excited to visit MBZUAI as a Visiting Researcher, hosted by Prof. <a href="https://nilslukas.github.io/">Nils Lukas</a>. Looking forward to the collaboration and new insights!</li>
<li class="news-item">- <em>2025.03</em>: &nbsp;🎉🎉 I'm excited to give a talk at the <a href="https://www.imda.gov.sg/activities/activities-catalogue/technical-sharing-session-on-multimodal-safety">IMDA Technical Sharing Session on Multimodal Safety</a>.</li>
<li class="news-item">- <em>2025.03</em>: &nbsp;🎉🎉 Two papers are accepted to ICME 2025. Congrats to Zhe Lei and Yanyan Liu!</li>
<li class="news-item">- <em>2025.03</em>: &nbsp;🎉🎉 One paper is accepted to TOSEM. Congrats to Xiaoyu Zhang!</li>
<li class="news-item">- <em>2025.03</em>: &nbsp;🎉🎉 One paper is accepted to S&P 2025. Congrats to Xiang Zhang!</li>
<li class="news-item">- <em>2025.03</em>: &nbsp;🎉🎉 One paper is accepted to TDSC. Congrats to Meng Tong!</li>
<li class="news-item">- <em>2025.02</em>: &nbsp;🎉🎉 I am appointed as the Innovation Lead at CFAR, A*STAR. Congrats to myself, Fighting!</li>
<li class="news-item">- <em>2025.02</em>: &nbsp;🎉🎉 Two papers are accepted to CVPR 2025. Congrats to Yue Cao and Xuecheng Wu!</li>
<li class="news-item">- <em>2025.02</em>: &nbsp;🎉🎉 One paper is accepted to TMM. Congrats to Shuai Li!</li>
<li class="news-item">- <em>2025.01</em>: &nbsp;🎉🎉 One paper is accepted to ICLR 2025. Congrats to Runyi Hu!</li>
<li class="news-item">- <em>2025.01</em>: &nbsp;🎉🎉 One paper is accepted to USENIX Security 2025. Congrats to Haolin Wu!</li>
<li class="news-item">- <em>2025.01</em>: &nbsp;🎉🎉 One paper is accepted to TIFS. Congrats to Shuai Li!</li>
<li class="news-item">- <em>2025.01</em>: &nbsp;🎉🎉 One paper is accepted to NAACL 2025 (<span style="color: red;"><strong>Oral</strong></span>). Congrats to Meng Tong!</li>
<li class="news-item">- <em>2024.12</em>: &nbsp;🎉🎉 One paper is accepted to ICASSP 2025. Congrats to Zhiling Zhang!</li>
<li class="news-item">- <em>2024.12</em>: &nbsp;🎉🎉 One paper is accepted to AAAI 2025 (<span style="color: red;"><strong>Oral</strong></span>). Congrats to Haoxiang Tian!</li>
<li class="news-item">- <em>2024.11</em>: &nbsp;🎉🎉 One paper is accepted to Information Fusion 2024. Congrats to Linqing Hu!</li>
<li class="news-item">- <em>2024.10</em>: &nbsp;🎉🎉 GenderCARE is awarded the <span style="color: red;"><strong>Distinguished Artifact Award</strong></span> in CCS 2024. Congrats!</li>
<li class="news-item">- <em>2024.09</em>: &nbsp;🎉🎉 One paper is accepted to NeurIPS 2024. Congrats to Guanlin Li!</li>
<li class="news-item">- <em>2024.09</em>: &nbsp;🎉🎉 One paper is accepted to USENIX Security 2025. Congrats to Junqi Zhang!</li>
<li class="news-item">- <em>2024.09</em>: &nbsp;🎉🎉 One paper is accepted to S&P 2025. Congrats to Boheng Li!</li>
<li class="news-item">- <em>2024.08</em>: &nbsp;🎉🎉 I join the CFAR, A*STAR as a research scientist. Thanks a lot to Prof. Tianwei Zhang for the support at NTU!</li>
<li class="news-item">- <em>2024.07</em>: &nbsp;🎉🎉 One paper is accepted to NDSS 2025. Congrats to Yutong Wu!</li>
<li class="news-item">- <em>2024.07</em>: &nbsp;🎉🎉 Two papers are accepted to ACM MM 2024 (One <span style="color: red;"><strong>Oral</strong></span>). Congrats to Yanghao Su and Ruiqi Wang!</li>
<li class="news-item">- <em>2024.07</em>: &nbsp;🎉🎉 One paper is accepted to ECCV 2024. Congrats to Runyi Hu!</li>
<li class="news-item">- <em>2024.05</em>: &nbsp;🎉🎉 Two papers are accepted to ICML 2024. Congrats to Kui Zhang and Weitao Feng!</li>
<li class="news-item">- <em>2024.04</em>: &nbsp;🎉🎉 One paper is accepted to IJCAI 2024. Congrats to Hanlin Gu!</li>
<li class="news-item">- <em>2024.04</em>: &nbsp;🎉🎉 One paper is accepted to ACM CCS 2024. Congrats to Kunsheng Tang!</li>
<li class="news-item">- <em>2024.03</em>: &nbsp;🎉🎉 One paper is accepted to TPAMI. Congrats to myself, Fighting!</li>
<li class="news-item">- <em>2023.12</em>: &nbsp;🎉🎉 Three papers are accepted to AAAI 2024. Congrats to Yi Xie, Yihao Huang, and Xiaojian Yuan!</li>
<li class="news-item">- <em>2023.12</em>: &nbsp;🎉🎉 One paper is accepted to ICASSP 2024. Congrats to Prof. Wenbo Zhou!</li>
<li class="news-item">- <em>2023.11</em>: &nbsp;🎉🎉 One paper is accepted to NDSS 2024. Congrats to Chang Liu!</li>
</ul>

<button class="toggle-button" onclick="toggleNews()" id="toggle-btn">More</button>

<script>
function toggleNews() {
    const newsItems = document.querySelectorAll('.news-item');
    const button = document.getElementById('toggle-btn');
    const hiddenItems = document.querySelectorAll('.news-item.hidden');
    
    if (hiddenItems.length > 0) {
        // 显示所有隐藏的条目
        hiddenItems.forEach(item => item.classList.remove('hidden'));
        button.textContent = 'Fold';
    } else {
        // 隐藏第10个之后的条目
        newsItems.forEach((item, index) => {
            if (index >= 10) {
                item.classList.add('hidden');
            }
        });
        button.textContent = 'More';
    }
}

// 页面加载时隐藏第10个之后的条目
document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach((item, index) => {
        if (index >= 10) {
            item.classList.add('hidden');
        }
    });
});
</script>



# 📝 Selected Preprints 

- [A comprehensive survey in llm (-agent) full stack safety: Data, training and deployment](https://arxiv.org/pdf/2504.15585?)
- [Reinforcement learning enhanced llms: A survey](https://arxiv.org/pdf/2412.10400)




# 📝 Publications 

- <span id="pub-intenttool"></span>Yutong Zhang, Jianshuo Dong, Peng Xu, Long Wang, **Jie Zhang**, Tianwei Zhang, Xiaoping Zhang, Han Qiu, **INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment**, Conference on Empirical Methods in Natural Language Processing (EMNLP), 2026

- <span id="pub-personaswitch"></span>Yanghao Su, Wenbo Zhou, Tianwei Zhang, Han Qiu, Nenghai Yu, Weiming Zhang, **Jie Zhang**, **The Persona-Switch Backdoor: From Payload Retrieval to Trigger-Gated Persona-State Selection**, Conference on Empirical Methods in Natural Language Processing (EMNLP), 2026

- <span id="pub-bpeaudit"></span>Qingjie Zhang, Ziqi Tang, **Jie Zhang**, Gelei Deng, Jinfeng Li, YueFeng Chen, Yitong Yang, Hui Xue, Tianwei Zhang, Han Qiu, **Auditing Chinese Web-scale Corpora via Sampled BPE Token Statistics**, Conference on Empirical Methods in Natural Language Processing (EMNLP), 2026

- <span id="pub-beyondretrieval"></span>Haoran Ou, Gelei Deng, Xingshuo Han, **Jie Zhang**, Han Qiu, Shangwei Guo, Tianwei Zhang, Kwok-Yan Lam, **Beyond Retrieval: Improving Evidence Quality for LLM-based Multimodal Fact-Checking**, ACM International Conference on Multimedia (MM), 2026

- Mingxuan Cui, Yunrui Zhu, Wuqi Wang, Di Lin, Jianhua Zhang, **Jie Zhang**, Ming-Ming Cheng, Shengyong Chen, Qing Guo, **GlassGS: Geometry and Concept-Aware 3D Gaussian Splatting for Reflective Enclosures**, European Conference on Computer Vision (ECCV), 2026

- <span id="pub-trustdfer"></span>Feng-Qi Cui, Anyang Tong, Jinyang Huang, **Jie Zhang**, Meng Li, Xin Yan, Linsheng Huang, Dan Guo, Meng Wang, **Towards Trustworthy Dynamic Facial Expression Recognition via Information Bottleneck Modeling**, IEEE Transactions on Information Forensics and Security (TIFS), 2026

- <span id="pub-tokenbuncher"></span>Weitao Feng, Lixu Wang, Peizhuo Lv, Tianyi Wei, **Jie Zhang**, Chongyang Gao, Sinong Simon Zhan, Wei Dong, **Token Buncher: Shielding LLMs from Harmful Reinforcement Learning Fine-Tuning**, ACM Conference on Computer and Communications Security (CCS), 2026

- <span id="pub-glitch"></span>Kunsheng Tang, Peigui Qi, Yide Song, Wenbo Zhou, Zhicong Huang, Qing Guo, Tianwei Zhang, Weiming Zhang, Nenghai Yu, **Jie Zhang** [*Corresponding Author*], **One Bad Token Spoils the Barrel: Assessment, Detection, and Remediation of Glitch Tokens in Large Language Models**, USENIX Security Symposium, 2026

- <span id="pub-searchwrong"></span>Haoran Ou, Kangjie Chen, Xingshuo Han, Gelei Deng, **Jie Zhang**, Han Qiu, Tianwei Zhang, Kwok-Yan Lam, **When Search Goes Wrong: Red-Teaming Web-Augmented Large Language Models**, International Conference on Machine Learning (ICML), 2026

- <span id="pub-objvanish"></span>Bing Li*, Wuqi Wang*, Yanan Zhang, Jingzheng Li, Haigen Min, Wei Feng, Xingyu Zhao, **Jie Zhang**, Qing Guo, **OBJVanish: Prompt-Driven Generation of Physically Realisable 3D LiDAR-Invisible Objects**, International Conference on Machine Learning (ICML), 2026

- <span id="pub-sdsf"></span>Pengcheng Li, **Jie Zhang**, Tianwei Zhang, Han Qiu, Kejun Zhang, Weiming Zhang, Nenghai Yu, Wenbo Zhou, **State-Dependent Safety Failures in Multi-Turn Language Model Interaction**, International Conference on Machine Learning (ICML), 2026

- <span id="pub-corba"></span>Zhenhong Zhou, Zherui Li, **Jie Zhang**, Yuanhe Zhang, Kun Wang, Yang Liu, Qing Guo, **CORBA: Contagious Recursive Blocking Attacks on Multi-Agent Systems Based on Large Language Models**, Findings of Annual Meeting of the Association for Computational Linguistics (ACL), 2026

- Sicheng Li, Zaiwang Gu, **Jie Zhang**, Qing Guo, Xudong Jiang, Jun Cheng, **SURE: Semi-dense Uncertainty-REfined Feature Matching**, IEEE International Conference on Robotics and Automation (ICRA), 2026

- <span id="pub-mst"></span>Chang Liu, Haolin Wu, Xi Yang, Kui Zhang, Cong Wu, Weiming Zhang, Nenghai Yu, Tianwei Zhang, Qing Guo, **Jie Zhang** [*Corresponding Author*], **Exploring Security Vulnerabilities in Multilingual Speech Translation Systems via Deceptive Inputs**, IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2026 [[Paper]](https://www.computer.org/csdl/journal/tp/5555/01/11367280/2dEjEHBRct2) [[Project Page]](https://adv-st.github.io/)

- <span id="pub-memory"></span>Shiqian Zhao, Jiayang Liu, Yiming Li, Runyi Hu, Xiaojun Jia, Wenshu Fan, Xinfeng Li, **Jie Zhang**, Wei Dong, Tianwei Zhang, Luu Anh Tuan, **When Memory Becomes a Vulnerability: Towards Multi-turn Jailbreak Attacks against Text-to-Image Generation Systems**, USENIX Security Symposium, 2026 [[Paper]](https://arxiv.org/pdf/2504.20376)

- <span id="pub-promptstealing"></span>Shiqian Zhao, Chong Wang, Yiming Li, Yihao Huang, Wenjie Qu, Siew-Kei Lam, Yi Xie, Kangjie Chen, **Jie Zhang** [*Corresponding Author*], Tianwei Zhang, **Towards Effective Prompt Stealing Attack against Text-to-Image Diffusion Models**, Network and Distributed System Security Symposium (NDSS), 2026 [[Paper]](https://arxiv.org/pdf/2508.06837)

- <span id="pub-magic"></span>Yun Xing, Nhat Chung, **Jie Zhang**, Yue Cao, Ivor Tsang, Yang Liu, Lei Ma, Qing Guo, **MAGIC: Mastering Physical Adversarial Generation in Context through Collaborative LLM Agents**, AAAI Conference on Artificial Intelligence (AAAI), 2026 [[Paper]](https://arxiv.org/pdf/2412.08014)

- <span id="pub-deepfakeforensics"></span>Xiaoshuai Wu, Xin Liao, **Jie Zhang**, Mingyue Chen, Yufeng Wu, Jinlin Guo, **Versatile and harmless deepfake proactive forensics via conditional watermarking**, Information Science, 2025 [[Paper]](https://www.sciencedirect.com/science/article/abs/pii/S0020025525011673)

- <span id="pub-ssd"></span>Zhaoxuan Wang, Yang Li, **Jie Zhang**, Xingshuo Han, Kangbo Liu, Yang Lyu, Yuan Zhou, Tianwei Zhang, Quan Pan, **SSD: A State-based Stealthy Backdoor Attack For IMU/GNSS Navigation System in UAV Route Planning**, IEEE Transactions on Information Forensics and Security (TIFS), 2025 [[Paper]](https://arxiv.org/pdf/2502.20178)

- <span id="pub-dpgen"></span>Yidan Sun, Viktor Schlegel, Srinivasan Nandakumar, Iqra Zahid, Yuping Wu, Warren Del-Pinto, Goran Nenadic, Siew-Kei Lam, **Jie Zhang**, Anil A Bharath, **Evaluating Differentially Private Generation of Domain-Specific Text**, ACM International Conference on Information and Knowledge Management (CIKM), 2025 [[Paper]](https://dl.acm.org/doi/10.1145/3746252.3760916)

- <span id="pub-blindspot"></span>AI, **Jie Zhang**, Ting Xu, Gelei Deng, Runyi Hu, Han Qiu, Tianwei Zhang, Qing Guo, Ivor Tsang, **Visible Yet Unreadable: A Systematic Blind Spot of Vision–Language Models Across Writing Systems**, Open Conference of AI Agents for Science (Agent4Science), <span style="color: red;"><strong>Spotlight</strong></span>, 2025 [[Paper]](https://openreview.net/pdf?id=if6RZty9HK) [[Code]](https://github.com/ZJZAC/character-fusion-generator) [[Video]](https://drive.google.com/file/d/1XMB4I-OdhDZWT5wSQyqd8kKuS58OzG-j/view?usp=sharing)

- <span id="pub-maskwm"></span>Runyi Hu, **Jie Zhang** [*Corresponding Author*], Shiqian Zhao, Nils Lukas, Jiwei Li, Qing Guo, Han Qiu, Tianwei Zhang, **Mask Image Watermarking**, Neural Information Processing Systems (NeurIPS), 2025 [[Paper]](https://arxiv.org/pdf/2504.12739) [[Code]](https://github.com/hurunyi/MaskWM)

- <span id="pub-depthvanish"></span>Yun Xing, Yue Cao, Nhat Chung, **Jie Zhang**, Ivor Tsang, Ming-Ming Cheng, Yang Liu, Lei Ma, Qing Guo, **DepthVanish: Optimizing Adversarial Interval Structures for Stereo-Depth-Invisible Patches**, Neural Information Processing Systems (NeurIPS), 2025 [[Paper]](https://arxiv.org/pdf/2506.16690)

- <span id="pub-facetracer"></span>Zhongyi Zhang, **Jie Zhang**, Wenbo Zhou, Xinghui Zhou, Qing Guo, Weiming Zhang, Tianwei Zhang, Nenghai Yu, **FaceTracer: Unveiling Source Identities from Swapped Face Images and Videos for Fraud Prevention**, IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2025 [[Paper]](https://arxiv.org/pdf/2412.08082)

- <span id="pub-chemsafety"></span>Jiyan He, Weitao Feng, Yaosen Min, Jingwei Yi, Kunsheng Tang, Shuai Li, **Jie Zhang**, Kejiang Chen, Wenbo Zhou, Xing Xie, Weiming Zhang, Nenghai Yu, Shuxin Zheng, **Controlling Risks of AI in Chemical Science with Agents**, AI for Science, 2025 [[Paper]](https://iopscience.iop.org/article/10.1088/3050-287X/adfee5/pdf)

- <span id="pub-heterogeneity"></span>Feng-Qi Cui, Anyang Tong, Jinyang Huang, **Jie Zhang**, Dan Guo, Zhi Liu, Meng Wang, **Learning from Heterogeneity: Generalizing Dynamic Facial Expression Recognition via Distributionally Robust Optimization**, ACM International Conference on Multimedia (MM), 2025 [[Paper]](https://arxiv.org/pdf/2507.15765)

- <span id="pub-sae"></span>Haoxiang Guan, Jiyan He, **Jie Zhang**, **Sparse Autoencoders Reveal Interpretable Structure in Small Gene Language Models**, AI4X, 2025 [[Paper]](https://arxiv.org/pdf/2507.07486)

- <span id="pub-glyph"></span>Xi Yang, **Jie Zhang** [*Corresponding Author*], Chang Liu, Han Fang, Zehua Ma, Kejiang Chen, Weiming Zhang, Nenghai Yu, **Synthesizing Glyph Vectors for Practical Information Hiding in Documents**, IEEE Transactions on Dependable and Secure Computing (TDSC), 2025 [[Paper]](https://ieeexplore.ieee.org/abstract/document/11037547) [[Demo]](https://drive.google.com/file/d/17cJPO7dffgDxLKg5e3AQ8wEo0fdUYYlt/view?usp=sharing)

- <span id="pub-diffloc"></span>Xiang Zhang, **Jie Zhang**, Huan Yan, Jinyang Huang, Zehua Ma, Bin Liu, Meng Li, Kejiang Chen, Qing Guo, Tianwei Zhang, Zhi Liu, **DiffLoc: WiFi Hidden Camera Localization Based on Electromagnetic Diffraction**, USENIX Security Symposium, 2025 [[Paper]](https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-xiang) [[Code]](https://zenodo.org/records/15592887)

- <span id="pub-safeguider"></span>Peigui Qi, Kunsheng Tang, Wenbo Zhou, Weiming Zhang, Nenghai Yu, Tianwei Zhang, Qing Guo, **Jie Zhang** [*Corresponding Author*], **SafeGuider: Robust and Practical Content Safety Control for Text-to-Image Models**, ACM Conference on Computer and Communications Security (CCS), 2025 [[Paper]](https://arxiv.org/pdf/2510.05173) [[Project Page]](https://academic-page.github.io/SafeGuider/)

- <span id="pub-oedipus"></span>Gelei Deng, Haoran Ou, Yi Liu, **Jie Zhang**, Tianwei Zhang, Yang Liu, **Oedipus: LLM-enchanced Reasoning CAPTCHA Solver**, ACM Conference on Computer and Communications Security (CCS), 2025 [[Paper]](https://arxiv.org/pdf/2405.07496)

- <span id="pub-cowpox"></span>Yutong Wu, **Jie Zhang** [*Corresponding Author*], Yiming Li, Chao Zhang, Qing Guo, Han Qiu, Nils Lukas, Tianwei Zhang, **Cowpox: Towards the Immunity of VLM-based Multi-Agent Systems**, International Conference on Machine Learning (ICML), 2025 [[Paper]](https://openreview.net/pdf?id=5KszXnnkG5)

- <span id="pub-eraseanything"></span>Daiheng Gao, Shilin Lu, Shaw Walters, Wenbo Zhou, Jiaming Chu, **Jie Zhang**, Bang Zhang, Mengxi Jia, Jian Zhao, Zhaoxin Fan, Weiming Zhang, **EraseAnything: Enabling Concept Erasure in Rectified Flow Transformers**, International Conference on Machine Learning (ICML), 2025 [[Paper]](https://openreview.net/forum?id=qLA9WbjGcS) [[Project Page]](https://tomguluson92.github.io/projects/eraseanything/)

- <span id="pub-aparecium"></span>Zhe Lei, **Jie Zhang** [*Corresponding Author*], Jingtao Li, Weiming Zhang, Nenghai Yu, **Aparecium: Revealing Secrets from Physical Photographs**, IEEE International Conference on Multimedia & Expo (ICME), 2025 [[Paper]](https://arxiv.org/pdf/2308.12141) [[Demo]](https://www.linkedin.com/posts/jie-zhang-0a67b9343_we-present-an-innovative-and-robust-watermarking-activity-7285878919340187648-PyJW)

- <span id="pub-wmupdating"></span>Yanyan Liu, Bin Liu, **Jie Zhang**, Xiang Zhang, Zehua Ma, Nenghai Yu, **A Watermark Updating Framework for Multi-stage Image Content Distribution**, IEEE International Conference on Multimedia & Expo (ICME), <span style="color: red;"><strong>Best Paper Candidate (Top 15)</strong></span>, 2025 [[Paper]](./publications/pdf/icme-25-2.pdf)

- <span id="pub-jailguard"></span>Xiaoyu Zhang, Cen Zhang, Tianlin Li, Yihao Huang, Xiaojun Jia, Ming Hu, **Jie Zhang**, Yang Liu, Shiqing Ma, Chao Shen, **JailGuard: A Universal Detection Framework for Prompt-based Attacks on LLM Systems**, ACM Transactions on Software Engineering and Methodology (TOSEM), 2025 [[Paper]](https://arxiv.org/pdf/2312.10766) [[Code]](https://github.com/shiningrain/JailGuard)

- <span id="pub-camlopa"></span>Xiang Zhang, **Jie Zhang** [*equal contribution*], Zehua Ma, Jinyang Huang, Meng Li, Huan Yan, Peng Zhao, Zijian Zhang, Qing Guo, Tianwei Zhang, Bin Liu, Nenghai Yu, **CamLoPA: A Hidden Wireless Camera Localization Framework via Signal Propagation Path Analysis**, IEEE Symposium on Security and Privacy (S&P), 2025 [[Paper]](./publications/pdf/camlopa.pdf) [[Code]](https://github.com/CamLoPA/CamLoPA-Code) [[Video]](https://www.youtube.com/watch?v=GKam04FzeM4)

- <span id="pub-inferdpt"></span>Meng Tong, Kejiang Chen, **Jie Zhang**, Yuang Qi, Weiming Zhang, Nenghai Yu, Tianwei Zhang, Zhikun Zhang, **InferDPT: Privacy-preserving Inference for Black-box Large Language Models**, IEEE Transactions on Dependable and Secure Computing (TDSC), 2025 [[Paper]](https://arxiv.org/pdf/2310.12214) [[Code]](https://github.com/mengtong0110/InferDPT)

- <span id="pub-avfmae"></span>Xuecheng Wu, Heli Sun, Yifan Wang, Jiayu Nie, **Jie Zhang**, Yabing Wang, Junxiao Xue, Liang He, **AVF-MAE++: Scaling Affective Video Facial Masked Autoencoders via Efficient Audio-Visual Self-Supervised Learning**, IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025 [[Paper]](./publications/pdf/cvpr25-wxc.pdf)

- <span id="pub-scenetap"></span>Yue Cao, Yun Xing, **Jie Zhang**, Di Lin, Tianwei Zhang, Ivor Tsang, Yang Liu, Qing Guo, **SceneTAP: Scene-Coherent Typographic Adversarial Planner against Vision-Language Models in Real-World Environments**, IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR), 2025 [[Paper]](https://arxiv.org/pdf/2412.00114)

- <span id="pub-deephash"></span>Shuai Li, **Jie Zhang** [*Corresponding Author*], Yuang Qi, Kejiang Chen, Tianwei Zhang, Weiming Zhang, Nenghai Yu, **Clean Image May be Dangerous: Data Poisoning Attacks Against Deep Hashing**, IEEE Transactions on Multimedia (TMM), 2025 [[Paper]](./publications/pdf/TMM-ls.pdf)

- <span id="pub-videoshield"></span>Runyi Hu, **Jie Zhang** [*Corresponding Author*], Yiming Li, Jiwei Li, Qing Guo, Han Qiu, Tianwei Zhang, **VideoShield: Regulating Diffusion-based Video Generation Models via Watermarking**, International Conference on Learning Representations (ICLR), 2025 [[Paper]](https://openreview.net/pdf?id=uzz3qAYy0D) [[Code]](https://github.com/hurunyi/VideoShield)

- <span id="pub-translators"></span>Haolin Wu, Chang Liu, Jing Chen, Ruiying Du, Kun He, Yu Zhang, Cong Wu, Tianwei Zhang, Qing Guo, **Jie Zhang**, **When Translators Refuse to Translate: A Novel Attack to Speech Translation Systems**, USENIX Security Symposium, 2025 [[Paper]](./publications/pdf/usenix25-hl.pdf)

- <span id="pub-knowledgeinjection"></span>Shuai Li, Kejiang Chen, **Jie Zhang**, Kunsheng Tang, Kai Zeng, Weiming Zhang, Nenghai Yu, **Turning Your Strength into Watermark: Watermarking Large Language Model via Knowledge Injection**, IEEE Transactions on Information Forensics and Security (TIFS), 2025 [[Paper]](./publications/pdf/tifs25-ls.pdf)

- <span id="pub-sanitization"></span>Meng Tong, Kejiang Chen, Xiaojian Yuan, Jiayang Liu, Weiming Zhang, Nenghai Yu, **Jie Zhang**, **On the Vulnerability of Text Sanitization**, Annual Conference of the North American Chapter of the Association for Computational Linguistics (NAACL), <span style="color: red;"><strong>Oral</strong></span>, 2025 [[Paper]](https://arxiv.org/pdf/2410.17052) [[Code]](https://github.com/mengtong0110/On-the-Vulnerability-of-Text-Sanitization)

- <span id="pub-segue"></span>Zhiling Zhang, **Jie Zhang** [*Corresponding Author*], Kui Zhang, Wenbo Zhou, Ting Xu, Daiheng Gao, Zixian Guo, Qinglang Guo, Weiming Zhang, Nenghai Yu, **Segue: Side-information Guided Generative Unlearnable Examples for Facial Privacy Protection in Real World**, IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2025 [[Paper]](./publications/pdf/segue.pdf)

- <span id="pub-evolutionary"></span>Haoxiang Tian, Xingshuo Han, Guoquan Wu, An Guo, Yuan Zhou, **Jie Zhang**, Shuo Li, Jun Wei, Tianwei Zhang, **An LLM-empowered Adaptive Evolutionary Algorithm For Multi-Component Deep Learning Systems**, AAAI Conference on Artificial Intelligence (AAAI), <span style="color: red;"><strong>Oral</strong></span>, 2025 [[Paper]](./publications/pdf/aaai25.pdf)

- <span id="pub-ghost"></span>Junqi Zhang, Shaoyin Cheng, Linqing Hu, **Jie Zhang**, Chengyu Shi, Xingshuo Han, Tianwei Zhang, Yueqiang Cheng, Weiming Zhang, **The Ghost Navigator: Revisiting the Hidden Vulnerability of Localization in Autonomous Driving**, USENIX Security Symposium, 2025 [[Paper]](https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-junqi) [[Demo]](https://sites.google.com/view/msaf-demo)

- <span id="pub-siren"></span>Boheng Li, Yanhao Wei, Yankai Fu, Zhenting Wang, Yiming Li, **Jie Zhang** [*Corresponding Author*], Run Wang, Tianwei Zhang, **Towards Reliable Verification of Unauthorized Data Usage in Personalized Text-to-Image Diffusion Models**, IEEE Symposium on Security and Privacy (S&P), 2025 [[Paper]](https://arxiv.org/pdf/2410.10437) [[Code]](https://github.com/AntigoneRandy/SIREN)

- <span id="pub-themis"></span>Yutong Wu, **Jie Zhang** [*Corresponding Author*], Florian Kerschbaum, Tianwei Zhang, **THEMIS: Regulating Textual Inversion for Personalized Concept Censorship**, Network and Distributed System Security Symposium (NDSS), 2025 [[Paper]](https://arxiv.org/pdf/2308.10718) [[Code]](https://github.com/concept-censorship/concept-censorship.github.io/tree/main/code)

- <span id="pub-inffus"></span>Linqing Hu, Junqi Zhang, **Jie Zhang**, Shaoyin Cheng, Yuyi Wang, Weiming Zhang, Nenghai Yu, **Security Analysis and Adaptive False Data Injection against MultiSensor Fusion Localization for Autonomous Driving**, Information Fusion, 2024 [[Paper]](./publications/pdf/inffus.pdf)

- <span id="pub-art"></span>Guanlin Li, Kangjie Chen, Shudong Zhang, **Jie Zhang**, Tianwei Zhang, **ART: Automatic Red-teaming for Text-to-Image Models to Protect Benign Users**, Neural Information Processing Systems (NeurIPS), 2024 [[Paper]](https://arxiv.org/pdf/2405.19360) [[Code]](https://github.com/GuanlinLee/ART)

- <span id="pub-modelxray"></span>Yanghao Su, **Jie Zhang** [*Corresponding Author*], Ting Xu, Tianwei Zhang, Weiming Zhang, Nenghai Yu, **Model X-ray: Detecting Backdoored Models via Decision Boundary**, ACM International Conference on Multimedia (MM), 2024 [[Paper]](https://arxiv.org/pdf/2402.17465) [[Code]](https://github.com/SuYanghao/Model_X-ray)

- <span id="pub-facialpulse"></span>Ruiqi Wang, Jinyang Huang, **Jie Zhang** [*Corresponding Author*], Xin Liu, Xiang Zhang, Zhi Liu, Peng Zhao, Sigui Chen, Xiao Sun, **FacialPulse: An Efficient RNN-based Depression Detection via Temporal Facial Landmarks**, ACM International Conference on Multimedia (MM), <span style="color: red;"><strong>Oral</strong></span>, 2024 [[Paper]](https://arxiv.org/pdf/2408.03499) [[Code]](https://github.com/volatileee/FacialPulse)

- <span id="pub-robustwide"></span>Runyi Hu, **Jie Zhang** [*Corresponding Author*], Ting Xu, Tianwei Zhang, Jiwei Li, **Robust-Wide: Robust Watermarking against Instruction-driven Image Editing**, European Conference on Computer Vision (ECCV), 2024 [[Paper]](https://arxiv.org/pdf/2402.12688) [[Code]](https://github.com/hurunyi/Robust-Wide)

- <span id="pub-aqualora"></span>Weitao Feng, Wenbo Zhou, Jiyan He, **Jie Zhang** [*Corresponding Author*], Tianyi Wei, Guanlin Li, Tianwei Zhang, Weiming Zhang, Nenghai Yu, **AquaLoRA: Toward White-box Protection for Customized Stable Diffusion Models via Watermark LoRA**, International Conference on Machine Learning (ICML), 2024 [[Paper]](https://arxiv.org/pdf/2405.11135) [[Code]](https://github.com/Georgefwt/AquaLoRA)

- <span id="pub-facialprivacy"></span>Kui Zhang, Hang Zhou, **Jie Zhang**, Wenbo Zhou, Weiming Zhang, Nenghai Yu, **Transferable Facial Privacy Protection against Blind Face Restoration via Domain-Consistent Adversarial Obfuscation**, International Conference on Machine Learning (ICML), 2024 [[Paper]](https://icml.cc/virtual/2024/poster/32891)

- <span id="pub-fedau"></span>Hanlin Gu, Gongxi Zhu, **Jie Zhang**, Yuxing Han, Lixin Fan, Qiang Yang, **Unlearning during Learning: An Streamlined Federated Machine Unlearning Method**, International Joint Conference on Artificial Intelligence (IJCAI), 2024 [[Paper]](https://arxiv.org/pdf/2405.15474) [[Code]](https://github.com/Liar-Mask/FedAU)

- <span id="pub-gendercare"></span>Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*Corresponding Author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu, **GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models**, ACM Conference on Computer and Communications Security (CCS), <span style="color: red;"><strong>Distinguished Artifact Award</strong></span>, 2024 [[Paper]](publications/pdf/CCS_24_bias.pdf) [[Project Page]](https://academic-page.github.io/GenderCARE/)

- <span id="pub-scwm"></span>**Jie Zhang**, Dongdong Chen, Jing Liao, Zehua Ma, Han Fang, Weiming Zhang, Hua Gang, Nenghai Yu, **Robust Model Watermarking for Image Processing Networks via Structure Consistency**, IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2024 [[Paper]](publications/pdf/Robust_Model_Watermarking_for_Image_Processing_Networks_via_Structure_Consistency.pdf)

- <span id="pub-same"></span>Yi Xie, **Jie Zhang**, Shiqian Zhao, Tianwei Zhang, Xiaofeng Chen, **SAME: Sample Reconstruction Against Model Extraction Attacks**, AAAI Conference on Artificial Intelligence (AAAI), 2024 [[Paper]](https://arxiv.org/pdf/2312.10578.pdf)

- <span id="pub-zeroday"></span>Yihao Huang, Felix Juefei-Xu, Qing Guo, **Jie Zhang**, Yutong Wu, Ming Hu, Tianlin Li, Geguang Pu, Yang Liu, **Personalization as a Shortcut for Few-Shot Backdoor Attack against Text-to-Image Diffusion Models**, AAAI Conference on Artificial Intelligence (AAAI), 2024 [[Paper]](publications/pdf/Zeroday.pdf) [[Code]](https://github.com/Huang-yihao/Personalization-based_backdoor)

- <span id="pub-dfhl"></span>Xiaojian Yuan, Kejiang Chen, Wen Huang, **Jie Zhang**, Weiming Zhang, Nenghai Yu, **Data-Free Hard-Label Robustness Stealing Attack**, AAAI Conference on Artificial Intelligence (AAAI), 2024 [[Paper]](https://arxiv.org/pdf/2312.05924) [[Code]](https://github.com/LetheSec/DFHL-RS-Attack)

- Wenbo Zhou, Dongdong Chen, Jing Liao, **Jie Zhang**, Kejiang Chen, Weiming Zhang, Nenghai Yu, **Attribute-Aware Head Swapping Guided by 3d Modeling**, IEEE International Conference on Acoustics, Speech, and Signal Processing (ICASSP), 2024 [[Paper]](publications/pdf/Attribute-Aware_Head_Swapping_Guided_by_3d_Modeling.pdf)

- <span id="pub-timbre"></span>Chang Liu, **Jie Zhang** [*Corresponding Author*], Tianwei Zhang, Xi Yang, Weiming Zhang, Nenghai Yu, **Detecting Voice Cloning Attacks via Timbre Watermarking**, Network and Distributed System Security Symposium (NDSS), 2024 [[Paper]](https://timbrewatermarking.github.io/paper/NDSS_Detecting_Voice_Cloning_Attacks_via_Timbre_Watermarking.pdf) [[Project Page]](https://timbrewatermarking.github.io/index.html)

- <span id="pub-book"></span>**Jie Zhang**, Dongdong Chen, Jing Liao, Weiming Zhang, Nenghai Yu, **Digital Watermarking for Machine Learning Models - Chapter 6: Protecting Image Processing Networks via Model Watermarking**, Springer Book Chapter, 2023 [[Link]](https://www.springerprofessional.de/en/protecting-image-processing-networks-via-model-watermarking/25420310)

- <span id="pub-dbwm"></span>Zhiwen Ren, Han Fang, **Jie Zhang**, Zehua Ma, Ronghao Lin, Weiming Zhang, Nenghai Yu, **A Robust Database Watermarking Scheme That Preserves Statistical Characteristics**, IEEE Transactions on Knowledge and Data Engineering (TKDE), 2023 [[Paper]](https://ieeexplore.ieee.org/abstract/document/10286426)

- <span id="pub-protego"></span>Yanru He, Kejiang Chen, Guoqiang Chen, Zehua Ma, Kui Zhang, **Jie Zhang**, Huanyu Bian, Han Fang, Weiming Zhang, Nenghai Yu, **ProTegO: Protect Text Content against OCR Extraction Attack**, ACM International Conference on Multimedia (MM), 2023 [[Paper]](https://dl.acm.org/doi/10.1145/3581783.3612076) [[Code]](https://github.com/Ruby-He/ProTegO)

- <span id="pub-ada3diff"></span>Kui Zhang, Hang Zhou, **Jie Zhang**, Qidong Huang, Weiming Zhang, Nenghai Yu, **Ada3Diff: Defending against 3D Adversarial Point Clouds via Adaptive Diffusion**, ACM International Conference on Multimedia (MM), 2023 [[Paper]](https://arxiv.org/pdf/2211.16247) [[Code]](https://github.com/ZhangXGe/Ada3Diff)

- <span id="pub-mac"></span>Haozhe Chen, **Jie Zhang** [*Corresponding Author*], Kejiang Chen, Weiming Zhang, Nenghai Yu, **Model Access Control Based on Hidden Adversarial Examples for Automatic Speech Recognition**, IEEE Transactions on Artificial Intelligence (TAI), 2023 [[Paper]](https://ieeexplore.ieee.org/abstract/document/10152479)

- <span id="pub-autostegafont"></span>Xi Yang, **Jie Zhang** [*equal contribution*], Han Fang, Zehua Ma, Chang Liu, Weiming Zhang, Nenghai Yu, **AutoStegaFont: Synthesizing Vector Fonts for Hiding Information in Documents**, AAAI Conference on Artificial Intelligence (AAAI), 2023 [[Paper]](publications/pdf/AutoStegaFont.pdf) [[Demo]](publications/video/AutoStegaFont.mp4)

- <span id="pub-dear"></span>Chang Liu, **Jie Zhang** [*equal contribution*], Han Fang, Zehua Ma, Weiming Zhang, Nenghai Yu, **DeAR: A Deep-learning-based Audio Re-cording Resilient Watermarking**, AAAI Conference on Artificial Intelligence (AAAI), 2023 [[Paper]](https://arxiv.org/pdf/2212.02339.pdf)

- <span id="pub-plg-mia"></span>Xiaojian Yuan, Kejiang Chen, Wen Huang, **Jie Zhang**, Weiming Zhang, Nenghai Yu, **Pseudo Label-Guided Model Inversion Attack via Conditional Generative Adversarial Network**, AAAI Conference on Artificial Intelligence (AAAI), 2023 [[Paper]](https://arxiv.org/pdf/2312.05924) [[Code]](https://github.com/LetheSec/PLG-MI-Attack)

- <span id="pub-provenance"></span>Xi Yang, **Jie Zhang** [*Corresponding Author*], Kejiang Chen, Weiming Zhang, Zehua Ma, Feng Wang, Nenghai Yu, **Tracing Text Provenance via Context-Aware Lexical Substitution**, AAAI Conference on Artificial Intelligence (AAAI), 2022 [[Paper]](publications/pdf/aaai22.pdf)

- <span id="pub-poison-ink"></span>**Jie Zhang**, Dongdong Chen, Jing Liao, Qidong Huang, Hua Gang, Weiming Zhang, Nenghai Yu, **Poison Ink: Robust and Invisible Backdoor Attack**, IEEE Transactions on Image Processing (TIP), 2022 [[Paper]](https://arxiv.org/abs/2108.02488) [[Code]](https://github.com/ZJZAC/Poison-Ink)

- <span id="pub-deepip"></span>**Jie Zhang**, Dongdong Chen, Jing Liao, Weiming Zhang, Hua Gang, Huamin Feng, Nenghai Yu, **Deep Model Intellectual Property Protection via Deep Watermarking**, IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI), 2021 [[Paper]](https://arxiv.org/pdf/2103.04980) [[Code]](https://github.com/ZJZAC/Deep-Model-Watermarking)

- <span id="pub-initiative"></span>Qidong Huang, **Jie Zhang** [*equal contribution*], Wenbo Zhou, Weiming Zhang, Nenghai Yu, **Initiative Defense against Facial Manipulation**, AAAI Conference on Artificial Intelligence (AAAI), 2021 [[Paper]](publications/pdf/aaai21.pdf) [[Code]](https://github.com/shikiw/initiative-defense-for-deepfake)

- <span id="pub-reversible"></span>Xiquan Guan, Huamin Feng, Weiming Zhang, Hang Zhou, **Jie Zhang**, Nenghai Yu, **Reversible Watermarking in Deep Convolutional Neural Networks for Integrity Authentication**, ACM International Conference on Multimedia (MM), 2020 [[Paper]](https://arxiv.org/pdf/2104.04268)

- <span id="pub-passport"></span>**Jie Zhang**, Dongdong Chen, Jing Liao, Weiming Zhang, Hua Gang, Nenghai Yu, **Passport-aware Normalization for Deep Model Protection**, Neural Information Processing Systems (NeurIPS), 2020 [[Paper]](https://proceedings.neurips.cc/paper/2020/file/ff1418e8cc993fe8abcfe3ce2003e5c5-Paper.pdf) [[Code]](https://github.com/ZJZAC/Passport-aware-Normalization)

- <span id="pub-mwipn"></span>**Jie Zhang**, Dongdong Chen, Jing Liao, Han Fang, Weiming Zhang, Wenbo Zhou, Hao Cui, Nenghai Yu, **Model Watermarking for Image Processing Networks**, AAAI Conference on Artificial Intelligence (AAAI), 2020 [[Paper]](https://arxiv.org/pdf/2002.11088.pdf) [[Code]](https://github.com/ZJZAC/Deep-Model-Watermarking)


# 🎖 Honors and Awards
- *2026.08* 🏅 Champion (1st Place) of both the Preliminary (Phase 1, white-box) and Final (Phase 2, overall) phases, [LifeGenIP Challenge: Unlearnable Videos against Diffusion-based Customization @ ECCV 2026](https://github.com/tmllab/ECCV26_LifeGenIP_starting_kit).
- *2025.06* [Candidates of best paper (One of the Top 15 Papers), ICME, 2025](https://2025.ieeeicme.org/awards/)
- *2024.10* [Distinguished Artifact Award, CCS, 2024](https://www.sigsac.org/ccs/CCS2024/program/awards.html)
- *2021.12* National Scholarship for Doctoral Students, China. 
- *2020.12* Cyberspace Science Scholarship (funded by Academician Xiaomo Wang), China. 

# 📖 Educations
- *2017.09 - 2022.06*, PhD of Cyber Science, University of Science and Technology of China. 
- *2013.09 - 2017.06*, Bachelor of Electrical Engineering and Automation, China University of Geosciences (Beijing).

# 💬 Invited Talks
- *2025.08*, Advancing Trustworthy and Responsible AI, to National AI Research Lab, KAIST \| [\[slide\]](talks\KAIST.pdf)
- *2025.03*, Building Trustworthy Text-to-Image Models: Risks, Defenses, and Forensics, at IMDA \| [\[slide\]](talks\IMDA.pdf)
- *2025.02*, Recent LLM Tendency, at CFAR, A*STAR \| [\[slide\]](talks\LLM_tendency.pdf)
- *2024.08*, Trustworthy Generative AI, at CFAR, A*STAR \| [\[slide\]](talks\Zhang_Jie_CFAR.pdf)
- *2024.04*, AIGC Security, at Nanyang Technological University \| [\[slide\]](talks\AIGC_Security.pdf)
- *2023.11*, IP Protection on Deep Models and Data, at Shanghai Jiao Tong University \| [\[poster\]](talks\sjtu.jpg)
- *2023.09*, Model IP Protection, at University of Science and Technology of China  \| [\[slide\]](talks/IP_ustc.pptx)

# 🧰 Useful Tools
- [Survey on IP protection for AI models](https://github.com/ZJZAC/awesome-deep-model-IP-protection)
- [Reinforcement Learning Enhanced LLMs: A Survey](https://github.com/ShuheWang1998/Reinforcement-Learning-Enhanced-LLMs-A-Survey)
- [Unlocking the Mysteries of OpenAI o1: A Survey of the Reasoning Abilities of Large Language Models](https://github.com/ShuheSH/A-Survey-of-the-Reasoning-Abilities-of-LLMs)
- Selected Projects: [[**SafeGuider**]](https://academic-page.github.io/SafeGuider/), [[**GenderCARE**]](https://academic-page.github.io/GenderCARE/), [[**Timbre Watermarking**]](https://timbrewatermarking.github.io/index.html), [[**EraseAnything**]](https://tomguluson92.github.io/projects/eraseanything/)

# 💻 Internships
- *2019.06 - 2019.08*, [Pvmed Research](https://www.pvmedtech.com/en/), China.


# 📑 CV 
<!-- [pdf](cv/ZJ_resume.pdf) -->
- [CV](cv/ZJ_CV_tiny.pdf)
<!-- - [CV-full](cv/ZJ_CV.pdf) -->
