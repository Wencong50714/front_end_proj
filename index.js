document.addEventListener("DOMContentLoaded", function() {
  var container = document.getElementById('imageContainer');
  container.classList.add('loaded'); // 添加loaded类以触发过渡效果
});

document.getElementById('nextButton').addEventListener('click', function() {
  // 在点击按钮时滚动到下一页
  document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
});