$(document).ready(function () {
  $(".list-discuss-list").each(function (index, e) {
    $(this).on("click", function () {
      const baseUrl = window.location.origin;
      console.log(baseUrl);
      location.href = "./assets/suv-html/discuss.html";
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

  $(".search-input-js")
    .focusin(function () {
      $(this).addClass("border-bottom-active");
    })
    .focusout(function () {
      $(this).removeClass("border-bottom-active");
    });

  $("input[type='date']").attr("max", new Date().toISOString().slice(0, 10));
  $("input[type='date']").attr("min", "1940-01-01");

  // admin page
  $("#logout-js").on("click", function () {
    const newURL = window.location.href.slice(
      0,
      window.location.href.length - 10
    );
    location.href = newURL + "login.html";
  });

  $(".nav-admin-js").each(function (index, e) {
    $(this).on("click", function () {
      $(".nav-admin-js.nav-active").removeClass("nav-active");
      $(this).addClass("nav-active");
    });
  });

  $(".eye-icon-js").each(function (index, e) {
    $(this).on("click", function () {
      $(this).toggleClass("fa-eye");
      $(".pass-js").eq(index).attr("type") == "password"
        ? $(".pass-js").eq(index).attr("type", "text")
        : $(".pass-js").eq(index).attr("type", "password");
    });
  });

  // log-out
  $(".logout-js").each(function (index, e) {
    $(this).on("click", function () {
      location.href = "/login.html";
    });
  });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const boxChat = document.getElementById("box-chat-js");

scrollToBottom = () => {
  boxChat.scrollTo(0, boxChat.scrollHeight);
};
//  message = '<div class="message">ADDED MESSAGE Lorem ipsum dolor sit amet</div>';
document.getElementById("message-js")?.addEventListener("input", function (e) {
  e.target.value
    ? (document.getElementById("send-js").style.display = "block")
    : (document.getElementById("send-js").style.display = "none");
});
document.getElementById("send-js")?.addEventListener("click", () => {
  sendMessage();
});
document
  .getElementById("message-js")
  ?.addEventListener("keydown", function (e) {
    if (e.target.value && event.keyCode === 13) sendMessage();
  });

const sendMessage = () => {
  const message = `
    <div class="items-chat">
      <div class="divider d-flex align-items-center gap-2">
        <div class="line bg-dark opacity-25 mt-3 mb-2"></div>
        <div class="mt-1" style="white-space: nowrap;">
          Hôm nay
        </div>
        <div class="line bg-dark opacity-25 mt-3 mb-2"></div>
      </div>
      <div class="d-flex align-items-start p-2 item-chat">
        <div class="circle bg-warning-subtle text-warning rounded-circle me-2">
          A
        </div>
        <div>
          <div>
            <span class="fw-bold">Ngô Mạnh Anh</span>
            <span class="text-body-tertiary fs-12"> 20:56</span>
          </div>
          <div class="border-start border-2 border-info ps-1">
            ${document.getElementById("message-js").value}
          </div>
        </div>
      </div>
    </div>
  `;
  boxChat.insertAdjacentHTML("afterbegin", message);
  scrollToBottom();
  document.getElementById("send-js").style.display = "none";
  document.getElementById("message-js").value = "";
};


//
function chooseFile (fileInput) {
  if(fileInput.files && fileInput.files[0]){
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("image-preview").src = e.target.result;
    }
    reader.readAsDataURL(fileInput.files[0]); // convert to base64 string
  }
}
