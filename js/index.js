document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('imageContainer');
    container.classList.add('loaded'); // 添加loaded类以触发过渡效果
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    // 找到 Back to Top 按钮
    var backButton = document.getElementById('backButton');

    // 添加点击事件监听器
    backButton.addEventListener('click', function() {
        // 使用 smooth 滚动效果回到页面顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
