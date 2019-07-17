$(function () {
  var productid = getSearch().productid;
  console.log(productid);

  // 渲染
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getdiscountproduct',
    data: {
      productid
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr1 = template('infoTpl', info.result);
      // console.log(htmlStr);
      $('.cu-content .cu-contentinfo').html(htmlStr1);

    }
  })
})