const burgerMenuWrapper = document.getElementById('burger_menu_wrapper');
const burgerMenu = document.getElementById('burger_menu');
const menu = document.getElementById('menu');
var texts = [...document.querySelectorAll('#text-1')];
var links = [document.getElementById('link-1'),document.getElementById('link-2'),document.getElementById('link-3'),document.getElementById('link-4')];

let menuOpen = false;

if(burgerMenu) {
    burgerMenuWrapper.addEventListener('click', () => {
        if(!menuOpen) {
            menuOpen = true;
            burgerMenuWrapper.classList.add('disabled');
            burgerMenu.classList.add('open');
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
    
            console.log(transition_el);
    
            transition_el.classList.add('page-transition-active');
    
            console.log(transition_el);
    
            setInterval(() => {
                window.location.href = target;
            }, 800);
        });
    });
}