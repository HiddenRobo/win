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

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-Illuminating", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-Illuminating";
  }

  function lottry(){
    document.getElementById("lottry").style.display = "block"
    // alert("lottry")
  }

  function Coming(){
    document.getElementById("home").style.display="none"
    document.getElementById("soon").style.display="block"
    // alert("heee")
  }

  function cut(){
    document.getElementById("home").style.display="block"
    document.getElementById("soon").style.display="none"
  }
