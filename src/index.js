$(document).ready(function () {
   function toggleMenuAttr() {
      $('body').toggleClass('overflow-hidden');
      $('#navbar').toggleClass('active');
      $('#button-menu').toggleClass('opened');
   }

   $('#button-menu').click(function () {
      toggleMenuAttr();
   });

   $('#navbar li button').each((_, item) => {
      $(item).click(() => {
         toggleMenuAttr();
      });
   });

   $('#navbar li button').on('click', function (e) {
      $('main > section').removeClass('active');
      $(`${$(this).attr('name')}`).addClass('active')
   })
});


document.addEventListener('DOMContentLoaded', function () {
   // ==================== || Page scroll management
   const sections = document.querySelectorAll('.part');

   let currentSectionIndex = 0;
   let touchStartY = 0;
   let touchEndY = 0;

   function scrollToSection(index) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
   }

   document.addEventListener('wheel', function (event) {
      if (event.deltaY > 0) {
         if (++currentSectionIndex >= sections.length)
            currentSectionIndex = sections.length - 1;
      } else {
         if (--currentSectionIndex < 0)
            currentSectionIndex = 0;
      }

      scrollToSection(currentSectionIndex);
   });

   document.addEventListener('touchstart', function (event) {
      touchStartY = event.changedTouches[0].screenY;
   }, false);

   document.addEventListener('touchmove', function (event) {
      touchEndY = event.changedTouches[0].screenY;
   }, false);

   document.addEventListener('touchend', function () {
      if (touchStartY > touchEndY) {
         if (++currentSectionIndex >= sections.length)
            currentSectionIndex = sections.length - 1;
      } else {
         if (--currentSectionIndex < 0)
            currentSectionIndex = 0;
      }

      scrollToSection(currentSectionIndex);
   }, false);

   // ==================== || Menu
   // document.getElementById("toggleMenu").addEventListener("click", function () {
   //    document.body.classList.toggle("overflow-hidden");
   //    document.body.classList.toggle("active");

   //    document.getElementById("menu").classList.toggle("-translate-x-[calc(100%_+_1rem)]");
   //    document.querySelector("main").classList.toggle("overflow-hidden");
      
   //    this.classList.toggle("opened");
   // });
   // =======================================================================================
   function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
         rect.top >= 0 &&
         rect.left >= 0 &&
         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
   }

   function checkTimelineItems() {
      const items = document.querySelectorAll('.timeline-item');
      items.forEach((item) => {
         if (isElementInViewport(item)) {
            item.classList.add('show');
         }
      });
   }

   window.addEventListener('scroll', checkTimelineItems);

   checkTimelineItems();
});