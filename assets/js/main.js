/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    //     reset: true
    });

    sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{});
    sr.reveal('.home__img, .about__subtitle, .about__text, .about__education, .skills__img',{delay: 400});
    sr.reveal('.home__social-icon',{ interval: 200});
    sr.reveal('.skills__data, .work__card, .contact__info, .contact__input',{interval: 200});
    sr.reveal('.section-title',{});
    sr.reveal('.footer__container > div',{interval: 150});
}

/*===== HERO TYPING ANIMATION =====*/
const typingEl = document.getElementById('typing-animation')
const typingRoles = ['Web Developer']

function typeWord(word, i = 0) {
    if (i <= word.length) {
        typingEl.textContent = word.slice(0, i)
        setTimeout(() => typeWord(word, i + 1), 120)
    } else {
        setTimeout(() => eraseWord(word), 1200)
    }
}

function eraseWord(word, i = word.length) {
    if (i >= 0) {
        typingEl.textContent = word.slice(0, i)
        setTimeout(() => eraseWord(word, i - 1), 60)
    } else {
        const next = typingRoles[(typingRoles.indexOf(word) + 1) % typingRoles.length]
        setTimeout(() => typeWord(next), 300)
    }
}

if (typingEl) {
    typeWord(typingRoles[0])
}

/*===== HERO PARALLAX ON SCROLL =====*/
const heroImg = document.querySelector('.home .right')

function parallaxHero() {
    if (!heroImg) return
    const offset = window.scrollY
    if (offset < window.innerHeight) {
        heroImg.style.transform = `translateY(${offset * 0.15}px)`
    }
}
window.addEventListener('scroll', parallaxHero)

