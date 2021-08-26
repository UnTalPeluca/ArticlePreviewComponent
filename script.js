const shareBtn = document.querySelector('.art-share-btn');
const shareContainer = document.querySelector('.art-share-container');
const arrowDown = document.querySelector('.arrow-down');
let visible = false;
const mediaQuery = window.matchMedia('(min-width: 1440px)')

mediaQuery.addListener((obj)=>{
    if (visible){
        if (obj.matches === true){
            arrowDown.classList.remove('hidden')
            shareBtn.classList.remove('top-pd')
        }else{
            arrowDown.classList.add('hidden')
            shareBtn.classList.add('top-pd')
        }
    }
})
shareBtn.addEventListener('click', ()=>{
    if(visible){
        shareContainer.classList.add('hidden')
        shareBtn.classList.remove('clicked')
        arrowDown.classList.add('hidden')
        visible = false
    }else{
        shareContainer.classList.remove('hidden')
        shareBtn.classList.add('clicked')
        arrowDown.classList.remove('hidden')
        visible = true
        if(window.innerWidth >= 1440){
            shareBtn.classList.remove('top-pd')
        } else{
            shareBtn.classList.add('top-pd')
        }
    }
})



