$(document).ready(function () {
  $(".list-discuss-list").each(function (index, e) {
    $(this).on("click", function () {
      const baseUrl = window.location.origin;
      location.href = baseUrl + `/assets/suv-html/discuss.html`;
    });
  });

  const navList = $(".list-js");
  const title = $(".title-js");
  navList.each(function (index, e) {
    $(this).on("click", function () {
      title.text($(this).text());
    });
  });

  // handle heart icon
  $(".heart-icon-js").each((index, e) => {
    $(e).css({ cursor: "pointer", opacity: "0.6" });
    $(e).on("click", function () {
      $(this).toggleClass("fa-solid heart-icon");
    });
  });


  $('.search-input-js').focusin(  
    function(){  
      $(this).addClass('border-bottom-active');  
    }).focusout(  
    function(){  
      $(this).removeClass('border-bottom-active');  
    });
});
