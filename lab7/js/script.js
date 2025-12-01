function func()
{
    const pattern=/[A-Za-zА-ЯІіЇїЄєа-я][A-Za-zА-ЯІіЇїЄєа-я\s]*\?/;
    if(pattern.test(document.getElementById('input').value)){;
        const answers=["Так","Ні","Навіть не думай","Цілком можливо","Духи говорять так!","Дуже сумнівно","Абсолютно точно","Абсолютно можливо","Є стійке відчуття, що завтрашній день породить ланцюжок деяких подій, які у короткостроковій перспективі, певним визначеним чином повпливають на динаміку можливості не тільки працювати, але й спати. Спостерігаємо. Підписатись 3.0"];
        const random = Math.floor(Math.random() * answers.length);
        document.getElementById('answer').innerText=answers[random];
    }
}
document.body.innerHTML=`<div style="display:flex;justify-content: center;">
        <input id="input" style="font-size: 2rem; background-color:rgb(155, 207, 192); border-radius: 20px; width:50%; margin-top:1%; text-align:center;" placeholder="Запитаєте духів?" type="text" name="text" size="256">
    </div>
    <div id="answer" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 2rem; color:lightblue; text-align:center;"></div>`;
document.body.style=`display:flex; flex-direction: column; background-color: black; background-image: url('magicball.gif');background-size: contain; background-repeat: no-repeat;background-position: center center; background-attachment: fixed;`;
document.addEventListener('click',function(event){if (event.target !== document.getElementById('input')&&document.getElementById('input').value!=0&&document.getElementById('input').value) func();});
