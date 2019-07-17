$(function() {
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getbrandtitle',
    dataType: 'json',
    success: function(info) {
      console.log(info);
      var htmlStr = template('brandTitleTpl', info);
      // console.log(htmlStr);
      $('#brandTitle .brandTitle-title').html(htmlStr);
    }
  })
})