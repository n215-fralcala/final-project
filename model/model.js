export function changePage(pageID) {
  if (pageID != "" && pageID != "home") {
    $.get(`pages/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      $("nav a").removeClass("whiteText");
      $("nav a").addClass("blackText");
      $("nav").removeClass("whiteLine");
      $("nav").addClass("blackLine");
      $(".logo img").attr("src", "../images/logo-black.svg");
    });
  } else {
    $.get(`pages/home.html`, function (data) {
      console.log("data " + data);
      $("#app").html(data);
      $("nav a").removeClass("blackText");
      $("nav a").addClass("whiteText");
      $("nav").removeClass("blackLine");
      $("nav").addClass("whiteLine");
      $(".logo img").attr("src", "../images/logo-white.svg");
    });
  }
}
