let menu = ''
$(document).ready(function(){
      menu +='<li  class="ui-first-child ui-last-child" data-filtertext="demos homepage" data-icon="home">'
      menu +='<a class="ui-btn ui-btn-icon-right ui-icon-home action" data-url="index" href="javascript:void(0)">Home</a>'
      menu +='</li>'

      menu +='<li  class="ui-first-child ui-last-child" data-filtertext="demos homepage" data-icon="shop">'
      menu +='<a class="ui-btn ui-btn-icon-right ui-icon-shop action" data-url="produk" href="javascript:void(0)">Produk</a>'
      menu +='</li>'

      menu +='<li  class="ui-first-child ui-last-child" data-filtertext="demos homepage" data-icon="tag">'
      menu +='<a class="ui-btn ui-btn-icon-right ui-icon-tag action" data-url="kategori" href="javascript:void(0)">Kategori</a>'
      menu +='</li>'

      menu +='<li  class="ui-first-child ui-last-child" data-filtertext="demos homepage" data-icon="comment">'
      menu +='<a class="ui-btn ui-btn-icon-right ui-icon-comment action" data-url="chat" href="javascript:void(0)">Chat</a>'
      menu +='</li>'

    $('#menu_component').html(menu);

    $('.action').click(function(){
      let url = $(this).data('url')
      window.location.href = url+'.html'
    })
    
})