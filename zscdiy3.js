[rewrite_local]
^https?:\/\/api\.xingzhige\.com\/API\/NetEase_CloudMusic\/\?name=.+&n=1 url script-response-body https://raw.githubusercontent.com/ZhangSCzybh/MisakaDiange/refs/heads/main/hbdg.js
^https?:\/\/www\.hhlqilongzhu\.cn\/API\/NetEase_CloudMusic\/\?name=.+&n=1 url script-response-body https://raw.githubusercontent.com/ZhangSCzybh/MisakaDiange/qx/refs/heads/main/hbdg.js

[mitm] 
hostname = api.xingzhige.com,www.hhlqilongzhu.cn
