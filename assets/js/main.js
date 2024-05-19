/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        // if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        //     document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        // }else{
        //     document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        // }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


function homees(){
    // alert("hee")
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contactme").style.display = "none";
    // document.getElementById("nav1").style.color = "red";
}
function Abouts(){
    // alert("hee")
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("skills").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contactme").style.display = "none";
}
function Skillss(){
    // alert("hee")
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contactme").style.display = "none";
}
function Portfolios(){
    // alert("hee")
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("contactme").style.display = "none";
}
function Contactmes(){
    // alert("hee")
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("portfolio").style.display = "none";
    document.getElementById("contactme").style.display = "block";
}