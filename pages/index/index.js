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
