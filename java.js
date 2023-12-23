const header = document.queryselector("header");

window.addEventListener ("scroll", function(){
	header.classlist.toggle("sticky".window.scrolly > 0);
}
)

let menu = document.queryselector('#menu-icon');
let navmenu = document.queryselector('.navmenu');

menu.onclick = () => {
	menu.classlist.toggle('bx-x');
	navmenu.classlist.toggle('open');
}
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      grabCursor:true,
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