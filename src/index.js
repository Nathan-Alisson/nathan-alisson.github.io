document.addEventListener('DOMContentLoaded', function () {
   const sections = document.querySelectorAll('.part');

   function scrollToSection(index) {
      sections[index].scrollIntoView({ behavior: 'smooth' });
   }

   let currentSectionIndex = 0;

   document.addEventListener('wheel', function (event) {
      if (event.deltaY > 0) {
         // Scrolling down
         currentSectionIndex++;
         if (currentSectionIndex >= sections.length) {
            currentSectionIndex = sections.length - 1;
         }
      } else {
         // Scrolling up
         currentSectionIndex--;
         if (currentSectionIndex < 0) {
            currentSectionIndex = 0;
         }
      }

      scrollToSection(currentSectionIndex);
   });
});