
function showDetail(event) {
  console.log('showDetail function called');
  var selectedCard = event.target.closest('.card');
  var songTitle = selectedCard.querySelector('h3').innerText;
  var artist = selectedCard.querySelector('h5').innerText;
  var description = selectedCard.querySelector('p').innerText;

  // 更新模态框内容
  document.getElementById('modal-title').innerText = songTitle;
  document.getElementById('modal-artist').innerText = artist;
  document.getElementById('modal-description').innerText = description;

  // 显示模态框
  document.getElementById('modal-container').style.display = 'block';
}

function closeModal() {
  // 关闭模态框
  document.getElementById('modal-container').style.display = 'none';
}
