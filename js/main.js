//? Navigation bar ?//**

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0)

})


//? Services Section Modal ?//

const serviceModals = document.querySelectorAll('.service-modal');
const learnMoreBtn = document.querySelectorAll('.learn-more-btn');
const modalCloseBtn = document.querySelectorAll('.modal-close-btn');
const body = document.querySelector('body')


let modal = (modalClick) => {
    serviceModals[modalClick].classList.add("active");

}


learnMoreBtn.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i)
    })
})


modalCloseBtn.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModals.forEach((modalClose) => {
            modalClose.classList.remove("active");
        })
    })
})


body.addEventListener("keyup", (e) => {

    if (e.keyCode === 27) {
        serviceModals.forEach((modalClose) => {
            modalClose.classList.remove("active");
        })

    }

})


//? Portfolio Section Modal ?//
const portfolioModals = document.querySelectorAll('.portfolio-modal');
const imgCards = document.querySelectorAll('.img-card');
const portfiloCloseBtn = document.querySelectorAll('.portfolio-close-btn');


let poetfoliomodal = (modalClick) => {
    portfolioModals[modalClick].classList.add("active");

}


imgCards.forEach((imgCards, i) => {
    imgCards.addEventListener("click", () => {
        poetfoliomodal(i)
    })
})


portfiloCloseBtn.forEach((portfiloCloseBtn) => {
    portfiloCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfoliomodalClose) => {
            portfoliomodalClose.classList.remove("active");
        })
    })
})

body.addEventListener("keyup", (e) => {

    if (e.keyCode === 27) {
        portfolioModals.forEach((portfoliomodalClose) => {
            portfoliomodalClose.classList.remove("active");
        })

    }

})



//? Our clients - Swiper ?//**

let swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//? scrollToTop-btn ?//

const scrollToTopBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', () => {
    scrollToTopBtn.classList.toggle('active', window.scrollY > 500)
})


scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//? Light/Dark Theme ?//

const themeBtn = document.querySelector('.them-btn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeBtn.classList.toggle('sun');

    localStorage.setItem('seved-theme', getCurrentTheme());
    localStorage.setItem('seved-icon', getCurrentTheme());
});

const getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains('sun') ? 'sun' : 'moon';

const sevedTheme = localStorage.getItem('seved-theme');
const sevedIcon = localStorage.getItem('seved-icon');

if (sevedTheme) {
    document.body.classList[sevedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
    themeBtn.classList[sevedIcon === 'sun' ? 'add' : 'remove']('sun')
}



const navListMenue = document.querySelectorAll('.nav-items li a');
const section = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    section.forEach(section => {
        let sectionTop = section.offsetTop;

        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    })

    navListMenue.forEach(li => {
        li.classList.remove('active');
        document.querySelector('.nav-items li a[href*= ' + current + ']').classList.add('active');
    })
})



//? Menu Btn ?//

const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelectorAll('.nav-items a');


menuBtn.addEventListener('click', () => {
    navigation.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    navigation.classList.remove('active');
});

navItems.forEach((navItems) => {
    navItems.addEventListener('click', () => {
        navigation.classList.remove('active');

    })
})


//?Loading ?//

let loader = document.querySelector('.loadingio-eclipse');

window.addEventListener('load', () => {

    loader.classList.add('loafer-hidden')
})



ScrollReveal({

    // reset: true,
    distance: '60px',
    duration: 2500,
    dalay: 100

});

ScrollReveal().reveal('.home .info .btn', { dalay: 700, origin: 'bottom' });
ScrollReveal().reveal('.home .info h2, .section-title-01, .section-title-02', { dalay: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { dalay: 600, origin: 'right' });
ScrollReveal().reveal('.media-icons i, .contact-left li', { dalay: 400, origin: 'left', interval: 200 });
ScrollReveal().reveal('.home-img, .about-img', { dalay: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description, .contact-right', { dalay: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional-list li', { dalay: 500, origin: 'right', interval: 200 });
ScrollReveal().reveal('.skills-description, .services-description, .content-card, .client-swiper, .contact-left h2', { dalay: 700, origin: 'left' });
ScrollReveal().reveal('.experience-card, .service-card, .education, .Portfolio .img-card', { dalay: 800, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.footer .group', { dalay: 500, origin: 'top', interval: 200 });




