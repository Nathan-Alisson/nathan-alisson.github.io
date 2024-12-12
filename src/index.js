$(document).ready(function () {
   // =========================== MENU
   function toggleMenuAttr() {
      $("body").toggleClass("overflow-hidden");
      $("#navigation").toggleClass("active");
      $("#button-menu").toggleClass("opened");
   }

   $("#button-menu").click(function () {
      toggleMenuAttr();
   });

   $("#navMenu button").click(function() {
     toggleMenuAttr();
   })
   // ==================================

   $("#navigation button").click(function () {
      $("#navigation button").parent().removeClass("active");

      var name = $(this).attr("name");
      $(this).parent().toggleClass("active");
      $("#navigation").toggleClass("goUp", name !== "home");

      $("main>section").each(function () {
         var $this = $(this);
         var isCurrentSection = $this.attr("id") === name;

         var isGoingLeft =
            $this.hasClass("animation-from-right") && !isCurrentSection;

         $this.toggleClass("animation-from-right", isCurrentSection);
         $this.toggleClass("animation-going-left", isGoingLeft);
      });
   });
});
