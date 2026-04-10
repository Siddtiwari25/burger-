// Add JavaScript code here
console.clear();
const links = document.querySelectorAll('a');
const menuIcon = document.querySelector('.menu-icon');
const mainNav = document.querySelector('.main-nav');
const mainContainer = document.querySelector('.container');
const smiley = document.querySelector('.smiley');
const banners = document.querySelectorAll('.banner');
const tradition = document.querySelector('.tradition');
const burgers = document.querySelector('.burgers');
const section = document.querySelectorAll('section');


// Override links behaviour
const overrideLinksBehaviour = () => {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
};

/* Hamburger menu toggle */
menuIcon.addEventListener('click', () => {
    mainNav.classList.toggle('nav--active');
    if (mainNav.classList.contains('nav--active')) {
        menuIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;
        smiley.removeAttribute('style');
        mainNav.removeAttribute('style');
        smiley.classList.add('smiley--active');
    } else {
        menuIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>`;
        smiley.classList.remove('smiley--active');
        setTimeout(() => {
            smiley.style.transition = 'none';
            mainNav.style.transition = 'none';
        }, 800)
    }
});


// This:
const avoidingNavToShowUpForAnInstantWhenResizingWeAllKnowHowAnnoyingIsThat = () => {

    if (window.matchMedia("(max-width:40rem)").matches) {
        smiley.style.transition = 'none';
        mainNav.style.transition = 'none';
    } else {
        mainNav.classList.remove('nav--active');
        smiley.classList.remove('smiley--active');
        smiley.removeAttribute('style');
        mainNav.removeAttribute('style');
    }
}

window.addEventListener('resize', avoidingNavToShowUpForAnInstantWhenResizingWeAllKnowHowAnnoyingIsThat);



// Fill banner with same text over and over
const renderBannerText = () => {
    banners.forEach(banner => {
        for (let i = 0; i < 50; i++) {
            const newSpan = document.createElement('span');
            newSpan.innerHTML = 'LIFE IS TO SHORT TO EAT JUST SALADS&nbsp;&nbsp;✴️&nbsp;&nbsp;';
            banner.insertAdjacentElement('beforeend', newSpan)
        }
    });
}


// Scroll to Section passed as paremeter
const scrollToSection = (id) => {
    section[id].scrollIntoView(!0);
}

// Menu navigation
const navigation = () => {
    document.querySelectorAll('.main-nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            scrollToSection(+e.currentTarget.dataset.id);
        })
    })
}


// Animate marquees on scroll, obvious
const animateMarqueeOnScroll = () => {
    const traditionSection = document.querySelector('.tradition');
    const bannerSpans = document.querySelectorAll('.banner > span');
    window.addEventListener('scroll', () => {
        let top = window.scrollY;
        let offsetTopSection = traditionSection.offsetTop;
        let offsetHeightSection = traditionSection.offsetHeight;

        if (top >= offsetTopSection && top <= offsetTopSection + offsetHeightSection) {
            bannerSpans.forEach(span => {
                if (span.parentNode.classList.contains('banner-1')) {
                    span.style.left = (top - offsetTopSection) + 'px';
                } else {
                    span.style.left = (-(top - offsetTopSection)) + 'px';
                }
            });
        }
    })
}


window.addEventListener('DOMContentLoaded', (e) => {
    overrideLinksBehaviour();
    navigation();
    renderBannerText();
    animateMarqueeOnScroll();
    // Scroll to section from today sub
    setTimeout(() => {
        burgers.scrollIntoView(!0);
    }, 1500);
});