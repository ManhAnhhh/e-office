$(document).ready(function () {


  $(".list-discuss-list").each(function (index, e) {
    $(this).on("click", function () {
      const baseUrl = window.location.origin;
      location.href = baseUrl + `/assets/suv-html/discuss.html`;
    })
  })

  const navList = $(".list-js");
  const title = $(".title-js");
  navList.each(function (index, e) {
    $(this).on("click", function () {
      title.text($(this).text());
    })
  })
});
