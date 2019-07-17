$(function () {
  var productId = getSearch().productId;
  var category = getSearch().category;
  console.log(productId ,category);
  // 渲染商品图片
  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getproduct',
    data: {
      productId
    },
    dataType: 'json',
    success: function(info) {
      console.log(info);
      var htmlStr = template('product-bijiaTpl',info);
      $('#product-bijia .product-bijia').html(htmlStr);
    } 
  })

  $.ajax({
    type: 'get',
    url: 'http://localhost:3000/api/getproductcom',
    data: {
      productId
    },
    dataType: 'json',
    success: function(info) {
      console.log(info);
      var htmlStr = template('product-com-listTpl',info);
      $('.product-com .product-com-list ul').html(htmlStr);
    } 
  })

})