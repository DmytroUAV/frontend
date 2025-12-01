	const pattern=/[A-Z А-ЯІЇЄ][A-Za-zА-ЯІіЇїЄєа-я]*/;
	document.getElementById('input').addEventListener('keydown',function(event){
		if(event.key==='Enter'&&pattern.test(document.getElementById('input').value))
			{document.getElementById('User').innerText=document.getElementById('input').value;}
	})
	let userScore=0;
	let computerScore=0;
	let counter=0;
	let cards=['assets/6.png','assets/7.png','assets/8.png','assets/9.png','assets/10.png','assets/jack.png','assets/queen.png','assets/king.png','assets/ace.png'];
	function func()
	{
		if(document.getElementById('User').innerText!=="User" && counter<3)
		{
			let userCard=Math.floor(Math.random()*cards.length);
			let compCard=Math.floor(Math.random()*cards.length);
			let userNum=0;
			let computerNum=0;
			document.getElementById('usCardImg').setAttribute('src',cards[userCard]);
			document.getElementById('compCardImg').setAttribute('src',cards[compCard]);
			switch(cards[userCard])
			{
				case 'assets/6.png':
					userNum=6;
					break;
				case 'assets/7.png':
					userNum=7;
					break;
				case 'assets/8.png':
					userNum=8;
					break;
				case 'assets/9.png':
					userNum=9;
					break;
				case 'assets/10.png':
					userNum=10;
					break;
				case 'assets/jack.png':
					userNum=2;
					break;
				case 'assets/queen.png':
					userNum=3;
					break;
				case 'assets/king.png':
					userNum=4;
					break;
				case 'assets/ace.png':
					userNum=11;
					break;
			}
			switch(cards[compCard])
			{
				case 'assets/6.png':
					computerNum=6;
					break;
				case 'assets/7.png':
					computerNum=7;
					break;
				case 'assets/8.png':
					computerNum=8;
					break;
				case 'assets/9.png':
					computerNum=9;
					break;
				case 'assets/10.png':
					computerNum=10;
					break;
				case 'assets/jack.png':
					computerNum=2;
					break;
				case 'assets/queen.png':
					computerNum=3;
					break;
				case 'assets/king.png':
					computerNum=4;
					break;
				case 'assets/ace.png':
					computerNum=11;
					break;
			}
			userScore+=userNum;
			computerScore+=computerNum;
			document.getElementById('userPoint').innerText=userScore;
			document.getElementById('computerPoint').innerText=computerScore;
			counter++;
			document.getElementById('counter').innerText=counter;
			
			let historyDiv=document.getElementById('history');
			let roundDiv=document.createElement('div');
			roundDiv.className='history-round';
			roundDiv.innerHTML=`
				<div class="history-card">
					<img src="${cards[userCard]}">
					<span>${userNum}</span>
				</div>
				<span>VS</span>
				<div class="history-card">
					<img src="${cards[compCard]}">
					<span>${computerNum}</span>
				</div>
			`;
			historyDiv.appendChild(roundDiv);
		}
		if(counter>=3){
			document.getElementById('generate').style.display='none';
			document.getElementById('newGame').style.display='inline-block';
let result='';
if(Number(document.getElementById('userPoint').innerText)>Number(document.getElementById('computerPoint').innerText))
	{result='<b>Ви перемогли</b>';}
if(Number(document.getElementById('userPoint').innerText)<Number(document.getElementById('computerPoint').innerText))
	{result='<b>Дилер переміг</b>';}
if(Number(document.getElementById('userPoint').innerText)==Number(document.getElementById('computerPoint').innerText))
	{result='<b>Ничія</b>';}
let resultDiv=document.createElement('div');
resultDiv.innerHTML=result;
document.getElementById('middle').appendChild(resultDiv);
}
	}
	
	function newGame()
	{
		userScore=0;
		computerScore=0;
		counter=0;
		document.getElementById('userPoint').innerText=0;
		document.getElementById('computerPoint').innerText=0;
		document.getElementById('counter').innerText=0;
		document.getElementById('usCardImg').setAttribute('src','assets/queen.png');
		document.getElementById('compCardImg').setAttribute('src','assets/king.png');
		document.getElementById('history').innerHTML='';
		document.getElementById('middle').innerHTML='<i>Спроба № <b id="counter">0</b> з <b>3</b></i><button id="generate">Тягнути карту</button><button id="newGame" style="display:none;">Нова гра</button>';
		document.getElementById('generate').addEventListener('click',func);
		document.getElementById('newGame').addEventListener('click',newGame);
	}
	
	document.getElementById('generate').addEventListener('click',func);
	document.getElementById('newGame').addEventListener('click',newGame);