const pattern = /[A-Z А-ЯІЇЄ][A-Za-zА-ЯІіЇїЄєа-я]*/;
document.getElementById('input').addEventListener('keydown', function(event) {
	if(event.key === 'Enter' && pattern.test(document.getElementById('input').value)) {
		document.getElementById('User').innerText = document.getElementById('input').value;
	}
});
let counter = 0;
let fruits = ['assets/fruits/apple.png', 'assets/fruits/banana.png', 'assets/fruits/watermelon.png', 'assets/fruits/blueberry.png', 'assets/fruits/cherry.png', 'assets/fruits/pear.png', 'assets/fruits/flea.png', 'assets/fruits/grape.png'];
function func() {
	if(counter >= 3) return;
	
	counter++;
	document.getElementById('counter').innerText = counter;
	
	for(let col of document.querySelectorAll('.column')) {
		let colfruits = [...fruits];
		for(let element of col.querySelectorAll('.cell')) {
			let fruit = Math.floor(Math.random() * colfruits.length);
			element.querySelector('img').setAttribute('src', colfruits[fruit]);
			element.querySelector('img').style.display = 'block';
			colfruits.splice(fruit, 1);
		}
	}
	
	let row1 = document.querySelector('#col1 > div:nth-child(2) > img').getAttribute('src');
	let row2 = document.querySelector('#col2 > div:nth-child(2) > img').getAttribute('src');
	let row3 = document.querySelector('#col3 > div:nth-child(2) > img').getAttribute('src');
	let isWin = (document.querySelector('#col1 > div:nth-child(1) > img').getAttribute('src') === document.querySelector('#col2 > div:nth-child(1) > img').getAttribute('src') && document.querySelector('#col2 > div:nth-child(1) > img').getAttribute('src') === document.querySelector('#col3 > div:nth-child(1) > img').getAttribute('src'))
	|| (document.querySelector('#col1 > div:nth-child(2) > img').getAttribute('src') === document.querySelector('#col2 > div:nth-child(2) > img').getAttribute('src') && document.querySelector('#col2 > div:nth-child(2) > img').getAttribute('src') === document.querySelector('#col3 > div:nth-child(2) > img').getAttribute('src'))
	|| (document.querySelector('#col1 > div:nth-child(3) > img').getAttribute('src') === document.querySelector('#col2 > div:nth-child(3) > img').getAttribute('src') && document.querySelector('#col2 > div:nth-child(3) > img').getAttribute('src') === document.querySelector('#col3 > div:nth-child(3) > img').getAttribute('src'));
	
	let historyItem = document.createElement('div');
	historyItem.className = 'history-item ' + (isWin ? 'win' : 'lose');
	historyItem.innerHTML = '<div>' + (isWin ? 'Виграш' : 'Програш') + '</div><div class="combo"><img src="' + row1 + '"><img src="' + row2 + '"><img src="' + row3 + '"></div>';
	document.getElementById('historyList').insertBefore(historyItem, document.getElementById('historyList').firstChild);
	
	if(counter >= 3) {
		let winCount = document.querySelectorAll('.history-item.win').length;
		if(winCount >= 2) {
			document.querySelector('.info').innerHTML = '<div><b>Ви перемогли!</b></div><div>Гравець: <b id="User">' + document.getElementById('User').innerText + '</b></div>';
		} else if(winCount === 1) {
			document.querySelector('.info').innerHTML = '<div><b>Ну, хоча б, не все втрачено</b></div><div>Гравець: <b id="User">' + document.getElementById('User').innerText + '</b></div>';
		} else {
			document.querySelector('.info').innerHTML = '<div><b>Повезе іншим разом</b></div><div>Гравець: <b id="User">' + document.getElementById('User').innerText + '</b></div>';
		}
	}
}
function newGame() {
	counter = 0;
	const userName = document.getElementById('User') ? document.getElementById('User').innerText : 'User';
	document.querySelector('.info').innerHTML = '<div>Гравець: <b id="User">' + userName + '</b></div><div>Спроба № <b id="counter">0</b> з <b>3</b></div>';
	for(let col of document.querySelectorAll('.column')) {
		for(let element of col.querySelectorAll('.cell')) {
			element.querySelector('img').style.display = 'none';
			element.querySelector('img').setAttribute('src', '');
		}
	}
	document.getElementById('historyList').innerHTML = '';
}
document.getElementById('generate').addEventListener('click', func);
document.getElementById('newGame').addEventListener('click', newGame);