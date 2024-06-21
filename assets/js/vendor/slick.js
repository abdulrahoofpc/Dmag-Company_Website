jQuery(document).ready(function ($) {
    let mediaWidth = $("[media-block]").outerWidth();
    let sidebarWidth = $("[sidebar-block]").outerWidth();
    let mediaLength = $("[media-width]").length;
    let mediaMain = mediaWidth * mediaLength;
    let sidebarMain = sidebarWidth * mediaLength;
    $("[media-width]").css("width", mediaWidth + "px");
    $("[sidebar-width]").css("width", sidebarWidth + "px");
    $("[media-block]").css("width", mediaMain + "px");
    $("[sidebar-block]").css("width", sidebarMain + "px");
    let count = 0;
    let active = 1;
    $("[button-logo]").on("click", function () {
      let current = $(this).attr("sldr-data");
      let currentCount = current.charAt(current.length - 1);
      active = parseInt(currentCount);
      count = parseInt(currentCount) - 1;
      productSlide(count, active);
    });
    function productSlide(count, active) {
      $("[media-block]").css(
        "transform",
        "translateX(-" + mediaWidth * count + "px)"
      );
      $("[sidebar-block]").css(
        "transform",
        "translateX(-" + sidebarWidth * count + "px)"
      );
      $("[sldr-data]").removeClass("active");
      $('[sldr-data="slide__' + active + '"]').addClass("active");
    }
    setInterval(function () {
      if (count > mediaLength - 2) {
        count = 0;
        active = 1;
      } else {
        count++;
        active++;
      }
      productSlide(count, active);
    }, 6000);
  });
  