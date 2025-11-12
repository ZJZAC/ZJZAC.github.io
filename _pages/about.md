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

<span class='anchor' id='about-me'></span>

I am currently a Research Scientist at A*STAR Centre for Frontier AI Research ([CFAR](https://www.a-star.edu.sg/cfar)), working with [**Prof. Qing Guo**](https://tsingqguo.github.io/) and [**Prof. Ivor Tsang**](https://www.a-star.edu.sg/cfar/about-cfar/management/prof-ivor-tsang). Before that, I was a Research Fellow at Nanyang Technological University, working with [**Prof. Tianwei Zhang**](https://personal.ntu.edu.sg/tianwei.zhang/) and [**Prof. Yang Liu**](https://personal.ntu.edu.sg/yangliu/). Besides, I worked with [**Prof. Florian Kerschbaum**](https://cs.uwaterloo.ca/~fkerschb/) (from University of Waterloo).  I received my Ph.D. degree with honors in School of Cyber Science and Technology from University of Science and Technology of China (USTC) in 2022, advised by [**Prof. Nenghai Yu**](https://scholar.google.com/citations?user=7620QAMAAAAJ&hl=zh-CN), [**Prof. Weiming Zhang**](https://scholar.google.com/citations?user=eTCfl6cAAAAJ&hl=zh-CN), and **Prof. Huamin Feng**. I also very luckily collaborated closely with Dr. [**Dongdong Chen**](https://www.dongdongchen.bid/) (at Microsoft GenAI) and [**Prof. Jing Liao**](https://www.cityu.edu.hk/stfprofile/jingliao.htm) (at City University of Hong Kong) during my Ph.D. journey. 

<div style="text-align: center;">
    <img src="/images/Research_focus.png" alt="Research Interest" width="70%">
</div>


My recent research interest mainly focuses on ***How to build Trustworthy AI & Gen-AI***:

- **Vulnerability Evaluation**: [[TIP 2022]](https://arxiv.org/abs/2108.02488), [[AAAI 2023]](https://arxiv.org/pdf/2312.05924),  [[MM 2023]](https://dl.acm.org/doi/10.1145/3581783.3612076), [[AAAI 2024]](publications/pdf/Zeroday.pdf), [[AAAI 2024]](https://arxiv.org/pdf/2312.05924), [[AAAI 2024]](https://arxiv.org/pdf/2312.10578.pdf), [[CCS 2024]](publications/pdf/CCS_24_bias.pdf),  [[NeurIPS 2024]](https://arxiv.org/pdf/2405.19360), [[Information Fusion 2024]](./publications/pdf/inffus.pdf), [[USENIX Security 2025]](https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-junqi), [[NAACL 2025]](https://arxiv.org/pdf/2410.17052), [[USENIX Security 2025]](./publications/pdf/usenix25-hl.pdf), [[TMM 2025]](./publications/pdf/TMM-ls.pdf), [[CVPR 2025]](https://arxiv.org/pdf/2412.00114), [[S&P 2025]](./publications/pdf/camlopa.pdf), [[CCS 2025]](https://arxiv.org/pdf/2405.07496), [[USENIX Security 2025]](https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-xiang), [[NeurIPS 2025]](https://arxiv.org/pdf/2506.16690), [[Agent4Science 2025]](https://arxiv.org/pdf/2509.06996), [[CIKM 2025]](https://dl.acm.org/doi/10.1145/3746252.3760916), [[AAAI 2026]](https://arxiv.org/pdf/2412.08014)

- **Proactive Safeguard**: [[AAAI 2021]](publications/pdf/aaai21.pdf), [[MM 2023]](https://arxiv.org/pdf/2211.16247),  [[IJCAI 2024]](https://arxiv.org/pdf/2405.15474), [[ICML 2024]](https://icml.cc/virtual/2024/poster/32891), [[MM 2024]](https://arxiv.org/pdf/2402.17465), [[NDSS 2025]](https://arxiv.org/pdf/2308.10718), [[AAAI 2025]](./publications/pdf/aaai25.pdf), [[ICASSP 2025]](./publications/pdf/segue.pdf), [[TDSC 2025]](https://arxiv.org/pdf/2310.12214), [[TOSEM 2025]](https://arxiv.org/pdf/2312.10766), [[ICML 2025]](https://openreview.net/forum?id=qLA9WbjGcS), [[ICML 2025]](https://openreview.net/pdf?id=5KszXnnkG5), [[CCS 2025]](https://arxiv.org/pdf/2510.05173)

- **Post-hoc Forensic**: [[AAAI 2020]](https://arxiv.org/pdf/2002.11088), [[NeurIPS 2020]](https://proceedings.neurips.cc/paper/2020/file/ff1418e8cc993fe8abcfe3ce2003e5c5-Paper.pdf), [[MM 2020]](https://arxiv.org/pdf/2104.04268), [[TPAMI 2021]](https://arxiv.org/pdf/2103.04980), [[AAAI 2022]](publications/pdf/aaai22.pdf),  [[TAI 2023]](https://ieeexplore.ieee.org/abstract/document/10152479), [[Springer Book]](https://www.springerprofessional.de/en/protecting-image-processing-networks-via-model-watermarking/25420310), [[AAAI 2023]](https://arxiv.org/pdf/2212.02339.pdf), [[AAAI 2023]](publications/pdf/AutoStegaFont.pdf), [[TKDE 2023]](https://ieeexplore.ieee.org/abstract/document/10286426), [[TPAMI 2024]](publications/pdf/Robust_Model_Watermarking_for_Image_Processing_Networks_via_Structure_Consistency.pdf), [[NDSS 2024]](https://timbrewatermarking.github.io/paper/NDSS_Detecting_Voice_Cloning_Attacks_via_Timbre_Watermarking.pdf), [[ICML 2024]](https://arxiv.org/pdf/2405.11135), [[ECCV 2024]](https://arxiv.org/pdf/2402.12688), [[S&P 2025]](https://arxiv.org/pdf/2410.10437), [[TIFS 2025]](./publications/pdf/tifs25-ls.pdf), [[ICLR 2025]](https://openreview.net/pdf?id=uzz3qAYy0D), [[ICME 2025]](./publications/pdf/icme-25-2.pdf), [[ICME 2025]](https://arxiv.org/pdf/2308.12141), [[TDSC 2025]](https://ieeexplore.ieee.org/abstract/document/11037547), [[TPAMI 2025]](https://arxiv.org/pdf/2412.08082?), [[NeurIPS 2025]](https://arxiv.org/pdf/2504.12739)

Others
- **Affective Computing**: [[MM 2024]](https://arxiv.org/pdf/2408.03499), [[CVPR 2025]](./publications/pdf/cvpr25-wxc.pdf), [[MM 2025]](https://arxiv.org/pdf/2507.15765)
- **AI for Science**: [[AI4X 2025]](https://arxiv.org/pdf/2507.07486), [[AI for Science 2025]](https://iopscience.iop.org/article/10.1088/3050-287X/adfee5/pdf)


<!-- - **AIGC protection and regulation**: [[AAAI 2022]](publications/pdf/aaai22.pdf), [[NDSS 2024]](https://timbrewatermarking.github.io/paper/NDSS_Detecting_Voice_Cloning_Attacks_via_Timbre_Watermarking.pdf), [[AAAI 2024]](publications/pdf/Zeroday.pdf), [[CCS 2024]](publications/pdf/CCS_24_bias.pdf), [[ICML 2024]](https://arxiv.org/pdf/2405.11135), [[ECCV 2024]](https://arxiv.org/pdf/2402.12688), [[NDSS 2025]](https://arxiv.org/pdf/2308.10718), [[S&P 2025]](https://arxiv.org/pdf/2410.10437), [[NeurIPS 2024]](https://arxiv.org/pdf/2405.19360), [[ICLR 2025]](https://openreview.net/pdf?id=uzz3qAYy0D)

- **Trustworty AI**: [[AAAI 2021]](publications/pdf/aaai21.pdf), [[TIP 2022]](https://arxiv.org/abs/2108.02488), [[AAAI 2023]](https://arxiv.org/pdf/2312.05924),  [[MM 2023]](https://arxiv.org/pdf/2211.16247), [[MM 2023]](https://dl.acm.org/doi/10.1145/3581783.3612076), [[AAAI 2024]](https://arxiv.org/pdf/2312.05924), [[AAAI 2024]](https://arxiv.org/pdf/2312.10578.pdf), [[IJCAI 2024]](https://arxiv.org/pdf/2405.15474), [[ICML 2024]](https://icml.cc/virtual/2024/poster/32891), [[MM 2024]](https://arxiv.org/pdf/2402.17465), [[USENIX Security 2025]](), [[Information Fusion 2024]](./publications/pdf/inffus.pdf), [[AAAI 2025]](./publications/pdf/aaai25.pdf), [[ICASSP 2025]](./publications/pdf/segue.pdf), [[USENIX Security 2025]](./publications/pdf/usenix25-hl.pdf)

- [**IP protection for AI models**](https://github.com/ZJZAC/awesome-deep-model-IP-protection): [[AAAI 2020]](https://arxiv.org/pdf/2002.11088), [[NeurIPS 2020]](https://proceedings.neurips.cc/paper/2020/file/ff1418e8cc993fe8abcfe3ce2003e5c5-Paper.pdf), [[MM 2020]](https://arxiv.org/pdf/2104.04268), [[TPAMI 2021]](https://arxiv.org/pdf/2103.04980), [[TAI 2023]](https://ieeexplore.ieee.org/abstract/document/10152479), [[Springer Book]](https://www.springerprofessional.de/en/protecting-image-processing-networks-via-model-watermarking/25420310), [[TPAMI 2024]](publications/pdf/Robust_Model_Watermarking_for_Image_Processing_Networks_via_Structure_Consistency.pdf)

- **IP protection for different modalities**: [[AAAI 2023]](https://arxiv.org/pdf/2212.02339.pdf), [[AAAI 2023]](publications/pdf/AutoStegaFont.pdf), [[TKDE 2023]](https://ieeexplore.ieee.org/abstract/document/10286426)

- **Affective Computing**: [[MM 2024]](https://arxiv.org/pdf/2408.03499) -->

⭐️⭐️ *If you are interested in my research topics or have innovative ideas to share, I would love to hear from you! I am always open to external collaborations and exploring new possibilities together! **Feel free to email me anytime!*** 🚀🚀

<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->




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



<!-- # 🔥 News
- *2025.06*: &nbsp;🎉🎉 One paper is accepted to USENIX Security 2025. Congrats to Xiang Zhang!
- *2025.05*: &nbsp;🎉🎉 Two papers are accepted to ACM CCS 2025. Congrats to Peigui Qi and Gelei Deng!
- *2025.05*: &nbsp;🎉🎉 Two papers are accepted to ICML 2025. Congrats to Yutong Wu and Daiheng Gao!
- *2025.04*: &nbsp;🎉🎉	I am excited to serve as the Organizer of [the 4th Workshop on Practical Deep Learning (Practical-DL 2025)](https://practical-dl.github.io/)! We warmly welcome your paper submissions, looking forward to your contributions!
- *2025.04*: &nbsp;🎉🎉 I’m excited to visit MBZUAI as a Visiting Researcher, hosted by Prof. [Nils Lukas](https://nilslukas.github.io/). Looking forward to the collaboration and new insights!
- *2025.03*: &nbsp;🎉🎉 I’m excited to give a talk at the [IMDA Technical Sharing Session on Multimodal Safety](https://www.imda.gov.sg/activities/activities-catalogue/technical-sharing-session-on-multimodal-safety).
- *2025.03*: &nbsp;🎉🎉 Two papers are accepted to ICME 2025. Congrats to Zhe Lei and Yanyan Liu!
- *2025.03*: &nbsp;🎉🎉 One paper is accepted to TOSEM. Congrats to Xiaoyu Zhang!
- *2025.03*: &nbsp;🎉🎉 One paper is accepted to S&P 2025. Congrats to Xiang Zhang!
- *2025.03*: &nbsp;🎉🎉 One paper is accepted to TDSC. Congrats to Meng Tong!
- *2025.02*: &nbsp;🎉🎉 I am appointed as the Innovation Lead at CFAR, A*STAR. Congrats to myself, Fighting!
- *2025.02*: &nbsp;🎉🎉 Two papers are accepted to CVPR 2025. Congrats to Yue Cao and Xuecheng Wu!
- *2025.02*: &nbsp;🎉🎉 One paper is accepted to TMM. Congrats to Shuai Li!
- *2025.01*: &nbsp;🎉🎉 One paper is accepted to ICLR 2025. Congrats to Runyi Hu!
- *2025.01*: &nbsp;🎉🎉 One paper is accepted to USENIX Security 2025. Congrats to Haolin Wu!
- *2025.01*: &nbsp;🎉🎉 One paper is accepted to TIFS. Congrats to Shuai Li!
- *2025.01*: &nbsp;🎉🎉 One paper is accepted to NAACL 2025 (<span style="color: red;"><strong>Oral</strong></span>). Congrats to Meng Tong!
- *2024.12*: &nbsp;🎉🎉 One paper is accepted to ICASSP 2025. Congrats to Zhiling Zhang!
- *2024.12*: &nbsp;🎉🎉 One paper is accepted to AAAI 2025 (<span style="color: red;"><strong>Oral</strong></span>). Congrats to Haoxiang Tian!
- *2024.11*: &nbsp;🎉🎉 One paper is accepted to Information Fusion 2024. Congrats to Linqing Hu!
- *2024.10*: &nbsp;🎉🎉 GenderCARE is awarded the <span style="color: red;"><strong>Distinguished Artifact Award</strong></span> in CCS 2024. Congrats!
- *2024.09*: &nbsp;🎉🎉 One paper is accepted to NeurIPS 2024. Congrats to Guanlin Li! 
- *2024.09*: &nbsp;🎉🎉 One paper is accepted to USENIX Security 2025. Congrats to Junqi Zhang! 
- *2024.09*: &nbsp;🎉🎉 One paper is accepted to S&P 2025. Congrats to Boheng Li! 
- *2024.08*: &nbsp;🎉🎉 I join the CFAR, A*STAR as a research scientist. Thanks a lot to Prof. Tianwei Zhang for the support at NTU! 
- *2024.07*: &nbsp;🎉🎉 One paper is accepted to NDSS 2025. Congrats to Yutong Wu! 
- *2024.07*: &nbsp;🎉🎉 Two papers are accepted to ACM MM 2024 (One <span style="color: red;"><strong>Oral</strong></span>). Congrats to Yanghao Su and Ruiqi Wang! 
- *2024.07*: &nbsp;🎉🎉 One paper is accepted to ECCV 2024. Congrats to Runyi Hu! 
- *2024.05*: &nbsp;🎉🎉 Two papers are accepted to ICML 2024. Congrats to Kui Zhang and Weitao Feng! 
- *2024.04*: &nbsp;🎉🎉 One paper is accepted to IJCAI 2024. Congrats to Hanlin Gu!
- *2024.04*: &nbsp;🎉🎉 One paper is accepted to ACM CCS 2024. Congrats to Kunsheng Tang! 
- *2024.03*: &nbsp;🎉🎉 One paper is accepted to TPAMI. Congrats to myself, Fighting! 
- *2023.12*: &nbsp;🎉🎉 Three papers are accepted to AAAI 2024. Congrats to Yi Xie, Yihao Huang, and Xiaojian Yuan!
- *2023.12*: &nbsp;🎉🎉 One paper is accepted to ICASSP 2024. Congrats to Prof. Wenbo Zhou!
- *2023.11*: &nbsp;🎉🎉 One paper is accepted to NDSS 2024. Congrats to Chang Liu! -->

# 📝 Selected Preprints 

- [A comprehensive survey in llm (-agent) full stack safety: Data, training and deployment](https://arxiv.org/pdf/2504.15585?)
- [Reinforcement learning enhanced llms: A survey](https://arxiv.org/pdf/2412.10400)




# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2026</div><img src='./publications/img/aaai26.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[MAGIC: Mastering Physical Adversarial Generation in Context through Collaborative LLM Agents](https://arxiv.org/pdf/2412.08014) 


Yun Xing, Nhat Chung, **Jie Zhang**, Yue Cao, Ivor Tsang, Yang Liu, Lei Ma, Qing Guo

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CIKM 2025</div><img src='./publications/img/cikm25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Evaluating Differentially Private Generation of Domain-Specific Text](https://dl.acm.org/doi/10.1145/3746252.3760916) 

Yidan Sun, Viktor Schlegel, Srinivasan Nandakumar, Iqra Zahid, Yuping Wu, Warren Del-Pinto, Goran Nenadic, Siew-Kei Lam, **Jie Zhang**,  Anil A Bharath

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Agent4Science 2025</div><img src='./publications/img/a4s.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Visible Yet Unreadable: A Systematic Blind Spot of Vision–Language Models Across Writing Systems](https://arxiv.org/pdf/2509.06996) 

AI, **Jie Zhang**, Ting Xu, Gelei Deng, Runyi Hu, Han Qiu, Tianwei Zhang, Qing Guo, Ivor Tsang

[[**Code**]](https://github.com/ZJZAC/character-fusion-generator) [[**Video**]](https://drive.google.com/file/d/1XMB4I-OdhDZWT5wSQyqd8kKuS58OzG-j/view?usp=sharing) [<span style="color: red;"><strong>Spotlight</strong></span>]


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='./publications/img/nips25-1.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Mask Image Watermarking](https://arxiv.org/pdf/2504.12739)

Runyi Hu, **Jie Zhang** [*Corresponding Author*], Shiqian Zhao, Nils Lukas, Jiwei Li, Qing Guo, Han Qiu, Tianwei Zhang

[[**Code**]](https://github.com/hurunyi/MaskWM)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2025</div><img src='./publications/img/nips25-2.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[DepthVanish: Optimizing Adversarial Interval Structures for Stereo-Depth-Invisible Patches](https://arxiv.org/pdf/2506.16690)

Yun Xing, Yue Cao, Nhat Chung, **Jie Zhang**, Ivor Tsang, Ming-Ming Cheng, Yang Liu, Lei Ma, Qing Guo

<!-- [[**Demo**]](https://drive.google.com/file/d/17cJPO7dffgDxLKg5e3AQ8wEo0fdUYYlt/view?usp=sharing) -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI 2025</div><img src='./publications/img/tpami-25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[FaceTracer: Unveiling Source Identities from Swapped Face Images and Videos for Fraud Prevention](https://arxiv.org/pdf/2412.08082?)

Zhongyi Zhang, **Jie Zhang**, Wenbo Zhou, Xinghui Zhou, Qing Guo, Weiming Zhang, Tianwei Zhang, Nenghai Yu

<!-- [[**Demo**]](https://drive.google.com/file/d/17cJPO7dffgDxLKg5e3AQ8wEo0fdUYYlt/view?usp=sharing) -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AI for Science 2025</div><img src='./publications/img/ai4s-25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Controlling Risks of AI in Chemical Science with Agents](https://iopscience.iop.org/article/10.1088/3050-287X/adfee5/pdf)

Jiyan He, Weitao Feng, Yaosen Min, Jingwei Yi, Kunsheng Tang, Shuai Li, **Jie Zhang**, Kejiang Chen, Wenbo Zhou, Xing Xie, Weiming Zhang, Nenghai Yu, Shuxin Zheng

<!-- [[**Demo**]](https://drive.google.com/file/d/17cJPO7dffgDxLKg5e3AQ8wEo0fdUYYlt/view?usp=sharing) -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2025</div><img src='./publications/img/mm25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Learning from Heterogeneity: Generalizing Dynamic Facial Expression Recognition via Distributionally Robust Optimization](https://arxiv.org/pdf/2507.15765)

Feng-Qi Cui, Anyang Tong, Jinyang Huang, **Jie Zhang**, Dan Guo, Zhi Liu, Meng Wang 

<!-- [[**Demo**]](https://drive.google.com/file/d/17cJPO7dffgDxLKg5e3AQ8wEo0fdUYYlt/view?usp=sharing) -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AI4X 2025</div><img src='./publications/img/ai4x25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Sparse Autoencoders Reveal Interpretable Structure in Small Gene Language Models](https://arxiv.org/pdf/2507.07486)

Haoxiang Guan, Jiyan He, **Jie Zhang**

<!-- [[**Demo**]](https://drive.google.com/file/d/17cJPO7dffgDxLKg5e3AQ8wEo0fdUYYlt/view?usp=sharing) -->

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TDSC 2025</div><img src='./publications/img/tdsc25-yx.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Synthesizing Glyph Vectors for Practical Information Hiding in Documents](https://ieeexplore.ieee.org/abstract/document/11037547)

Xi Yang, **Jie Zhang** [*Corresponding Author*], Chang Liu, Han Fang, Zehua Ma, Kejiang Chen, Weiming Zhang, Nenghai Yu

[[**Demo**]](https://drive.google.com/file/d/17cJPO7dffgDxLKg5e3AQ8wEo0fdUYYlt/view?usp=sharing)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">USENIX Security 2025</div><img src='./publications/img/usenix25-zhang.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[DiffLoc: WiFi Hidden Camera Localization Based on Electromagnetic Diffraction](https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-xiang)

Xiang Zhang, Jie Zhang, Huan Yan, Jinyang Huang, Zehua Ma, Bin Liu, Meng Li, Kejiang Chen, Qing Guo, Tianwei Zhang, Zhi Liu

[[**Code**]](https://zenodo.org/records/15592887)

</div>
</div>





<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2025</div><img src='./publications/img/ccs25-qi.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[SafeGuider: Robust and Practical Content Safety Control for Text-to-Image Models](https://arxiv.org/pdf/2510.05173)

Peigui Qi, Kunsheng Tang, Wenbo Zhou, Weiming Zhang, Nenghai Yu, Tianwei Zhang, Qing Guo, **Jie Zhang** [*Corresponding Author*]

[[**Project Page**]](https://academic-page.github.io/SafeGuider/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2025</div><img src='./publications/img/ccs25-deng.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Oedipus: LLM-enchanced Reasoning CAPTCHA Solver](https://arxiv.org/pdf/2405.07496)

Gelei Deng, Haoran Ou, Yi Liu, **Jie Zhang**, Tianwei Zhang, Yang Liu

<!-- [[**Code**]](https://github.com/shiningrain/JailGuard) -->

</div>
</div>




<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2025</div><img src='./publications/img/icml-wu.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Cowpox: Towards the Immunity of VLM-based Multi-Agent Systems](https://openreview.net/pdf?id=5KszXnnkG5)

Yutong Wu, **Jie Zhang** [*Corresponding Author*], Yiming Li, Chao Zhang, Qing Guo, Han Qiu, Nils Lukas, Tianwei Zhang

<!-- [[**Code**]](https://github.com/shiningrain/JailGuard) -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2025</div><img src='./publications/img/icml-gao.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[EraseAnything: Enabling Concept Erasure in Rectified Flow Transformers](https://openreview.net/forum?id=qLA9WbjGcS)

Daiheng Gao, Shilin Lu, Shaw Walters, Wenbo Zhou, Jiaming Chu, **Jie Zhang**, Bang Zhang, Mengxi Jia, Jian Zhao, Zhaoxin Fan, Weiming Zhang

[[**Project Page**]](https://tomguluson92.github.io/projects/eraseanything/)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICME 2025</div><img src='./publications/img/icme25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Aparecium: Revealing Secrets from Physical Photographs](https://arxiv.org/pdf/2308.12141)

Zhe Lei, **Jie Zhang** [*Corresponding Author*], Jingtao Li, Weiming Zhang, Nenghai Yu

[[**Demo**]](https://www.linkedin.com/posts/jie-zhang-0a67b9343_we-present-an-innovative-and-robust-watermarking-activity-7285878919340187648-PyJW?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFYU_D4BfJzToc_q6EODxx6TkZl5DLLBqNo)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICME 2025</div><img src='./publications/img/icme25-lyy.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[A Watermark Updating Framework for Multi-stage Image Content Distribution](./publications/pdf/icme-25-2.pdf)

Yanyan Liu, Bin Liu, **Jie Zhang**, Xiang Zhang, Zehua Ma, Nenghai Yu

<span style="color: red;"><strong>[one of the Top 15 Papers]</strong></span> 

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TOSEM 2025</div><img src='./publications/img/jailguard.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[JailGuard: A Universal Detection Framework for Prompt-based Attacks on LLM Systems](https://arxiv.org/pdf/2312.10766)

Xiaoyu Zhang, Cen Zhang, Tianlin Li, Yihao Huang, Xiaojun Jia, Ming Hu, **Jie Zhang**, Yang Liu, Shiqing Ma, Chao Shen

[[**Code**]](https://github.com/shiningrain/JailGuard)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">S&P 2025</div><img src='./publications/img/camlopa.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[CamLoPA: A Hidden Wireless Camera Localization Framework via Signal Propagation Path Analysis](./publications/pdf/camlopa.pdf)

Xiang Zhang, **Jie Zhang** [*equal contribution*], Zehua Ma, Jinyang Huang, Meng Li, Huan Yan, Peng Zhao, Zijian Zhang, Qing Guo, Tianwei Zhang, Bin Liu, Nenghai Yu

[[**Code**]](https://github.com/CamLoPA/CamLoPA-Code) [[**Video**]](https://www.youtube.com/watch?v=GKam04FzeM4)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TDSC 2025</div><img src='./publications/img/tdsc-tm.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[InferDPT: Privacy-preserving Inference for Black-box Large Language Models](https://arxiv.org/pdf/2310.12214)

Meng Tong, Kejiang Chen, **Jie Zhang**, Yuang Qi, Weiming Zhang, Nenghai Yu, Tianwei Zhang, Zhikun Zhang

[[**Code**]](https://github.com/mengtong0110/InferDPT)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='./publications/img/cvpr25-wxc.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[AVF-MAE++: Scaling Affective Video Facial Masked Autoencoders via Efficient Audio-Visual Self-Supervised Learning](./publications/pdf/cvpr25-wxc.pdf)

Xuecheng Wu, Heli Sun, Yifan Wang, Jiayu Nie, **Jie Zhang**, Yabing Wang, Junxiao Xue, Liang He

<!-- [[**Code**]](https://github.com/hurunyi/VideoShield) -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025</div><img src='./publications/img/cvpr25-cy.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[SceneTAP: Scene-Coherent Typographic Adversarial Planner against Vision-Language Models in Real-World Environments](https://arxiv.org/pdf/2412.00114)

Yue Cao, Yun Xing, **Jie Zhang**, Di Lin, Tianwei Zhang, Ivor Tsang, Yang Liu, Qing Guo

<!-- [[**Code**]](https://github.com/hurunyi/VideoShield) -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TMM 2025</div><img src='./publications/img/tmm-25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Clean Image May be Dangerous: Data Poisoning Attacks Against Deep Hashing](./publications/pdf/TMM-ls.pdf)

Shuai Li, **Jie Zhang** [*Corresponding Author*], Yuang Qi,  Kejiang Chen, Tianwei Zhang,Weiming Zhang, and Nenghai Yu

<!-- [[**Code**]](https://github.com/hurunyi/VideoShield) -->

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICLR 2025</div><img src='./publications/img/iclr25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[VideoShield: Regulating Diffusion-based Video Generation Models via Watermarking](https://openreview.net/pdf?id=uzz3qAYy0D)

Runyi Hu, **Jie Zhang** [*Corresponding Author*], Yiming Li, Jiwei Li, Qing Guo, Han Qiu, Tianwei Zhang

[[**Code**]](https://github.com/hurunyi/VideoShield)

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">USENIX Security 2025</div><img src='./publications/img/usenix25-hl.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[When Translators Refuse to Translate: A Novel Attack to Speech Translation Systems](./publications/pdf/usenix25-hl.pdf)

Haolin Wu, Chang Liu, Jing Chen, Ruiying Du, Kun He, Yu Zhang, Cong Wu, Tianwei Zhang, Qing Guo, **Jie Zhang**

<!-- [[**Code**]](https://github.com/concept-censorship/concept-censorship.github.io/tree/main/code) -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TIFS 2025</div><img src='./publications/img/tifs25-ls.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Turning Your Strength into Watermark: Watermarking Large Language Model via Knowledge Injection](./publications/pdf/tifs25-ls.pdf)

Shuai Li, Kejiang Chen, **Jie Zhang**, Kunsheng Tang, Kai Zeng, Weiming Zhang, and Nenghai Yu

<!-- [[**Code**]](https://github.com/concept-censorship/concept-censorship.github.io/tree/main/code) -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NAACL 2025</div><img src='./publications/img/naacl25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[On the Vulnerability of Text Sanitization](https://arxiv.org/pdf/2410.17052)

Meng Tong, Kejiang Chen, Xiaojian Yuan, Jiayang Liu, Weiming Zhang, Nenghai Yu, **Jie Zhang**


[[**Code**]](https://github.com/mengtong0110/On-the-Vulnerability-of-Text-Sanitization) [<span style="color: red;"><strong>Oral</strong></span>]

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2025</div><img src='./publications/img/segue.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">



[Segue: Side-information Guided Generative Unlearnable Examples for Facial Privacy Protection in Real World](./publications/pdf/segue.pdf)

Zhiling Zhang, **Jie Zhang** [*Corresponding Author*], Kui Zhang, Wenbo Zhou, Ting Xu, Daiheng Gao, Zixian Guo, Qinglang Guo, Weiming Zhang, Nenghai Yu


<!-- [[**Code**]](https://github.com/concept-censorship/concept-censorship.github.io/tree/main/code) -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2025</div><img src='./publications/img/aaai25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">



[An LLM-empowered Adaptive Evolutionary Algorithm For Multi-Component Deep Learning Systems](./publications/pdf/aaai25.pdf)

Haoxiang Tian, Xingshuo Han, Guoquan Wu, An Guo, Yuan Zhou, **Jie Zhang**, Shuo Li, Jun Wei, Tianwei Zhang 

<!-- [[**Code**]](https://github.com/concept-censorship/concept-censorship.github.io/tree/main/code) -->
[<span style="color: red;"><strong>Oral</strong></span>]

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Information Fusion 2024</div><img src='./publications/img/inffus.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">



[Security Analysis and Adaptive False Data Injection against MultiSensor Fusion Localization for Autonomous Driving](./publications/pdf/inffus.pdf)

Linqing Hu, Junqi Zhang, **Jie Zhang**, Shaoyin Cheng, Yuyi Wang, Weiming Zhang, Nenghai Yu

<!-- [[**Code**]](https://github.com/concept-censorship/concept-censorship.github.io/tree/main/code) -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2024</div><img src='./publications/img/neurips-24.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">



[ART: Automatic Red-teaming for Text-to-Image Models to Protect Benign Users](https://arxiv.org/pdf/2405.19360)

Guanlin Li, Kangjie Chen, Shudong Zhang, **Jie Zhang**, Tianwei Zhang

[[**Code**]](https://github.com/GuanlinLee/ART)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">USENIX Security 2025</div><img src='./publications/img/usenix25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[The Ghost Navigator: Revisiting the Hidden Vulnerability of Localization in Autonomous Driving](https://www.usenix.org/conference/usenixsecurity25/presentation/zhang-junqi)

Junqi Zhang, Shaoyin Cheng, Linqing Hu, **Jie Zhang**, Chengyu Shi, Xingshuo Han, Tianwei Zhang, Yueqiang Cheng, Weiming Zhang

[[**Demo**]](https://sites.google.com/view/msaf-demo)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">S&P 2025</div><img src='./publications/img/SP25.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Towards Reliable Verification of Unauthorized Data Usage in Personalized Text-to-Image Diffusion Models](https://arxiv.org/pdf/2410.10437)

Boheng Li, Yanhao Wei, Yankai Fu, Zhenting Wang, Yiming Li, **Jie Zhang** [*Corresponding Author*], Run Wang, Tianwei Zhang

[[**Code**]](https://github.com/AntigoneRandy/SIREN)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NDSS 2025</div><img src='./publications/img/ndss25_TI.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[THEMIS: Regulating Textual Inversion for Personalized Concept Censorship](https://arxiv.org/pdf/2308.10718)

Yutong Wu, **Jie Zhang** [*Corresponding Author*], Florian Kerschbaum, and Tianwei Zhang

[[**Code**]](https://github.com/concept-censorship/concept-censorship.github.io/tree/main/code)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2024</div><img src='./publications/img/mm24_xray.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Model X-ray : Detecting Backdoored Models via Decision Boundary](https://arxiv.org/pdf/2402.17465)

Yanghao Su, **Jie Zhang** [*Corresponding Author*], Ting Xu, Tianwei Zhang, Weiming Zhang, and  Nenghai Yu

[[**Code**]](https://github.com/SuYanghao/Model_X-ray)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2024</div><img src='./publications/img/mm24_facial.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[FacialPulse: An Efficient RNN-based Depression Detection via Temporal Facial Landmarks](https://arxiv.org/pdf/2408.03499) 

Ruiqi Wang, Jinyang Huang, **Jie Zhang** [*Corresponding Author*], Xin Liu, Xiang Zhang, Zhi Liu, Peng Zhao, Sigui Chen, and Xiao Sun

[[**Code**]](https://github.com/volatileee/FacialPulse) [<span style="color: red;"><strong>Oral</strong></span> (3.97%)]

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='./publications/img/eccv24.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Robust-Wide: Robust Watermarking against Instruction-driven Image Editing](https://arxiv.org/pdf/2402.12688)

Runyi Hu, **Jie Zhang** [*Corresponding Author*], Ting Xu, Tianwei Zhang, and  Jiwei Li

[[**Code**]](https://github.com/hurunyi/Robust-Wide)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='./publications/img/aqualora.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[AquaLoRA: Toward White-box Protection for Customized Stable Diffusion Models via Watermark LoRA](https://arxiv.org/pdf/2405.11135)

Weitao Feng, Wenbo Zhou, Jiyan He, **Jie Zhang** [*Corresponding Author*], Tianyi Wei, Guanlin Li, Tianwei Zhang, Weiming Zhang, and  Nenghai Yu

[[**Code**]](https://github.com/Georgefwt/AquaLoRA)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='./publications/img/tfpp.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Transferable Facial Privacy Protection against Blind Face Restoration via Domain-Consistent Adversarial Obfuscation](https://icml.cc/virtual/2024/poster/32891)

Kui Zhang, Hang Zhou, **Jie Zhang**, Wenbo Zhou, Weiming Zhang, Nenghai Yu

<!-- [[**Code-TBD**]]() -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2024</div><img src='./publications/img/FLU_ijcai.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Unlearning during Learning: An Streamlined Federated Machine Unlearning Method](https://arxiv.org/pdf/2405.15474)

Hanlin Gu, Gongxi Zhu, **Jie Zhang**, Yuxing Han, Lixin Fan, Qiang Yang

[[**Code**]](https://github.com/Liar-Mask/FedAU)
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*Corresponding Author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu

[[**Project Page**]](https://academic-page.github.io/GenderCARE/) [<span style="color: red;"><strong>Distinguished Artifact Award</strong></span>] 

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI 2024</div><img src='./publications/img/tpami24.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Robust Model Watermarking for Image Processing Networks via Structure Consistency](publications/pdf/Robust_Model_Watermarking_for_Image_Processing_Networks_via_Structure_Consistency.pdf)

**Jie Zhang**, Dongdong Chen, Jing Liao, Zehua Ma, Han Fang,  Weiming Zhang, Hua Gang,  Nenghai Yu

<!-- [[**Code-TBD**]]() -->

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='./publications/img/same.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[SAME: Sample Reconstruction Against Model Extraction Attacks](https://arxiv.org/pdf/2312.10578.pdf)

Yi Xie, **Jie Zhang**, Shiqian Zhao, Tianwei Zhang, Xiaofeng Chen



</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='./publications/img/zeroday_aaai24.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Personalization as a Shortcut for Few-Shot Backdoor Attack against Text-to-Image Diffusion Models](publications/pdf/Zeroday.pdf)

Yihao Huang, Felix Juefei-Xu, Qing Guo, **Jie Zhang**, Yutong Wu, Ming Hu, Tianlin Li, Geguang Pu, Yang Liu

[[**Code**]](https://github.com/Huang-yihao/Personalization-based_backdoor)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='./publications/img/dfhl.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Data-Free Hard-Label Robustness Stealing Attack](https://arxiv.org/pdf/2312.05924)

Xiaojian Yuan, Kejiang Chen, Wen Huang, **Jie Zhang**, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/LetheSec/DFHL-RS-Attack)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2024</div><img src='./publications/img/aahs.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Attribute-Aware Head Swapping Guided by 3d Modeling](pblications/pdf/Attribute-Aware_Head_Swapping_Guided_by_3d_Modeling.pdf)

Wenbo Zhou, Dongdong Chen, Jing Liao, **Jie Zhang**, Kejiang Chen, Weiming Zhang, Nenghai Yu

<!-- [[**code**]]() -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NDSS 2024</div><img src='./publications/img/timbre.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Detecting Voice Cloning Attacks via Timbre Watermarking](https://timbrewatermarking.github.io/paper/NDSS_Detecting_Voice_Cloning_Attacks_via_Timbre_Watermarking.pdf)

Chang Liu, **Jie Zhang** [*Corresponding Author*], Tianwei Zhang, Xi Yang, Weiming Zhang, Nenghai Yu

[[**Project Page**]](https://timbrewatermarking.github.io/index.html)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Springer Book</div><img src='./publications/img/book.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Digital Watermarking for Machine Learning Models - Chapter 6: Protecting Image Processing Networks via Model Watermarking](https://www.springerprofessional.de/en/protecting-image-processing-networks-via-model-watermarking/25420310)

**Jie Zhang**, Dongdong Chen, Jing Liao, Weiming Zhang, Nenghai Yu

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TKDE 2023</div><img src='./publications/img/scpw.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[A Robust Database Watermarking Scheme That Preserves Statistical Characteristics](https://ieeexplore.ieee.org/abstract/document/10286426)

Zhiwen Ren, Han Fang, **Jie Zhang**, Zehua Ma, Ronghao Lin, Weiming Zhang, Nenghai Yu

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2023</div><img src='./publications/img/protego.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[ProTegO: Protect Text Content against OCR Extraction Attack](https://dl.acm.org/doi/10.1145/3581783.3612076)

Yanru He, Kejiang Chen, Guoqiang Chen, Zehua Ma, Kui Zhang, **Jie Zhang**, Huanyu Bian, Han Fang, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/Ruby-He/ProTegO)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2023</div><img src='./publications/img/ada3diff.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Ada3Diff: Defending against 3D Adversarial Point Clouds via Adaptive Diffusion](https://arxiv.org/pdf/2211.16247)

Kui Zhang, Hang Zhou, **Jie Zhang**, Qidong Huang, Weiming Zhang, and Nenghai Yu

[[**Code**]](https://github.com/ZhangXGe/Ada3Diff)
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TAI 2023</div><img src='./publications/img/ac_asr.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Model Access Control Based on Hidden Adversarial Examples for Automatic Speech Recognition](https://ieeexplore.ieee.org/abstract/document/10152479)

Haozhe Chen, **Jie Zhang** [*Corresponding Author*], Kejiang Chen, Weiming Zhang, Nenghai Yu

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023</div><img src='./publications/img/autostegafont.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[AutoStegaFont: Synthesizing Vector Fonts for Hiding Information in Documents](publications/pdf/AutoStegaFont.pdf)

Xi Yang, **Jie Zhang** [*equal contribution*], Han Fang, Zehua Ma, Chang Liu, Weiming Zhang, Nenghai Yu

[[**Demo**]](publications/video/AutoStegaFont.mp4)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023</div><img src='./publications/img/DeAR.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[DeAR: A Deep-learning-based Audio Re-cording Resilient Watermarking](https://arxiv.org/pdf/2212.02339.pdf)

Chang Liu, **Jie Zhang** [*equal contribution*], Han Fang, Zehua Ma, Weiming Zhang, Nenghai Yu
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023</div><img src='./publications/img/plg_mia.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Pseudo Label-Guided Model Inversion Attack via Conditional Generative Adversarial Network](https://arxiv.org/pdf/2312.05924)

Xiaojian Yuan, Kejiang Chen, Wen Huang, **Jie Zhang**, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/LetheSec/PLG-MI-Attack)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2022</div><img src='./publications/img/aaai22.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Tracing Text Provenance via Context-Aware Lexical Substitution](publications/pdf/aaai22.pdf)

Xi Yang, **Jie Zhang** [*Corresponding Author*], Kejiang Chen, Weiming Zhang, Zehua Ma, Feng Wang, Nenghai Yu
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TIP 2022</div><img src='./publications/img/poison_ink_tip.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Poison Ink: Robust and Invisible Backdoor Attack](https://arxiv.org/abs/2108.02488)

**Jie Zhang**, Dongdong Chen, Jing Liao, Qidong Huang, Hua Gang, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Poison-Ink)


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI 2021</div><img src='./publications/img/tpami22.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Deep Model Intellectual Property Protection via Deep Watermarking](https://arxiv.org/pdf/2103.04980)

**Jie Zhang**, Dongdong Chen, Jing Liao, Weiming Zhang, Hua Gang, Huamin Feng, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Deep-Model-Watermarking)


</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2021</div><img src='./publications/img/aaai21.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Initiative defense against facial manipulation](publications/pdf/aaai21.pdf)

Qidong Huang, **Jie Zhang** [*equal contribution*], Wenbo Zhou, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/shikiw/initiative-defense-for-deepfake)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2020</div><img src='./publications/img/mm20.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Reversible Watermarking in Deep Convolutional Neural Networks for Integrity Authentication](https://arxiv.org/pdf/2104.04268)

Xiquan Guan, Huamin Feng, Weiming Zhang, Hang Zhou, **Jie Zhang**, Nenghai Yu

<!-- [[**code**]]() -->
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2020</div><img src='./publications/img/passport.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Passport-aware Normalization for Deep Model Protection](https://proceedings.neurips.cc/paper/2020/file/ff1418e8cc993fe8abcfe3ce2003e5c5-Paper.pdf)

**Jie Zhang**, Dongdong Chen, Jing Liao,  Weiming Zhang, Hua Gang, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Passport-aware-Normalization)


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2020</div><img src='./publications/img/aaai20.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[Model Watermarking for Image Processing Networks](https://arxiv.org/pdf/2002.11088.pdf)

**Jie Zhang**, Dongdong Chen, Jing Liao, Han Fang, Weiming Zhang, Wenbo Zhou, Hao Cui, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Deep-Model-Watermarking)

</div>
</div>



<!-- 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width=200></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*corresponding author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->


# 🎖 Honors and Awards
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
