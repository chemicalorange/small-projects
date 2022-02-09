const whyBlockAnimation = () => {
    let img = document.querySelector('.why-block__img')
    let listItems = document.querySelectorAll('.why-block__list li')

    listItems.forEach((listItem, index) => {
        listItem.addEventListener('mouseover', ()=>{
            img.classList.add(`animation-st-${index + 1}`)
            listItems.forEach((item, i)=>{
                if(i != index) item.classList.add('unactive') 
            })


        })
        listItem.addEventListener('mouseout', ()=>{
            img.classList.remove(`animation-st-${index + 1}`)
            listItems.forEach(item => item.classList.remove('unactive'))
        })
    })
}

whyBlockAnimation()