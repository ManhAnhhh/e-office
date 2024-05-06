$(document).ready(function () {
  const showScrollbarNav = function () {
    const listGroupHeight = $(".wrapper-list-group-js").innerHeight();
    const headerHeight = $("header").innerHeight();
    const windowHeight = $(window).innerHeight();
    if (windowHeight <= listGroupHeight + headerHeight) {
      $("#list-tab").addClass("overflow-y-scroll");
    } else {
      $("#list-tab").removeClass("overflow-y-scroll");
    }
  };
  showScrollbarNav();

  $(window).resize(function () {
    showScrollbarNav();
  });
  $(".wrapper-list-group-js").on("click",function () {
    showScrollbarNav();
  });
  $(".list-discuss-list").each(function(index, e) {
    $(this).on("click", function() {
      const baseUrl = window.location.origin;
    location.href = baseUrl + `/assets/suv-html/discuss.html`;
    })
  })

  const navList = $(".list-js"); 
  const title = $(".title-js");
  navList.each(function(index, e) {
    $(this).on("click", function() {
      title.text($(this).text());
    })
  })
});
