import $ from "jquery";

export default function Accordion() {
    let lists = $(".footer-links-wrapper h3");

    function menu(width) {
      if (width <= 768) {
        lists.off("click").on("click", function () {
          $(this).next("ul").slideToggle();
          $(this).toggleClass("iconRotator");
        });
      } else {
        lists.off("click").removeClass("iconRotator");
        $("ul").removeAttr("style"); // menus reset
      }
    }

    menu($(window).width());

    $(window).on("resize", function () {
      menu($(this).width());
    });

    return () => {
      $(window).off("resize");
      lists.off("click");
    };

}
