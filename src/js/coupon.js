$(function () {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getcoupon',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      var htmlStr = template('coupon-titleTpl', info);
      $('.coupon-title ul ').html(htmlStr);
    }
  })
})