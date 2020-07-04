let postedComments = [];

function postComment() {
  // 投稿内容を取得
  const userName = user_name.value;
  const userComment = comment.value;
  console.log(userName.length);
  console.log(userComment);
  const commentContent = {
    'userName': userName,
    'userComment': userComment
  };
  // 投稿内容を配列に追加しHTMLへ表示
  postedComments.push(commentContent);
  console.log(postedComments);
  const commentsArea = document.getElementById('comments_area');
  for (let i = 0; i < postedComments.length; i++) {
    // 要素の作成
    const commentContents = document.createElement('div');
    const userNameArea = document.createElement('div');
    const userCommentArea = document.createElement('div');
    commentContents.setAttribute('id', `comment${i}`);
    commentContents.classList.add('content');

    // 投稿内容を挿入
    userNameArea.innerHTML = `名前: ${postedComments[i].userName}`;
    userCommentArea.innerHTML = `ひとこと: ${postedComments[i].userComment}`;

    // 要素に親子関係を挿入
    commentContents.appendChild(userNameArea);
    commentContents.appendChild(userCommentArea);
    commentsArea.appendChild(commentContents);
  }
  const formDescription = document.getElementById('form_description');
  formDescription.innerHTML = '投稿が完了しました！'
}