// 要素を取得
const memo = document.querySelector( '#wrapper p' );
const show = document.querySelector( '#show' );
const save = document.querySelector( '#save' );
const remove = document.querySelector( '#remove' );

let message;

// クリックイベント（メモするボタン）
save.addEventListener( 'click', () => {
  // 入力内容を変数に格納
  message = prompt( 'メモの内容を入力してください。' );

  // Webストレージ（localStrage）に保存する
  localStorage.setItem( 'msg', message );
});


// クリックイベント（表示するボタン）
show.addEventListener( 'click', () => {
  // Webストレージ（localStrage）から取得した値で
  // p要素内容を書き換える
  memo.innerText = localStorage.getItem( 'msg' );
});


// クリックイベント（削除するボタン）
show.addEventListener( 'click', () => {
  // Webストレージ（localStrage）の値を削除する
  localStorage.removeItem( 'msg' );
});