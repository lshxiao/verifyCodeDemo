# 小程序中数字验证码DEMO

> 实现思路：
1、input设置为透明，font-size设置为0，当点击canvas时，让input自动获取焦点，监听bindinput事件，然后调用canvasDraw方法，把内容写在canvas里。
2、和上面的思想一样，只是把canvas换成了image组件 & 4个view，每个view定位到指定位置，监听input的bindinput事件，把内容写入到4个view中即可。

## 一、用canvas方式实现

```html
<view class="wrapper">
  <view class='title'>一、canvas方式实现</view>
  <view class='input-box'>
    <canvas class='input-canvas' canvas-id="numberCanvas" bindtap='tapNumber'></canvas>
    <input type='number' class='input-text' bindinput='inputNumber' focus='{{focus}}' maxlength='4'></input>
  </view>
</view>
```


```javascript
Page({
  data: {
    focus: false,
  },
  onLoad: function () {
    
  },
  tapNumber: function(){
    this.setData({
      focus: true,
    })
  },
  inputNumber: function(e){
    var val = e.detail.value, len = val.toString().length;
    var str = '';
    for(var i=0;i<len;i++){
      str += val[i]+'   ';
    }

    
    this.canvasDraw(str);
  },
  canvasDraw: function(str){
    var ctx = wx.createCanvasContext('numberCanvas');

    ctx.setFillStyle("#11cbe4");
    ctx.setFontSize(38);
    ctx.fillText(str, 12, 38);
    ctx.draw()
  }
})
```

![demo1](/images/2.gif)


## 二、image + position方式实现
```html
<view class="wrapper">
  <view class='title'>二、image + position方式实现</view>
  <view class='input-box'>
    <image class='input-img' src='/images/1.png'></image>
    <view class='input-num input-num-{{index}}' wx:for="{{numbers}}" wx:key="{{index}}" bindtap='tapNumber'>{{item}}</view>
    <input type='number' class='input-text' bindinput='inputNumber' focus='{{focus}}' maxlength='4'></input>
  </view>
</view>
```

```javascript
Page({
  data: {
    focus: false,
    numbers: ['2', '5', '8', ''],
  },
  onLoad: function () {

  },
  tapNumber: function () {
    this.setData({
      focus: true,
    })
  },
  inputNumber: function (e) {
    var val = e.detail.value, len = val.toString().length;
    var numbers = ['', '', '', ''];
    for (var i = 0; i < len; i++) {
      numbers[i] = val[i];
    }
    this.setData({
      numbers: numbers,
    })
  },
})
```

![demo2](/images/3.gif)