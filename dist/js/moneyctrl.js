$(function () {
  var pageid = 1;
  var pagecount;
  console.log(pageid);
  prorender();

  // 渲染商品
  function prorender() {
    $.ajax({
      type: 'get',
      url: 'http://localhost:3000/api/getmoneyctrl',
      data: {
        pageid: pageid,
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        var htmlStr = template('saveproductTpl', info);
        $('.product-list-product ul').html(htmlStr);

        // 算出总页数
        pagecount = Math.ceil(info.count / 10)
        // console.log(pagecount);
        var htmlStr1 = '';
        for (i = 1; i <= pagecount; i++) {
          htmlStr1 += `<option value=${i}>第${i}页</option>`
        }
        // 渲染总页数
        $('.page #selectPage').html(htmlStr1);
        // 改变分页的值
        $('.page #selectPage').val(pageid); 0
      }
    })
  }


  $('#selectPage').on('change', function () {
    pageid = $(this).val();  //千万不能var，因为改全局
    console.log(pageid);
    prorender();
  })

  // 点击上一页添加点击事件
  $('#pageAdd').click(function () {
    // console.log(111);
    pageid--
    if (pageid < 1) {
      pageid = 1
      return;
    }
    prorender();
  })

  // 给下一页添加点击事件
  $('#pageRemove').click(function () {
    // console.log(111);
    pageid++
    // 因为option长度是有限制的，pageid加到大于他的长度时，没有数据了，发送请求就会报错
    var length = $('option').length;
    if (pageid > length) {
      pageid = length;
      return;
    }
    prorender();
  })


})