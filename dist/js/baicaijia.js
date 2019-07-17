
$(function () {
  var titleid = 0;
  listrender()

  // 渲染导航条
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getbaicaijiatitle',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr = template('coupon-titleTpl', info);
      $('.coupon-title .bcj-title ul').html(htmlStr);
    }
  })

  // 渲染商品
  function listrender() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getbaicaijiaproduct',
      data: {
        titleid
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var htmlStr1 = template('bcj-listTpl', info);
        $('.bcj-list ul').html(htmlStr1);
        // $('.bcj-list ul li .inf .o .bar i span').css('width',)
      }
    })
  }

  // 注册点击事件
  $('.bcj-title ul').on('click', 'li', function () {
    titleid = $(this).find('a').data('id');
    listrender();
  })



})