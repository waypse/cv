const loadingScreen = document.querySelector('.loading-screen');

document.addEventListener('DOMContentLoaded', () => {
    loadingScreen.style.opacity = '0';
    setTimeout(function () {
        loadingScreen.style.display = 'none';
    });
});

const burgerMenuWrapper = document.getElementById('burger_menu_wrapper');
const burgerMenu = document.getElementById('burger_menu');
const menu = document.getElementById('menu');
var texts = [...document.querySelectorAll('.slide-in')];
var links = [document.getElementById('link-1'),document.getElementById('link-2'),document.getElementById('link-3'),document.getElementById('link-4'),document.getElementById('link-5'),document.getElementById('link-6')];
const picture = document.getElementById('picture');

let menuOpen = false;

if(burgerMenu) {
    burgerMenuWrapper.addEventListener('click', () => {
        if(!menuOpen) {
            menuOpen = true;
            burgerMenuWrapper.classList.add('disabled');
            burgerMenu.classList.add('open');
            picture.classList.add('fade-out');
            picture.classList.remove('fade-in');
            document.getElementById('contact').style.transform = 'translate3d(0%, 0%, 0)';
            texts.forEach(text => {
                text.classList.add('slide-out');
                text.classList.remove('slide-in');
                setTimeout(function () {
                    menu.style.display = 'flex';
                    links.forEach(link => {
                        link.classList.remove('slide-out', 'active');
                        link.classList.add('slide-in', 'not-active');
                    });
                },1500);
            });
            setTimeout(function () {
                burgerMenuWrapper.classList.remove('disabled');
            },3000);
        }
        else if(menuOpen) {
            menuOpen = false;
            burgerMenuWrapper.classList.add('disabled');
            burgerMenu.classList.remove('open');
            links.forEach(link => {
                link.classList.add('slide-out', 'active');
                link.classList.remove('slide-in', 'not-active');
                setTimeout(function () {
                    texts.forEach(text => {
                        menu.style.display = 'none';
                        text.classList.add('slide-in');
                        text.classList.remove('slide-out');
                        picture.classList.add('fade-in');
                        picture.classList.remove('fade-out');
                        document.getElementById('contact').style.transform = 'translate3d(0%, 100%, 0)';
                    });
                },1500);
            });
            setTimeout( function () {
                burgerMenuWrapper.classList.remove('disabled');
            },3000);
        }
    });
}

// Page transition

window.onload = () => {
    const anchors = [...document.querySelectorAll('a')];
    const languages = [document.querySelector('.french'),document.querySelector('.english')]
    const transition_el = document.querySelector('.page-transition');
  
    setTimeout(() => {
      transition_el.classList.remove('page-transition-active');
    }, 800);
  
    anchors.forEach((anchor) => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = anchor.href;
    
            console.log(transition_el);
    
            transition_el.classList.add('page-transition-active');
    
            console.log(transition_el);
    
            setInterval(() => {
                window.location.href = target;
            }, 800);
        });
    });
    languages.forEach((langue) => {
        langue.addEventListener('click', e => {
            e.preventDefault();
            let target = langue.href;
    
            transition_el.classList.add('page-transition-active');
    
            setInterval(() => {
                window.location.href = target;
            }, 800);
        });
    });
}