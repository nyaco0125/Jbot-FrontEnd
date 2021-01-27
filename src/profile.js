const img = document.querySelector('.profile');
const info = document.querySelector('.info');
let profileOneChecker = 0 

img.addEventListener('click',()=>{
    if(profileOneChecker==0){
        info.classList.remove('hide');
        profileOneChecker = 1;
    } else {
        info.classList.add('hide');
        profileOneChecker = 0;
    }
});