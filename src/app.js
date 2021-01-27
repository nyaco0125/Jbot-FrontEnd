const gameBTN = document.getElementById('game');
const adminBTN = document.getElementById('admin');
const severMangeBTN = document.getElementById('severManage');
const UserMangeBTN = document.getElementById('UserManage');
const channelBTN = document.getElementById('channel');
const pointBTN = document.getElementById('point');
const etcBTN = document.getElementById('etc');
const modal = document.querySelector('.modal');

let game_checker = 0;
let admin_checker = 0;
let severMang_checker = 0;
let UserMange_checker = 0;
let point_checker = 0;
let channel_checker = 0;
let etc_checker = 0;

gameBTN.addEventListener('click',()=>{
    if(game_checker == 0){
        modal.classList.remove('hide');
        modal.innerText='이것은 게임에 대한 설명입니다';
        game_checker = game_checker + 1;
        admin_checker = 0;
        severMang_checker = 0;
        channel_checker = 0;
        UserMange_checker = 0;
        point_checker = 0;
        etc_checker = 0;
    } else {
        modal.classList.add('hide');
        game_checker = game_checker - 1;
    }
})

adminBTN.addEventListener('click',()=>{
    if(admin_checker == 0){
        modal.classList.remove('hide');
        modal.innerText='이것은 관리자 기능에 대한 설명입니다';
        admin_checker = admin_checker + 1;
        game_checker = 0;
        severMang_checker = 0;
        channel_checker = 0;
        UserMange_checker = 0;
        point_checker = 0;
        etc_checker = 0;
    } else {
        modal.classList.add('hide');
        admin_checker = admin_checker - 1;
    }
})

severMangeBTN.addEventListener('click',()=>{
    if(severMang_checker == 0){
        modal.classList.remove('hide');
        modal.innerText='이것은 서버관리에 대한 설명입니다';
        severMang_checker = severMang_checker + 1;
        game_checker = 0;
        admin_checker = 0;
        channel_checker = 0;
        UserMange_checker = 0;
        point_checker = 0;
        etc_checker = 0;
    } else {
        modal.classList.add('hide');
        severMang_checker = severMang_checker - 1;
    }
})

UserMangeBTN.addEventListener('click',()=>{
    if(UserMange_checker == 0){
        modal.classList.remove('hide');
        modal.innerText='이것은 유저 관리 명령어에 대한 설명입니다';
        UserMange_checker = UserMange_checker + 1;
        game_checker = 0;
        admin_checker = 0;
        channel_checker = 0;
        severMang_checker = 0;
        point_checker = 0;
        etc_checker = 0;
    } else {
        modal.classList.add('hide');
        UserMange_checker = UserMange_checker - 1;
    }
})

channelBTN.addEventListener('click',()=>{
    if(channel_checker == 0){
        modal.classList.remove('hide');
        modal.innerText='이것은 채널 생성에 대한 설명입니다';
        channel_checker = channel_checker + 1;
        game_checker = 0;
        admin_checker = 0;
        UserMange_checker = 0;
        severMang_checker = 0;
        point_checker = 0;
        etc_checker = 0;
    } else {
        modal.classList.add('hide');
        channel_checker = channel_checker - 1;
    }
})

pointBTN.addEventListener('click',()=>{
    if(point_checker == 0){
        modal.classList.remove('hide');
        modal.innerText='이것은 포인트에 대한 설명입니다';
        point_checker = point_checker + 1;
        game_checker = 0;
        admin_checker = 0;
        UserMange_checker = 0;
        severMang_checker = 0;
        channel_checker = 0;
        etc_checker = 0;
    } else {
        modal.classList.add('hide');
        checker = checker - 1;
    }
})

etcBTN.addEventListener('click',()=>{
    if(etc_checker== 0){
        modal.classList.remove('hide');
        modal.innerText='이것은 기타에 대한 설명입니다';
        etc_checker = etc_checker + 1;
        game_checker = 0;
        admin_checker = 0;
        UserMange_checker = 0;
        severMang_checker = 0;
        point_checker = 0;
        channel_checker = 0;
    } else {
        modal.classList.add('hide');
        etc_checker = etc_checker - 1;
    }
})



