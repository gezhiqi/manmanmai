$(function () {
var brandtitleid = getSearch().brandtitleid;
console.log(brandtitleid);
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getbrand',
    data: {
      brandtitleid
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr = template('brand-listTpl', info);
      // console.log(htmlStr);
      $('.brand-list ul').html(htmlStr);
    }
  })
})