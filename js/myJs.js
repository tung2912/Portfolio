const hamburger = document.querySelector('.header .header__nav-bar .header__nav-list .hamburger');
const mobile_menu = document.querySelector('.header .header__nav-bar .header__nav-list ul');
const menu_item = document.querySelectorAll('.header .header__nav-bar .header__nav-list ul li a');
const header = document.querySelector('.header.container')

console.log(hamburger)

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

ScrollReveal().reveal('.services__item',{
    distance: '50px',origin: "top" ,duration: 600, easing: 'ease-in-out', delay: 200 , interval: 300 , reset : true
});

ScrollReveal().reveal('.section__title', {
    distance: '100px', origin: "top", easing: 'ease-in-out', duration: 600, delay: 100, interval: 300, reset : true
});

ScrollReveal().reveal('.about__col-left', {
    distance: '100px', origin: "left", easing: 'ease-in-out',  duration: 600, delay: 200, interval: 300, reset : true
});
ScrollReveal().reveal('.about__col-right', {
    distance: '100px', origin: "right",easing: 'ease-in-out', duration: 600, delay: 400, interval: 300, reset : true
});

ScrollReveal().reveal('.timeline_item', {
    distance: '200px', origin: "left", easing: 'ease-in-out', duration: 600, delay: 200, interval: 300, reset : true
});

ScrollReveal().reveal('.projects__item', {
    distance: '200px', origin: "left", easing: 'ease-in-out', duration: 600, delay: 200, interval: 300, reset : true
});

ScrollReveal().reveal('.contact__item', {
    distance: '200px', origin: "bottom", easing: 'ease-in-out', duration: 600, delay: 200, interval: 300, reset : true
});

// PDF generated area 
let areaCv = document.getElementById('area-cv')
let resumeButton = document.getElementById('resume-button')
// Html2pdf options
let opt = {
    margin:       0,
    filename:     'myResume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' }
  };
// function to call areaCv and html2Pdf options
    function generateResume() {
        html2pdf(areaCv, opt)
    }

    //  when the button is clicked, it executes the 3 functions
resumeButton.addEventListener('click', () => {
    //1. the class .scale-cv is added to the body, where it reduces the size
    scaleCv()
    // 2. the PDF is generated
    generateResume()
    // 3. the .scale-cv class is removed from the body after 4s to return normal size
    setTimeout(removeScale, 4000)
})


