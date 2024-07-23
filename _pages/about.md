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

I am currently a Research Fellow at Nanyang Technological University, working with [**Prof. Tianwei Zhang**](https://personal.ntu.edu.sg/tianwei.zhang/) and [**Prof. Yang Liu**](https://personal.ntu.edu.sg/yangliu/). Before that, I worked with [**Prof. Florian Kerschbaum**](https://cs.uwaterloo.ca/~fkerschb/) (from University of Waterloo).  I received my Ph.D. degree with honors in School of Cyber Science and Technology from University of Science and Technology of China (USTC) in 2022, advised by [**Prof. Nenghai Yu**](https://scholar.google.com/citations?user=7620QAMAAAAJ&hl=zh-CN), [**Prof. Weiming Zhang**](https://scholar.google.com/citations?user=eTCfl6cAAAAJ&hl=zh-CN), and **Prof. Huamin Feng**. I also very luckily collaborated closely with Dr. [**Dongdong Chen**](https://www.dongdongchen.bid/) (at Microsoft GenAI) and [**Prof. Jing Liao**](https://www.cityu.edu.hk/stfprofile/jingliao.htm) (at City University of Hong Kong) during my Ph.D. journey. 

My research interest includes:
- **AIGC protection and regulation**: [[AAAI 2022]](https://arxiv.org/abs/2108.02488), [[NDSS 2024]](https://timbrewatermarking.github.io/paper/NDSS_Detecting_Voice_Cloning_Attacks_via_Timbre_Watermarking.pdf), [[AAAI 2024]](publications/pdf/Zeroday.pdf), [[CCS 2024]](publications/pdf/CCS_24_bias.pdf), [[ICML 2024]](https://arxiv.org/pdf/2405.11135), [[ECCV 2024]](https://arxiv.org/pdf/2402.12688), [[NDSS 2025]](https://arxiv.org/pdf/2308.10718)

- **Trustworty AI**: [[AAAI 2021]](publications/pdf/aaai21.pdf), [[TIP 2022]](https://arxiv.org/abs/2108.02488), [[AAAI 2023]](https://arxiv.org/pdf/2312.05924),  [[MM 2023]](https://arxiv.org/pdf/2211.16247), [[MM 2023]](https://dl.acm.org/doi/10.1145/3581783.3612076), [[AAAI 2024]](https://arxiv.org/pdf/2312.05924), [[AAAI 2024]](https://arxiv.org/pdf/2312.10578.pdf), [[IJCAI 2024]](https://arxiv.org/pdf/2405.15474), [[ICML 2024]](https://icml.cc/virtual/2024/poster/32891), [[MM 2024]](https://arxiv.org/pdf/2402.17465)

- [**IP protection for AI models**](https://github.com/ZJZAC/awesome-deep-model-IP-protection): [[AAAI 2020]](https://arxiv.org/pdf/2002.11088), [[NeurIPS 2020]](https://proceedings.neurips.cc/paper/2020/file/ff1418e8cc993fe8abcfe3ce2003e5c5-Paper.pdf), [[MM 2020]](https://arxiv.org/pdf/2104.04268), [[TPAMI 2021]](https://arxiv.org/pdf/2103.04980), [[TAI 2023]](https://ieeexplore.ieee.org/abstract/document/10152479), [[Springer Book]](https://www.springerprofessional.de/en/protecting-image-processing-networks-via-model-watermarking/25420310), [[TPAMI 2024]](publications/pdf/Robust_Model_Watermarking_for_Image_Processing_Networks_via_Structure_Consistency.pdf)

- **IP protection for different modalities**: [[AAAI 2023]](https://arxiv.org/pdf/2212.02339.pdf), [[AAAI 2023]](publications/pdf/AutoStegaFont.pdf), [[TKDE 2023]](https://ieeexplore.ieee.org/abstract/document/10286426)


<!-- I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2024.07*: &nbsp;🎉🎉 One paper is accepted by NDSS 2025. Congrats to Yutong Wu! 
- *2024.07*: &nbsp;🎉🎉 Two papers are accepted by ACM MM 2024. Congrats to Yanghao Su and Ruiqi Wang! 
- *2024.07*: &nbsp;🎉🎉 One paper is accepted by ECCV 2024. Congrats to Runyi Hu! 
- *2024.05*: &nbsp;🎉🎉 Two papers are accepted by ICML 2024. Congrats to Kui Zhang and Weitao Feng! 
- *2024.04*: &nbsp;🎉🎉 One paper is accepted by IJCAI 2024. Congrats to Hanlin Gu!
- *2024.04*: &nbsp;🎉🎉 One paper is accepted by CCS 2024. Congrats to Kunsheng Tang! 
- *2024.03*: &nbsp;🎉🎉 One paper is accepted by TPAMI. Congrats to myself, Fighting! 
- *2023.12*: &nbsp;🎉🎉 Three papers are accepted by AAAI 2024. Congrats to Yi Xie, Yihao Huang, and Xiaojian Yuan!
- *2023.12*: &nbsp;🎉🎉 One paper is accepted by ICASSP 2024. Congrats to Prof. Wenbo Zhou!
- *2023.11*: &nbsp;🎉🎉 One paper is accepted by NDSS 2024. Congrats to Chang Liu!

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NDSS 2025</div><img src='./publications/img/ndss25_TI.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[THEMIS: Regulating Textual Inversion for Personalized Concept Censorship](https://arxiv.org/pdf/2308.10718)

Yutong Wu, **Jie Zhang** [*the corresponding author*], Florian Kerschbaum, and Tianwei Zhang

[[**Code-TBD**]]()

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2024</div><img src='./publications/img/mm24_xray.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Model X-ray : Detecting Backdoored Models via Decision Boundary](https://arxiv.org/pdf/2402.17465)

Yanghao Su, **Jie Zhang** [*the corresponding author*], Ting Xu, Tianwei Zhang, Weiming Zhang, and  Nenghai Yu

[[**Code-TBD**]]()

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2024</div><img src='./publications/img/mm24_facial.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FacialPulse: An Efficient RNN-based Depression Detection via Temporal Facial Landmarks]() 

Ruiqi Wang, Jinyang Huang, **Jie Zhang**, Xin Liu, Xiang Zhang, Zhi Liu, Peng Zhao, Sigui Chen, and Xiao Sun

[[**Code-TBD**]]() [Oral (3.97%)]

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ECCV 2024</div><img src='./publications/img/eccv24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Robust-Wide: Robust Watermarking against Instruction-driven Image Editing](https://arxiv.org/pdf/2402.12688)

Runyi Hu, **Jie Zhang** [*the corresponding author*], Ting Xu, Tianwei Zhang, and  Jiwei Li

[[**Code**]](https://github.com/hurunyi/Robust-Wide)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='./publications/img/aqualora.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AquaLoRA: Toward White-box Protection for Customized Stable Diffusion Models via Watermark LoRA](https://arxiv.org/pdf/2405.11135)

Weitao Feng, Wenbo Zhou, Jiyan He, **Jie Zhang** [*the corresponding author*], Tianyi Wei, Guanlin Li, Tianwei Zhang, Weiming Zhang, and  Nenghai Yu

[[**Code**]](https://github.com/Georgefwt/AquaLoRA)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024</div><img src='./publications/img/tfpp.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Transferable Facial Privacy Protection against Blind Face Restoration via Domain-Consistent Adversarial Obfuscation](https://icml.cc/virtual/2024/poster/32891)

Kui Zhang, Hang Zhou, **Jie Zhang**, Wenbo Zhou, Weiming Zhang, Nenghai Yu

[[**Code-TBD**]]()

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCAI 2024</div><img src='./publications/img/FLU_ijcai.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Unlearning during Learning: An Streamlined Federated Machine Unlearning Method](https://arxiv.org/pdf/2405.15474)

Hanlin Gu, Gongxi Zhu, **Jie Zhang**, Yuxing Han, Lixin Fan, Qiang Yang

[[**Code**]](https://github.com/Liar-Mask/FedAU)
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*the corresponding author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu

[[**Code**]](https://github.com/kstanghere/GenderCARE-ccs24)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI 2024</div><img src='./publications/img/tpami24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Robust Model Watermarking for Image Processing Networks via Structure Consistency](publications/pdf/Robust_Model_Watermarking_for_Image_Processing_Networks_via_Structure_Consistency.pdf)

**Jie Zhang**, Dongdong Chen, Jing Liao, Zehua Ma, Han Fang,  Weiming Zhang, Hua Gang,  Nenghai Yu

[[**Code-TBD**]]()

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='./publications/img/same.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SAME: Sample Reconstruction Against Model Extraction Attacks](https://arxiv.org/pdf/2312.10578.pdf)

Yi Xie, **Jie Zhang**, Shiqian Zhao, Tianwei Zhang, Xiaofeng Chen



</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='./publications/img/zeroday_aaai24.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Personalization as a Shortcut for Few-Shot Backdoor Attack against Text-to-Image Diffusion Models](publications/pdf/Zeroday.pdf)

Yihao Huang, Felix Juefei-Xu, Qing Guo, **Jie Zhang**, Yutong Wu, Ming Hu, Tianlin Li, Geguang Pu, Yang Liu

<!-- [[**Code**]]() -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2024</div><img src='./publications/img/dfhl.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Data-Free Hard-Label Robustness Stealing Attack](https://arxiv.org/pdf/2312.05924)

Xiaojian Yuan, Kejiang Chen, Wen Huang, **Jie Zhang**, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/LetheSec/DFHL-RS-Attack)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2024</div><img src='./publications/img/aahs.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Attribute-Aware Head Swapping Guided by 3d Modeling](pblications/pdf/Attribute-Aware_Head_Swapping_Guided_by_3d_Modeling.pdf)

Wenbo Zhou, Dongdong Chen, Jing Liao, **Jie Zhang**, Kejiang Chen, Weiming Zhang, Nenghai Yu

<!-- [[**code**]]() -->

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NDSS 2024</div><img src='./publications/img/timbre.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Detecting Voice Cloning Attacks via Timbre Watermarking](https://timbrewatermarking.github.io/paper/NDSS_Detecting_Voice_Cloning_Attacks_via_Timbre_Watermarking.pdf)

Chang Liu, **Jie Zhang** [*the corresponding author*], Tianwei Zhang, Xi Yang, Weiming Zhang, Nenghai Yu

[[**Project**]](https://timbrewatermarking.github.io/index.html)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Springer Book</div><img src='./publications/img/book.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Digital Watermarking for Machine Learning Models - Chapter 6: Protecting Image Processing Networks via Model Watermarking](https://www.springerprofessional.de/en/protecting-image-processing-networks-via-model-watermarking/25420310)

**Jie Zhang**, Dongdong Chen, Jing Liao, Weiming Zhang, Nenghai Yu

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TKDE 2023</div><img src='./publications/img/scpw.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[A Robust Database Watermarking Scheme That Preserves Statistical Characteristics](https://ieeexplore.ieee.org/abstract/document/10286426)

Zhiwen Ren, Han Fang, **Jie Zhang**, Zehua Ma, Ronghao Lin, Weiming Zhang, Nenghai Yu

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2023</div><img src='./publications/img/protego.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[ProTegO: Protect Text Content against OCR Extraction Attack](https://dl.acm.org/doi/10.1145/3581783.3612076)

Yanru He, Kejiang Chen, Guoqiang Chen, Zehua Ma, Kui Zhang, **Jie Zhang**, Huanyu Bian, Han Fang, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/Ruby-He/ProTegO)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2023</div><img src='./publications/img/ada3diff.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Ada3Diff: Defending against 3D Adversarial Point Clouds via Adaptive Diffusion](https://arxiv.org/pdf/2211.16247)

Kui Zhang, Hang Zhou, **Jie Zhang**, Qidong Huang, Weiming Zhang, and Nenghai Yu

[[**Code**]](https://github.com/ZhangXGe/Ada3Diff)
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TAI 2023</div><img src='./publications/img/ac_asr.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Model Access Control Based on Hidden Adversarial Examples for Automatic Speech Recognition](https://ieeexplore.ieee.org/abstract/document/10152479)

Haozhe Chen, **Jie Zhang** [*the corresponding author*], Kejiang Chen, Weiming Zhang, Nenghai Yu

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023</div><img src='./publications/img/autostegafont.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[AutoStegaFont: Synthesizing Vector Fonts for Hiding Information in Documents](publications/pdf/AutoStegaFont.pdf)

Xi Yang, **Jie Zhang** [*equal contribution*], Han Fang, Zehua Ma, Chang Liu, Weiming Zhang, Nenghai Yu

[[**Demo**]](publications/video/AutoStegaFont.mp4)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023</div><img src='./publications/img/DeAR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[DeAR: A Deep-learning-based Audio Re-cording Resilient Watermarking](https://arxiv.org/pdf/2212.02339.pdf)

Chang Liu, **Jie Zhang** [*equal contribution*], Han Fang, Zehua Ma, Weiming Zhang, Nenghai Yu
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2023</div><img src='./publications/img/plg_mia.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Pseudo Label-Guided Model Inversion Attack via Conditional Generative Adversarial Network](https://arxiv.org/pdf/2312.05924)

Xiaojian Yuan, Kejiang Chen, Wen Huang, **Jie Zhang**, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/LetheSec/PLG-MI-Attack)

</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2022</div><img src='./publications/img/aaai22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Tracing Text Provenance via Context-Aware Lexical Substitution](publications/pdf/aaai22.pdf)

Xi Yang, **Jie Zhang** [*the corresponding author*], Kejiang Chen, Weiming Zhang, Zehua Ma, Feng Wang, Nenghai Yu
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TIP 2022</div><img src='./publications/img/poison_ink_tip.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Poison Ink: Robust and Invisible Backdoor Attack](https://arxiv.org/abs/2108.02488)

**Jie Zhang**, Dongdong Chen, Jing Liao, Qidong Huang, Hua Gang, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Poison-Ink)


</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TPAMI 2021</div><img src='./publications/img/tpami22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Model Intellectual Property Protection via Deep Watermarking](https://arxiv.org/pdf/2103.04980)

**Jie Zhang**, Dongdong Chen, Jing Liao, Weiming Zhang, Hua Gang, Huamin Feng, Nenghai Yu

[[**Code**]](https://github.com/ZJZAC/Deep-Model-Watermarking)


</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">AAAI 2021</div><img src='./publications/img/aaai21.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Initiative defense against facial manipulation](publications/pdf/aaai21.pdf)

Qidong Huang, **Jie Zhang** [*equal contribution*], Wenbo Zhou, Weiming Zhang, Nenghai Yu

[[**Code**]](https://github.com/shikiw/initiative-defense-for-deepfake)

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2020</div><img src='./publications/img/mm20.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Reversible Watermarking in Deep Convolutional Neural Networks for Integrity Authentication](https://arxiv.org/pdf/2104.04268)

Xiquan Guan, Huamin Feng, Weiming Zhang, Hang Zhou, **Jie Zhang**, Nenghai Yu

<!-- [[**code**]]() -->
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



<!-- 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CCS 2024</div><img src='./publications/img/CCS_24_bias.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[GenderCARE: A Comprehensive Framework for Assessing and Reducing Gender Bias in Large Language Models](publications/pdf/CCS_24_bias.pdf)

Kunsheng Tang, Wenbo Zhou, **Jie Zhang** [*corresponding author*], Aishan Liu, Gelei Deng, Shuai Li, Peigui Qi, Weiming Zhang, Tianwei Zhang, Nenghai Yu

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 

</div>
</div>

- [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->


# 🎖 Honors and Awards
- *2021.12* National Scholarship for Doctoral Students, China. 
- *2020.12* Cyberspace Science Scholarship (funded by Academician Xiaomo Wang), China. 

# 📖 Educations
- *2017.06 - 2022.06*, PhD of Cyber Science, University of Science and Technology of China. 
- *2013.09 - 2017.06*, Bachelor of Electrical Engineering and Automation, China University of Geosciences (Beijing).

# 💬 Invited Talks
- *2024.04*, AIGC Security, at Nanyang Technological University \| [\[slide\]](talks\AIGC_Security.pdf)
- *2023.11*, IP Protection on Deep Models and Data, at Shanghai Jiao Tong University \| [\[poster\]](talks\sjtu.jpg)
- *2023.09*, Model IP Protection, at University of Science and Technology of China  \| [\[slide\]](talks/IP_ustc.pptx)

# 💻 Internships
- *2019.06 - 2019.08*, [Pvmed Research](https://www.pvmedtech.com/en/), China.


