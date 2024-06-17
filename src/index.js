document.addEventListener('DOMContentLoaded', function () {
   // ==================== || Page scroll management
   const sections = document.querySelectorAll('.part');

   function scrollToSection(index) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
   }

   let currentSectionIndex = 0;

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

   // ==================== || Menu
   document.getElementById("toggleMenu").addEventListener("click", function () {
      document.body.classList.toggle("overflow-hidden");
      document.body.classList.toggle("active");

      document.getElementById("menu").classList.toggle("-translate-x-[calc(100%_+_1rem)]");
      document.querySelector("main").classList.toggle("overflow-hidden");
      
      this.classList.toggle("opened");
   });
});