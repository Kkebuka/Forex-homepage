const hamburger = document.querySelector('.hamburger');
const myLinks = document.querySelector('.mylinks');
hamburger.addEventListener('click', function(){
    if(myLinks.style.display ==='block'){
        myLinks.style.display ='none';
    } else {
        myLinks.style.display ='block';
    }
})