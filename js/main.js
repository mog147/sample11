
// hamburger

      $(".btn-gNav").click(function(){
        if($(".gnav").hasClass("open")){ // クリックされた要素がopenクラスだったら
          $(".gnav").removeClass("open");
        }else{
          $(".gnav").addClass("open");
        }
      });

      $(".gnav").click(function(){
        $(this).removeClass("open");
      });


// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById('cursor'); 

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {

    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});


// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');

for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {

        cursor.classList.add('cursor--hover');
    });

    link[i].addEventListener('mouseout', function (e) {

        cursor.classList.remove('cursor--hover');   
        
    });
}

