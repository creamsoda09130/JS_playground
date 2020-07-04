let postedComments = [];

function postComment() {
  // 投稿内容を取得
  const userName = user_name.value
  const userComment = comment.value
  console.log(userName)
  console.log(userComment)
  const formDescription = document.getElementById('form_description');
  formDescription.innerHTML = '投稿が完了しました！'
}