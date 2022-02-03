const burgerMenuWrapper = document.getElementById('burger_menu_wrapper');
const burgerMenu = document.getElementById('burger_menu');
const menu = document.getElementById('menu');
var links = [document.getElementById('link-1'),document.getElementById('link-2'),document.getElementById('link-3'),document.getElementById('link-4')];

let projectTitlesMobile = [...document.querySelectorAll('.project-title-mobile')];
let projectTitles = [...document.querySelectorAll('.project-title')];
let learnMoresMobile = [...document.querySelectorAll('.learn-more-mobile')];
let learnMores = [...document.querySelectorAll('.learn-more')];
let itemsMobile = [...document.querySelectorAll('.item-mobile')];
let items = [...document.querySelectorAll('.item')];
let imagesMobile = [...document.querySelectorAll('.img-mobile')];
let images = [...document.querySelectorAll('.img')];
let slider = document.querySelector('.slider');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;

let menuOpen = false;

if(burgerMenu) {
    burgerMenuWrapper.addEventListener('click', () => {
        if(!menuOpen) {
            menuOpen = true;
            burgerMenuWrapper.classList.add('disabled');
            burgerMenu.classList.add('open');
            items.forEach(item => {
                item.style.opacity = '1';
                item.classList.remove('fade-in');
                item.classList.add('fade-out');
            });
            itemsMobile.forEach(itemMobile => {
                itemMobile.style.opacity = '1';
                itemMobile.classList.remove('fade-in');
                itemMobile.classList.add('fade-out');
            });
            setTimeout( function () {
                menu.style.display = 'flex';
                links.forEach(link => {
                    link.classList.add('slide-in', 'not-active');
                    link.classList.remove('slide-out', 'active');
                });
            },1500);
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
            });
            setTimeout( function () {
                menu.style.display = 'none';
                items.forEach(item => {
                    item.style.opacity = '0';
                    item.classList.add('fade-in');
                    item.classList.remove('fade-out');
                });
                itemsMobile.forEach(itemMobile => {
                    itemMobile.style.opacity = '0';
                    itemMobile.classList.add('fade-in');
                    itemMobile.classList.remove('fade-out');
                });
            },1500);
            setTimeout( function () {
                burgerMenuWrapper.classList.remove('disabled');
            },2500);
        }
    });
}

// Slider 

imagesMobile.forEach((imgM, idx) => {
    imgM.style.backgroundImage = `url(../images/work/${idx+1}.jpg)`;
});

if (window.screen.width > 1000) {
    window.addEventListener('resize', init);

    images.forEach((img, idx) => {
        img.style.backgroundImage = `url(../images/work/${idx+1}.jpg)`;
    });

    function lerp(start, end, t) {
        return start * (1-t) + end * t;
    }

    function setTransform(el, transform) {
        el.style.transform = transform;
    }

    function init() {
        sliderWidth = slider.getBoundingClientRect().width;
        imageWidth = sliderWidth / images.length;
        document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
    }

    function animate() {
        current = parseFloat(lerp(current, target, ease)).toFixed(2);
        target = window.scrollY;
        setTransform(slider, `translateX(-${current}px)`);
        animateImages();
        requestAnimationFrame(animate);
    }

    function animateImages() {
        let ratio = current / imageWidth;
        let intersectionRatioValue;

        images.forEach((image, idx) => {
            intersectionRatioValue = ratio - (idx * 0.7);
            setTransform(image, `translateX(${intersectionRatioValue * 70}px)`)
        });
    }

    init();
    animate();
}

// Project selection

itemsMobile.forEach((itemMobile, index) => {
    itemMobile.addEventListener('mouseover', () => {
        projectTitlesMobile[index].classList.add('text-fade-mobile');
        learnMoresMobile[index].classList.add('text-fade-mobile');
        imagesMobile[index].classList.remove('not-active-brightness-mobile');
        imagesMobile[index].classList.add('active-brightness-mobile');
    });
});

itemsMobile.forEach((itemMobile, index) => {
    itemMobile.addEventListener('mouseout', () => {
        projectTitlesMobile[index].classList.remove('text-fade-mobile');
        learnMoresMobile[index].classList.remove('text-fade-mobile');
        imagesMobile[index].classList.add('not-active-brightness-mobile');
        imagesMobile[index].classList.remove('active-brightness-mobile');
    });
});

items.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        projectTitles[index].classList.add('text-fade');
        learnMores[index].classList.add('text-fade');
        images[index].classList.remove('not-active-brightness');
        images[index].classList.add('active-brightness');
    });
});

items.forEach((item, index) => {
    item.addEventListener('mouseout', () => {
        projectTitles[index].classList.remove('text-fade');
        learnMores[index].classList.remove('text-fade');
        images[index].classList.add('not-active-brightness');
        images[index].classList.remove('active-brightness');
    });
});

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