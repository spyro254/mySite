$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
      $(".my-name").addClass("test");
    } else {
      $(".my-name").removeClass("test");
    }
  });
});
