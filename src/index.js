$(document).ready(function () {
   // =========================== MENU
   function toggleMenuAttr() {
      $("body").toggleClass("overflow-hidden");
      $("#navbar").toggleClass("active");
      $("#button-menu").toggleClass("opened");
   }

   $("#button-menu").click(function () {
      toggleMenuAttr();
   });
   // ==================================

   $("#navigation button").click(function () {
      // Remove "active" class from all parent elements
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
