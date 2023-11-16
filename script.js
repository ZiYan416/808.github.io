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

const doc = document;

 // 歌曲信息数组
 const songsList = [
	 {
		 id: 'xxx-01' ,
		 title: '简单爱' ,
		 author: '周杰伦' ,
		 path: 'music/简单爱.m4a',
		 time:0
	 },
	 {
	 		 id: 'xxx-02' ,
	 		 title: '爱在西元前' ,
	 		 author: '周杰伦' ,
	 		 path: 'music/爱在西元前.m4a',
	 		 time:0
	 },
	 {
	 		 id: 'xxx-03' ,
	 		 title: '安静' ,
	 		 author: '周杰伦' ,
	 		 path: 'music/安静.m4a',
	 		 time:0
	 },
	 {
	 		 id: 'xxx-04' ,
	 		 title: '对不起' ,
	 		 author: '周杰伦' ,
	 		 path: 'music/对不起.m4a',
	 		 time:0
	 }
 ];
 
 //获取DOM元素
 const audio = doc.querySelector('#audio'); //播放器
 const controls = doc.querySelector('#controls'); //控制区
 const title = doc.querySelector('#title'); //歌曲名
 const author = doc.querySelector('#author'); //作者
 const playBtn = doc.querySelector('#play'); //播放按钮
 const volumeBtn = doc.querySelector('#volume'); //声音开关
 
 //当前播放歌曲
 let curSongIndex = 0;
 //当前是否在播放中
 let isPlay = false;
 
 //初始化
 function init() {
	 render(songsList[curSongIndex]);
 }
 
 //按钮事件
 controls.addEventListener('click' , e => {
	 switch(e.target?.id) {
		 case 'volume':   //音量
		     // ToDo
			 break;
		 case 'previous':   //上一首
			 // ToDo
			 break;
		 case 'play':   //播放(暂停)
		     togglePlay();
			 break;
		 case 'next':   //下一首
			 // ToDo
		 	 break;
		 case 'mode':   //播放模式
			 // ToDo
		 	 break;
		 default:
			 break;
	 }
 }) 
 
 //渲染歌曲方法
 function render(song) {
	 title.innerHTML = song.title;
	 author.innerHTML = song.author;
	 audio.volume = 1;  //音量0~1;
	 audio.src = song.path;  //音乐资源路径
 }
 
 //播放/暂停 功能
 function togglePlay() {
	 if (!isPlay) {
		 // 暂停，图标切换
		 songPause();
	 } else {
		 //播放，图标切换
		 songPlay();
	 }
 }
 
//播放方法
 function songPlay() {
	 isPlay = true;
	 playBtn.classList.remove('bx bx-play');
	 playBtn.classList.add('bx bx-pause');
	 audio.play();
 }
 
 //暂停方法
  function songPlay() {
 	 isPlay = false;
 	 playBtn.classList.remove('bx bx-pause');
 	 playBtn.classList.add('bx bx-play');
 	 audio.pause();
  }
 
 init();