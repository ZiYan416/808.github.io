let navbarItem = document.querySelectorAll('.item')
for (let i = 0; i < navbarItem.length; i++) {
	navbarItem[i].addEventListener('click', function() {
		for (let i = 0; i < navbarItem.length; i++) {
			navbarItem[i].classList.remove('active')
		}
		this.classList.add('active')
	})
}

var typed = new Typed(".multiple-text", {
	strings: ['Music playing?', 'Note Organizing?', 'Web collection?'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
})

window.addEventListener('DOMContentLoaded', (event) => {
	// 获取图片元素
	var image = document.getElementById('myImage');

	// 添加点击事件监听器
	image.addEventListener('click', function() {
		if (image.src.match('Jay2.jpg')) {
			audio.play();
			playButton.classList.remove('bx-play');
			playButton.classList.add('bx-pause');
			image.src = 'Jay.jpg';
		} else {
			audio.pause();
			playButton.classList.remove('bx-pause');
			playButton.classList.add('bx-play');
			image.src = 'Jay2.jpg';
		}
	});

	// 歌曲信息数组
	const playlist = [{
			id: 'xxx-01',
			title: '简单爱',
			author: '周杰伦',
			path: 'music/简单爱.mp3',
			time: "4:31"
		},
		{
			id: 'xxx-02',
			title: '爱在西元前',
			author: '周杰伦',
			path: 'music/爱在西元前.mp3',
			time: "3:54"
		},
		{
			id: 'xxx-03',
			title: '安静',
			author: '周杰伦',
			path: 'music/安静.mp3',
			time: "5:34"
		},
		{
			id: 'xxx-04',
			title: '对不起',
			author: '周杰伦',
			path: 'music/对不起.mp3',
			time: "3:45"
		}
	];

	//当前播放歌曲
	let currentSongIndex = 0;

	//初始化
	function init() {
		render(playlist[currentSongIndex]);
	}

	const playButton = document.getElementById('play');
	const audio = document.getElementById('audio');
	const progressBar = document.getElementById('bar');
	const progressOverlay = document.getElementById('overlay');
	const startTime = document.getElementById('start');
	const endTime = document.getElementById('end');
	const title = document.getElementById('title');
	const author = document.getElementById('author');
	const previousButton = document.getElementById('previous');
	const nextButton = document.getElementById('next');
	const listButton = document.getElementById('list');

	//播放事件
	playButton.addEventListener('click', () => {
		if (audio.paused) {
			playSong();
		} else {
			pauseSong();
		}
	});

	//播放完成自动播放下一首事件
	audio.addEventListener('ended', function() {
		// 增加当前歌曲索引
		currentSongIndex++;
		// 检查当前歌曲索引是否超出了播放列表的范围
		if (currentSongIndex >= playlist.length) {
			currentSongIndex = 0; // 如果超出范围，回到第一首歌曲
		}
		// 播放下一首歌曲
		loadSong(currentSongIndex);
		playSong();
	});

	//上一首事件
	previousButton.addEventListener('click', () => {
		previousSong();
	});
	//下一首事件
	nextButton.addEventListener('click', () => {
		nextSong();
	});
	//进度条功能
	audio.addEventListener('timeupdate', () => {
		const progress = (audio.currentTime / audio.duration) * 100;
		startTime.textContent = formatTime(audio.currentTime);
		//根据进度条调整颜色
		progressOverlay.style.width = `${progress}%`;
	});

	function formatTime(time) {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${padZero(minutes)}:${padZero(seconds)}`;
	}

	function padZero(number) {
		return number.toString().padStart(2, '0');
	}
	//上一首方法
	function previousSong() {
		currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
		loadSong(currentSongIndex);
		playSong();
	}
	//下一首方法
	function nextSong() {
		currentSongIndex = (currentSongIndex + 1) % playlist.length;
		loadSong(currentSongIndex);
		playSong();
	}
	//播放方法
	function playSong() {
		audio.play();
		playButton.classList.remove('bx-play');
		playButton.classList.add('bx-pause');
		image.src = 'Jay.jpg';
	}
	//暂停方法
	function pauseSong() {
		audio.pause();
		playButton.classList.remove('bx-pause');
		playButton.classList.add('bx-play');
		image.src = 'Jay2.jpg';
	}
	//渲染歌曲方法
	function render(song) {
		title.innerHTML = song.title;
		author.innerHTML = song.author;
		endTime.innerHTML = song.time;
		audio.volume = 0.7; //音量0~1;
		audio.src = song.path; //音乐资源路径
	}
	//加载歌曲方法
	function loadSong(index) {
		const song = playlist[index];
		title.innerHTML = song.title;
		author.innerHTML = song.author;
		endTime.innerHTML = song.time;
		audio.src = song.path;
	}

	init();
});