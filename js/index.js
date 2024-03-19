document.addEventListener("DOMContentLoaded", function () {
    // 显示加载图标
    var loaders = document.getElementsByClassName('loader');
    for (var i = 0; i < loaders.length; i++) {
        loaders[i].style.display = 'block';
    }

    // 选择 learn-more 按钮并添加点击事件监听器
    var learnMoreButton = document.querySelector(".learn-more");
    learnMoreButton.addEventListener('click', function () {
        window.scrollTo({
            top: 750,
            behavior: 'smooth'
        });
    });

    // 找到 Back to Top 按钮
    var backButton = document.getElementById('backButton');

    // 添加点击事件监听器
    backButton.addEventListener('click', function () {
        // 使用 smooth 滚动效果回到页面顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // 当页面所有资源加载完成后隐藏加载图标
    window.addEventListener('load', function () {
        for (var i = 0; i < loaders.length; i++) {
            loaders[i].style.display = 'none';
        }
        // 添加loaded类以触发过渡效果
        var container = document.getElementById('imageContainer');
        container.classList.add('loaded');
    });
});


