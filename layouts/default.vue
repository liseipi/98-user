<template>
  <slot/>
</template>

<script setup lang="ts">
import {useRequest} from "~/composables/useRequest";
import {useShareData} from "~/composables/states";

const wxInitConfig = (shareData) => {
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: shareData.value.signPackage.appId, // 必填，公众号的唯一标识
    timestamp: shareData.value.signPackage.timestamp, // 必填，生成签名的时间戳
    nonceStr: shareData.value.signPackage.nonceStr, // 必填，生成签名的随机串
    signature: shareData.value.signPackage.signature,// 必填，签名
    jsApiList: [
      'updateAppMessageShareData',
      'updateTimelineShareData',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
    ] // 必填，需要使用的JS接口列表
  });
  //需在用户可能点击分享按钮前就先调用
  wx.ready(function () {
    wx.updateAppMessageShareData({
      title: shareData.value.title, // 分享标题
      desc: shareData.value.desc, // 分享描述
      // link: shareData.value.url,
      link: window.location.href,
      imgUrl: shareData.value.imgUrl, // 分享图标
      success: function () {
        // showToast('分享成功')
      }
    });
    wx.updateTimelineShareData({
      title: shareData.value.title,
      link: window.location.href,
      imgUrl: shareData.value.imgUrl,
      desc: shareData.value.desc,
      success: function () {
        // showToast('分享成功')
      }
    });
    wx.onMenuShareTimeline({
      title: shareData.value.title, // 分享标题
      desc: shareData.value.desc, // 分享描述
      link: window.location.href,
      imgUrl: shareData.value.imgUrl, // 分享图标
      success: function () {
        // showToast('分享成功')
      }
    });
    wx.onMenuShareAppMessage({
      title: shareData.value.title,
      link: window.location.href,
      imgUrl: shareData.value.imgUrl,
      desc: shareData.value.desc,
      success: function () {
        // showToast('分享成功')
      }
    });
  });
}

const init = async () => {
  const key = useCookie('key');
  const openid = useCookie('openid');
  //无openid时
  if (!openid.value || !key.value) {
    if (process.env.NODE_ENV === 'development') {
      key.value = 'ow3r394ufj8f'
      openid.value = 'o-WGWwlaQu7Xrko7hTfG85anK83g'
    } else {
      const res = await useRequest('/wxh5/Index/jsLogin', {
        params: {
          callbackurl: encodeURIComponent(window.location.href),
        }
      });
      let response = toRaw(res.data.value);
      let {data} = JSON.parse(response);
      window.location.href = data.url
      return;
    }
  } else {
    //已经存在openid
    const shareData = useShareData();
    if (!shareData.value) {
      let res = await useRequest('/wxh5/Index/getJsSignPackage', {
        params: {
          url: encodeURIComponent(window.location.href)
        }
      });
      if (res.data) {
        shareData.value = res.data;
        wxInitConfig(shareData);
      }
    } else {
      wxInitConfig(shareData);
    }
  }
}

//初始化
init();


</script>