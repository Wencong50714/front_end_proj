document.addEventListener("DOMContentLoaded", function () {
document.getElementById('githubButton').addEventListener('click', function() {
    var githubRepoUrl = 'https://github.com/Wencong50714/front_end_proj.git';
    window.open(githubRepoUrl, '_blank');
});
})

//页面进入动画
document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    container.classList.add('fadeIn');
});
