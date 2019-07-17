$(function() {
  var couponid = getSearch().couponid;
  console.log(couponid);
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getcouponproduct',
    data: {
      couponid
    },
    dataType: 'json',
    success: function(info) {
      console.log(info);
      var htmlStr = template('contentTpl' ,info);
      $('.content ul').html(htmlStr);
    }
  })
})