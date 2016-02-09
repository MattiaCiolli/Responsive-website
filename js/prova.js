$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() < $("#p1id").height() && $(document).width() > 768 ) {
      $("#ph").attr("src","img/appHome.png");
      $(".p1").css("color", "black");
      $(".p2").css("color", "lightgray");
      $(".p3").css("color", "lightgray");
    }
    if ($(document).scrollTop() > $("#p1id").height() && $(document).width() > 768) {
      $("#ph").attr("src","img/appFollowing.png");
      $(".p1").css("color", "lightgray");
      $(".p2").css("color", "black");
      $(".p3").css("color", "lightgray");
    }
    if ($(document).scrollTop() > $("#p1id").height()+$("#p2id").height()-10 && $(document).width() > 768) {
      $("#ph").attr("src","img/appAccordion.png");
      $(".p1").css("color", "lightgray");
      $(".p2").css("color", "lightgray");
      $(".p3").css("color", "black");
    }
    if ($(document).width() < 768) {
      $(".p1").css("color", "black");
      $(".p2").css("color", "black");
      $(".p3").css("color", "black");

      $(".imgResp").css("width", "210px");
    }
  });
});
