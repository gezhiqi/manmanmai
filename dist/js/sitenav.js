$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getsitenav',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      var htmlStr = template('linkTpl',info);
      $('.site-nav .link').html(htmlStr);
    }
  })


})