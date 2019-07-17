$(function() {
  $.ajax({
    type: 'get',
    url:'http://localhost:3000/api/getinlanddiscount',
    dataType:'json',
    success: function(info) {
      console.log(info);
      var htmlStr = template('inlanddiscountTpl',info);
      $('.recommen-product .ul-box').html(htmlStr);
    }
  })
})