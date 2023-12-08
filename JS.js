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

function startAutoScroll() {
  const container = document.querySelector('.card-container');
  let scrollAmount = 0;
  let cardWidth = container.querySelector('.card').offsetWidth; // 获取卡片宽度

  function step() {
      // 每次调用时滚动的距离
      container.scrollLeft += 1;
      scrollAmount += 1;

      // 检查是否滚动到最后一个卡片的一部分
      if (scrollAmount >= cardWidth) {
          // 将第一个卡片移动到末尾
          const firstCard = container.querySelector('.card');
          container.appendChild(firstCard);
          container.scrollLeft -= firstCard.offsetWidth;
          scrollAmount -= cardWidth;
      }

      // 继续滚动
      requestAnimationFrame(step);
  }

  // 开始滚动
  requestAnimationFrame(step);
}

// 页面加载完毕后开始滚动
window.onload = startAutoScroll;

