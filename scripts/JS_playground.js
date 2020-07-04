
// ただただ変数を表示する部分
const test = 'これが表示されていれば変数はバッチリ表示されています！';
const displayElement = document.getElementById('display_variable');
// displayElement.innerHTML = test
// innerHTML だと元々表示されていた文も消えちゃうから insertAdjacentHTML にする
displayElement.insertAdjacentHTML('beforeend', test);

// ボタンを押したら変数を表示する部分
// はじめdiv要素は要らないので削除してます
const displayBlock = document.getElementById('onclick_display');
if (!displayBlock.innerHTML) {
  displayBlock.style.display = 'none';
}
function displayText() {
    const element = document.getElementById('onclick_display');
    if (displayBlock.style.display === 'none') {
      displayBlock.style.display = 'block';
    }
    element.innerHTML = test;
}
