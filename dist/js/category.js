$(function () {

  categorytitlerender()

  // 点击比价标题进行渲染二级分类
  $('#category .row .category-title').on('click', '.category-title-li a', function () {
    console.log(111);
    // 用于切换隐藏比价内容
    $(this).next().toggleClass('active');
    // 获取id
    var id = $(this).data('id');
    console.log(id);
    // 渲染比价内容
    // categorycontentrender()
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getcategory',
      data: {
        titleid: id
      },
      dataType: 'json',
      success: (info) => {
        console.log(info);
        var htmlStr = template('categorycontentTpl', info);
        $(this).next().html(htmlStr);
      }
    })

  })


  // 渲染比价标题
  function categorytitlerender() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getcategorytitle',
      dataType: 'json',
      success: function (info) {
        // console.log(info);
        var htmlStr = template('categorytilteTpl', info);
        $('#category .row ul').html(htmlStr);
      }
    })
  }


  function categorycontentrender() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getcategory',
      data: {
        titleid: 11
      },
      dataType: 'json',
      success: (info) => {
        console.log(info);
        var htmlStr = template('categorycontentTpl', info);
        $(this).next().html(htmlStr);
        console.log(this);
        console.log($(this));
      }
    })
  }
  categorycontentrender();
})