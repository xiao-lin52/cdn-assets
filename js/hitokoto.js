fetch('https://v1.hitokoto.cn?c=a')
.then(response => response.json())
.then(data => {
	const hitokoto = document.getElementById('hitokoto')
	hitokoto.innerText = '『 ' + data.hitokoto + ' 』' + '\n' + '——' + data.from
})
.catch(console.error)