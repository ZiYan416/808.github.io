let navbarItem = document.querySelectorAll('.item')
for (let i = 0; i < navbarItem.length; i++) {
    navbarItem[i].addEventListener('click', function () {
        for (let i = 0; i < navbarItem.length; i++) {
            navbarItem[i].classList.remove('active')
        }
        this.classList.add('active')
    })
}

var typed = new Typed(".multiple-text", {
    strings: ['College Student', "Music Lover", "Software Engineering Apprenticeship"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// 获取图片元素
var image = document.getElementById('myImage');

// 添加点击事件监听器
image.addEventListener('click', function() {
  if (image.src.match('Jay2.jpg')) {
    image.src = 'Jay.jpg';
  } else {
    image.src = 'Jay2.jpg';
  }
});