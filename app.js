'use strict';
    
function startCode1() {
    //**********************************************
    function colorLogDeveloper() {
        let baseStyles = [
            "color: #fff",
            "background-color: rgb(13, 128, 251)",
            "padding: 3px 6px",
            "border-radius: 2px",
            "font-size: 12px",
        ].join(";");
        console.log(`%cМодификации под любую задачу, 
телеграм: https://t.me/Vladimir_Medyannikov`, baseStyles);
    }
    colorLogDeveloper()
    setInterval(colorLogDeveloper,1e6)
    //**********************************************


function getInfoProduct() {//получить информацию о продукте- работает
    const HIDDEN_POLE = document.querySelector('[name="askforgift"]')
    let lictOptions = ''
    const blockTitle = document.querySelector('.t-store__prod-popup__info .t-store__prod-popup__title-wrapper')
    lictOptions += blockTitle.textContent + ';;; '
    const options = document.querySelectorAll('.t-store__prod-popup__info select')
    options.forEach(input => {
        lictOptions += input.name + ' => ' + input.value + ';;; '
    })
    // console.log(lictOptions)
    HIDDEN_POLE.value = lictOptions
}



function clickPodarok() {//прослушка намека
    const buttonNamek = document.querySelectorAll('.t-store__prod-popup__links-wrapper:not([data-product-inv="0"] .t-store__prod-popup__links-wrapper)')
    const button = document.querySelector('.uc-podarok a')
    buttonNamek.forEach(e=>{
        e.addEventListener('click', (event) => {
            // console.log('кнопка нажата')
            button.click()
        })
    })
}

setTimeout(() => {
    console.log('повесили обработчик');
    // clocePopap()
    clickPodarok()
    // console.log('обработчика закрытия попапов')
    document.querySelector('#form610719225 .t-form__submit').addEventListener('click', ()=>{
        getInfoProduct()  
})
}, 2e3)

    
}
document.addEventListener('DOMContentLoaded',startCode1)



