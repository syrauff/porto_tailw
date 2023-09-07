//navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden')
})

document.addEventListener("DOMContentLoaded", function() {
    var fadeInUpElements = document.querySelectorAll(".achiv");
  
    function checkFadeInUp() {
      fadeInUpElements.forEach(function(element) {
        var elementTop = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
  
        if (elementTop < windowHeight) {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }
        else if(elementTop > windowHeight) {
            element.style.opacity = "0";
          element.style.transform = "translateY(20px)";
        }
      });
    }
  
    // Tambahkan event listener untuk memeriksa saat pengguna menggulir halaman
    window.addEventListener("scroll", checkFadeInUp);
  
    // Panggil fungsi untuk memeriksa elemen yang sudah terlihat saat halaman dimuat
    checkFadeInUp();
  });