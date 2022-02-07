let progressBarItems = document.querySelectorAll('.form .form__range')

const changeInputValue = (item) =>{
    let input = item.querySelector('input')
    item.querySelector('.progress').style.width = (100 / 18) * input.value + '%'
    item.querySelector('.progress__value').textContent = input.value + ' г/кг'
}

progressBarItems.forEach(item => {
    changeInputValue(item)
    let input = item.querySelector('input')
    input.addEventListener('input', () => {
        changeInputValue(item)
    })
})

let inputsFork = document.querySelectorAll('.form__controls-radio_fork input')
let formFork = document.querySelector('.form__fork')

inputsFork.forEach(item => {
    item.addEventListener('click', ()=>{
        if(item.value == "Нет"){
            formFork.classList.add('no')
        }else{
            formFork.classList.remove('no')
        }
    })
})