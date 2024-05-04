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

I am currently a Research Fellow at Nanyang Technological University, working with [**Prof. Tianwei Zhang**](https://personal.ntu.edu.sg/tianwei.zhang/) and [**Prof. Yang Liu**](https://personal.ntu.edu.sg/yangliu/).  I received my Ph.D. degree with honors in School of Cyber Science and Technology from University of Science and Technology of China (USTC) in 2022, advised by [**Prof. Nenghai Yu**](https://scholar.google.com/citations?user=7620QAMAAAAJ&hl=zh-CN), [**Prof. Weiming Zhang**](https://scholar.google.com/citations?user=eTCfl6cAAAAJ&hl=zh-CN), and **Prof. Huamin Feng**. I also very luckily collaborated closely with Dr. [**Dongdong Chen**](https://www.dongdongchen.bid/) (at Microsoft GenAI) and [**Prof. Jing Liao**](https://www.cityu.edu.hk/stfprofile/jingliao.htm) (at City University of Hong Kong) during my Ph.D. journey.

My research interest includes AIGC protection and regulation, trustworty AI, and [IP protection for AI models](https://github.com/ZJZAC/awesome-deep-model-IP-protection). 

<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2024.05*: &nbsp;🎉🎉 Two papers are accepted by ICML 24. Congrats to Kui Zhang and Weitao Feng. 
- *2024.04*: &nbsp;🎉🎉 One paper is accepted by IJCAI 24. Congrats to Hanlin Gu. 
- *2024.04*: &nbsp;🎉🎉 One paper is accepted by CCS 24. Congrats to Kunsheng Tang. 
- *2024.03*: &nbsp;🎉🎉 One paper is accepted by TPAMI. Congrats to myself, Fighting. 

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*corresponding author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu

[[**Code**]]()

<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI</div><img src='./publications/img/tpami24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Robust Model Watermarking for Image Processing Networks via Structure Consistency](publications/pdf/Robust_Model_Watermarking_for_Image_Processing_Networks_via_Structure_Consistency.pdf)

**Jie Zhang**, Dongdong Chen, Jing Liao, Zehua Ma, Han Fang,  Weiming Zhang, Hua Gang,  Nenghai Yu

[[**Code**]]()

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Springer Book</div><img src='./publications/img/book.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Digital Watermarking for Machine Learning Models - Chapter 6: Protecting Image Processing Networks via Model Watermarking](https://www.springerprofessional.de/en/protecting-image-processing-networks-via-model-watermarking/25420310)

**Jie Zhang**, Dongdong Chen, Jing Liao, Weiming Zhang, Nenghai Yu

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TIP</div><img src='./publications/img/poison_ink_tip.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Poison Ink: Robust and Invisible Backdoor Attack](https://arxiv.org/abs/2108.02488)

**Jie Zhang**, Dongdong Chen, Jing Liao, Qidong Huang, Hua Gang, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Poison-Ink)


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI</div><img src='./publications/img/tpami22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Model Intellectual Property Protection via Deep Watermarking](https://arxiv.org/pdf/2103.04980)

**Jie Zhang**, Dongdong Chen, Jing Liao, Weiming Zhang, Hua Gang, Huamin Feng, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Deep-Model-Watermarking)


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2020</div><img src='./publications/img/passport.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Passport-aware Normalization for Deep Model Protection](https://proceedings.neurips.cc/paper/2020/file/ff1418e8cc993fe8abcfe3ce2003e5c5-Paper.pdf)

**Jie Zhang**, Dongdong Chen, Jing Liao,  Weiming Zhang, Hua Gang, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Passport-aware-Normalization)


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2020</div><img src='./publications/img/aaai20.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Model Watermarking for Image Processing Networks](https://arxiv.org/pdf/2002.11088.pdf)

**Jie Zhang**, Dongdong Chen, Jing Liao, Han Fang, Weiming Zhang, Wenbo Zhou, Hao Cui, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Deep-Model-Watermarking)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*corresponding author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu

[[**Code**]]()


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang**, Dongdong Chen, Jing Liao,  Weiming Zhang, Hua Gang, Nenghai Yu

[[**Code**]]()


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*corresponding author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu

[[**Code**]]()


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*corresponding author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu

[[**Code**]]()


</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*corresponding author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu

[[**Code**]]()


</div>
</div>


- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020**

# 🎖 Honors and Awards
- *2021.10* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 📖 Educations
- *2019.06 - 2022.04 (now)*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2015.09 - 2019.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

# 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China.