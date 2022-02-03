const burgerMenuWrapper = document.getElementById('burger_menu_wrapper');
const burgerMenu = document.getElementById('burger_menu');
const menu = document.getElementById('menu');
var texts = [...document.querySelectorAll('.slide-in')];
var links = [document.getElementById('link-1'),document.getElementById('link-2'),document.getElementById('link-3'),document.getElementById('link-4')];
const fade = document.querySelector('.fade-in');


let menuOpen = false;

if(burgerMenu) {
    burgerMenuWrapper.addEventListener('click', () => {
        if(!menuOpen) {
            menuOpen = true;
            burgerMenuWrapper.classList.add('disabled');
            burgerMenu.classList.add('open');
            document.getElementById('status').classList.add('status-out');
            document.getElementById('status-blue').classList.add('status-blue-out');
            fade.classList.add('fade-out');
            fade.classList.remove('fade-in');
            texts.forEach(text => {
                text.classList.add('slide-out');
                text.classList.remove('slide-in');
                setTimeout( function () {
                    menu.style.display = 'flex';
                    links.forEach(link => {
                        link.classList.add('slide-in', 'not-active');
                        link.classList.remove('slide-out', 'active');
                    });
                },1500);
            })
            setTimeout( function () {
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
                setTimeout( function () {
                    texts.forEach(text => {
                        menu.style.display = 'none';
                        document.querySelector('.status').classList.remove('status-out');
                        document.querySelector('.status-blue').classList.remove('status-blue-out');
                        fade.classList.remove('fade-out');
                        fade.classList.add('fade-in');
                        text.classList.add('slide-in');
                        text.classList.remove('slide-out');
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
    const transition_el = document.querySelector('.page-transition');
  
    setTimeout(() => {
      transition_el.classList.remove('page-transition-active');
    }, 800);
  
    anchors.forEach((anchor) => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = anchor.href;
            transition_el.classList.add('page-transition-active');
            setInterval(() => {
                window.location.href = target;
            }, 800);
        });
    });
}

document.querySelector('.mail-line').addEventListener('mouseover', () => {
    document.querySelector('.status').classList.add('status-hover');
});

document.querySelector('.mail-line').addEventListener('mouseout', () => {
    document.querySelector('.status').classList.remove('status-hover');
});

document.querySelector('.resume-line').addEventListener('mouseover', () => {
    document.querySelector('.status-blue').classList.add('status-blue-hover');
});

document.querySelector('.resume-line').addEventListener('mouseout', () => {
    document.querySelector('.status-blue').classList.remove('status-blue-hover');
});

function sendMail() {
    window.location.href = 'mailto: slavapankov20@gmail.com';
}