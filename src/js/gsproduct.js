$(function () {
  var shopid = 0;
  var areaid = 0;

  shplistrender();
  // 一级列表
  (function () {
    // 点击京东渲染
    $('.hd .filter ul li[data-id="getgsshop"]').click(function () {
      $('.hd .shop').removeClass('active');
      // $('.hd .shop').addClass('active');
      shoprender();
    })
    // 点击渲染地区
    $('.hd .filter ul li[data-id="getgsshoparea"]').click(function () {
      $('.hd .shop').removeClass('active');
      arearender();
    })
    // 点击渲染地区
    $('.hd .filter ul li[data-id="getgsshopprice"]').click(function () {
      $('.hd .shop').removeClass('active');
      pricerender();
    })
  })();


  // 二级分类店铺
  (function () {
    // 店铺点击事件
    $('.shop ul').on('click', 'li[class="shopli"]', function () {
      // 关闭ul
      $('.hd .shop').addClass('active');
      // 获取当前点击li的内容
      var value = $(this).find('a').text(); 
      // console.log(value);
      // 更改一级分类名称
      $('.hd .filter ul li[data-id="getgsshop"] a').text(value);
      // 获取店铺id
      shopid = $(this).data('id');
      // console.log(shopid);
      shplistrender();
    })
    // 地区点击事件
    $('.shop ul').on('click', 'li[class="areali"]', function () {
      // 关闭ul
      $('.hd .shop').addClass('active');
      // 获取当前点击li的内容
      var value = $(this).find('a').text(); 
      // console.log(value);
      // 更改一级分类名称
      $('.hd .filter ul li[data-id="getgsshoparea "] a').text(value);
      // 获取店铺id
      areaid = $(this).data('id');
      // console.log(areaid);
      shplistrender();
    })
  })()




  // 渲染店铺数据
  function shoprender() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getgsshop',
      dataType: 'json',
      success: function (info) {
        // console.log(info);
        var htmlStr = template('shopTpl', info);
        $('.hd .shop ul').html(htmlStr);
      }
    })
  }

  // 渲染地区
  function arearender() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getgsshoparea',
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var htmlStr = template('areaTpl', info);
        $('.hd .shop ul').html(htmlStr);
      }
    })
  }

  // 渲染全部价格
  function pricerender() {
    var htmlStr = '<li><a href="">全部价格</a></li>'
    $('.hd .shop ul').html(htmlStr);
  }

  // 渲染商品列表明细
  function shplistrender() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getgsproduct',
      data: {
        shopid,
        areaid
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var htmlStr = template('listTpl', info);
        $('.gsproduct-list ul').html(htmlStr);
      }
    })
  }
})