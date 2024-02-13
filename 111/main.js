let inputOne = document.querySelector('#input-1');

let inputTwo = document.querySelector('#input-2');

let btn = document.querySelector('#btn');

let textResult = document.querySelector('#result-text');

btn.addEventListener('click', ()=> {
    if ( inputOne.value.length === 0 || inputTwo.value.length === 0 ) {
        alert('Заполните все поля!');
    } else {
        if ( inputTwo.value > 31 ) {
            alert('Укажите корректное число рабочих дней!')
        } else {
            let result = inputOne.value * inputTwo.value;
            textResult.innerText = `За ${inputTwo.value} дня(дней) Вы заработаете ${result} рублей.`;
        }
    }
});