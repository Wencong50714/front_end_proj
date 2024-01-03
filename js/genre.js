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

function startAutoScroll(container) {
    let scrollAmount = 0;
    let scrollingForward = true;

    function step() {
        // 每次调用时滚动的距离
        if (scrollingForward) {
            container.scrollLeft += 1;
            scrollAmount += 1;
        } else {
            container.scrollLeft -= 1;
            scrollAmount -= 1;
        }

        // 如果滚动到了末尾或开头，则改变方向
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            scrollingForward = false;
        } else if (scrollAmount <= 0) {
            scrollingForward = true;
        }

        // 继续滚动
        requestAnimationFrame(step);
    }

    // 开始滚动
    requestAnimationFrame(step);
}

// 页面加载完毕后开始滚动
document.addEventListener("DOMContentLoaded", function () {
    // 获取所有的 .card-container 元素
    const containers = document.querySelectorAll('.card-container');

    // 遍历每个 .card-container 并开始滚动
    containers.forEach(container => {
        startAutoScroll(container);
    });
});



//按钮
document.addEventListener("DOMContentLoaded", function () {
    var backButton = document.getElementById('backButton_1');
    backButton.addEventListener('click', function () {
        // 使用 smooth 滚动效果回到页面顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
