Page({
  data: {
    focus: false,
    numbers: ['', '', '', ''],
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
