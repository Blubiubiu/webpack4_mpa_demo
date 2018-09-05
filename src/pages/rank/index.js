import '@/assets/css/reset.css'
import './index.scss';
import '@/assets/js/rem';
import $ from 'zepto';
import wxShare from '@/assets/js/wxShare'


$(function() {
    // console.log()
    // $('#rank--title').html(process.env.BASE_URL)
    //微信分享方法
    wxShare();
    //动态获取排行榜列表高度
    document.querySelector('.rank--list').style.height = document.body.clientHeight - document.querySelector('.rank--list').offsetTop + 'px';

    const mock = [
        {
            "rank": "1",
            "name": "第一名",
            "code": "200"
        },
        {
            "rank": "1",
            "name": "第一名2",
            "code": "200"
        },
        {
            "rank": "2",
            "name": "第二名1",
            "code": "199"
        },
        {
            "rank": "2",
            "name": "第二名2",
            "code": "199"
        },
        {
            "rank": "3",
            "name": "第三名",
            "code": "197"
        },
        {
            "rank": "3",
            "name": "第三名2",
            "code": "197"
        },
        {
            "rank": "3",
            "name": "第三名3",
            "code": "197"
        },
        {
            "rank": "4",
            "name": "第四名",
            "code": "196"
        },
        {
            "rank": "4",
            "name": "第四名2",
            "code": "196"
        },
        {
            "rank": "5",
            "name": "第五名",
            "code": "195"
        },
        {
            "rank": "6",
            "name": "第六名",
            "code": "180"
        },
        {
            "rank": "7",
            "name": "第七名",
            "code": "167"
        },
    ];

    //数据处理
    //模版字符串
    let html = "";
    mock.forEach((element, index) => {
        //如果是前三名，显示图片, 否则显示名次
        let _content = "";
        switch(element.rank) {
            case '1': 
                _content = `<img src="/assets/images/rank/fir@2x.png" alt=""></img>`;
            break;
            case '2': 
                _content = `<img src="/assets/images/rank/sec@2x.png" alt=""></img>`;
            break;
            case '3': 
                _content = `<img src="/assets/images/rank/thi@2x.png" alt=""></img>`;
            break;
            default: 
                _content = element.rank;
        }
        html += `
            <div class="rank--sublist">
                <div class="rank--sublist--left">
                    ${_content}
                </div>
                <div class="rank--sublist--middle">
                    <img src="/assets/images/rank/fir@2x.png" alt="">
                    <p>${element.name}</p>
                </div>
                <div class="rank--sublist--right">
                    ${element.code}
                </div>
            </div>`;
    })

    document.querySelector('.rank--list').innerHTML = html;
});



