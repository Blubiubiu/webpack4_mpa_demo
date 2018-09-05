import wx from 'weixin-js-sdk'

export default function wxShare(shareTitle, shareDesc, shareLink, shareImg) {
    //todo 请求接口获取appid等信息

    wx.config({
        //debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: "", // 必填，公众号的唯一标识
        timestamp: "", // 必填，生成签名的时间戳
        nonceStr: "", // 必填，生成签名的随机串
        signature: "", // 必填，签名，见附录1
        // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] // 必填，需要使用的JS接口列表
    })
    
    let _share={
        title: shareTitle || '', // 分享标题
        desc: shareDesc || '', // 分享描述
        link: shareLink || '', // 分享链接
        imgUrl: shareImg || '' // 分享图标
    }
    
    wx.ready(function(){
        wx.onMenuShareTimeline(_share);
        wx.onMenuShareAppMessage(_share);
        wx.onMenuShareQQ(_share);
        wx.onMenuShareWeibo(_share);
        wx.onMenuShareQZone(_share);
    })
}