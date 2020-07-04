const test = 'これが表示されていれば変数はバッチリ表示されています！'

const display_element = document.getElementById('display_variable')
// display_element.innerHTML = test
// innerHTML だと元々表示されていた文も消えちゃうから insertAdjacentHTML にする
display_element.insertAdjacentHTML('beforeend', test)
