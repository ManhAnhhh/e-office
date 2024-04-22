$(".sidebar-group").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(".sidebar-group.active").removeClass("active");
  }
);
