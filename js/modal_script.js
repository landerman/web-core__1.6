const modal = document.querySelector('.modal');
const closeBtn1 = document.querySelector('.modal__close-btn1');
const closeBtn2= document.querySelector('.modal__close-btn2');
const ucall= document.querySelector('.ucall');
const ufeedback= document.querySelector('.ufeedback');





ufeedback.addEventListener('click', function (evt) {

    if(modal.classList.contains('modal--remove')){
        modal.classList.remove('modal--remove')
    }
    if(modal.classList.contains('modal--feedback-remove')){
        modal.classList.remove('modal--feedback-remove')
    }
    evt.preventDefault();
    modal.classList.remove('modal--remove');
    modal.classList.add('modal--call-remove')
    })

ucall.addEventListener('click', function (evt) {
    if(modal.classList.contains('modal--remove')){
        modal.classList.remove('modal--remove')
    }
    if(modal.classList.contains('modal--call-remove')){
        modal.classList.remove('modal--call-remove')
    }
    evt.preventDefault();
    modal.classList.remove('modal--remove');
    modal.classList.add('modal--feedback-remove')
    })

closeBtn1.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.add('modal--remove');
})


closeBtn2.addEventListener('click', function(evt){
    evt.preventDefault();
    modal.classList.add('modal--remove');
})

document.addEventListener('click', (e) => {
    const click1 = e.composedPath().includes(modal);
    const click2 = e.composedPath().includes(ucall);
    const click3 = e.composedPath().includes(ufeedback);
    if(!click1 && !click2 && !click3){
        modal.classList.add('modal--remove');
    }else{
        modal.classList.remove('modal--remove')
    }
})


//     document.addEventListener('click', (e) => {
//     const click1 = e.composedPath().includes(modal);

//     if(!click1 ){
//         modal.classList.add('modal--remove');
//     }
// }
// })