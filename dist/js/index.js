$(function () {
  // 进入页面渲染分类
  function render() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getindexmenu',
      dataType: 'json',
      success: function (info) {
        // console.log(info);
        var htmlStr = template('navTpl', info);
        $('.nav').html(htmlStr);
      }
    })
  }
  render();

  // 点击更多
  $('.nav').on('click', '.item:nth-child(8)', function () {
    console.log(111);
    // $('.nav').find('.item:nth-child(9)').toggleClass('.active');
    $(this).nextAll().toggleClass('active');
  })

  const renderProduct = function () {
    $.ajax({
      url: 'http://localhost:3000/api/getmoneyctrl',
      success(info) {
        console.log(info)
        $('.product-list ul').html(template('productTpl', info))
      }
    })
  }
  renderProduct()
})

// $('#menu .row').on('click', '.menu-item', function() {
//   $('#menu .row')
// })