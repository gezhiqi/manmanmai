$(function () {
  var productid = getSearch().productId;
  console.log(productid);

  // 渲染
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getmoneyctrlproduct',
    data: {
      productid
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      var htmlStr = template('infoTpl',info.result);
      $('.cu-content .cu-contentinfo').html(htmlStr);

      // 渲染地区
      var arr = info.result.productCity;
      console.log(arr);
      console.log(arr[1].slice(0,arr[1].length-2));
      console.log(arr[1].slice(-2));
      var htmlStr1 = '';
      for (var i = 1; i < arr.length; i++) {
        var start = arr[i].slice(0,arr[i].length-2);
        var end = arr[i].slice(-2);
        htmlStr1 += `<li class="clearfix"><span class="fl">${start}</span><span class="fr">${end}</span></li>`
      }
      $('.list .area .disstorck').html(htmlStr1);
    }
  })
})