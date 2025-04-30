$(document).ready(function () {
   // === MENU TOGGLE ===
   function toggleMenuAttr() {
      $("body").toggleClass("overflow-hidden");
      $("#navigation").toggleClass("active");
      $("#button-menu").toggleClass("opened");
   }

   $("#button-menu").click(function () {
      toggleMenuAttr();
   });

   $("#navigation ul button").click(function () {
      toggleMenuAttr();
   });

   $("#navigation button").click(function () {
      const sectionName = $(this).attr("name");

      $("#navigation button").parent().removeClass("active");
      $(this).parent().addClass("active");

      $("main > section").each(function () {
         const $section = $(this);
         const sectionId = $section.attr("id");

         if (sectionId === "hero") return;

         const isCurrent = sectionId === sectionName;

         $section.toggleClass("animation-from-right", isCurrent);
         $section.toggleClass("hidden", !isCurrent);

         const isGoingLeft = $section.hasClass("animation-from-right") && !isCurrent;
         $section.toggleClass("animation-going-left", isGoingLeft);
      });
   });
});
