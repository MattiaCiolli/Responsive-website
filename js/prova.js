$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() < $("#p1id").height() && $(document).width() > 768 ) { 
      $("#ph").attr("src","img/phone1.png");
      $(".p1").css("color", "black"); 
      $(".p2").css("color", "lightgray");
      $(".p3").css("color", "lightgray");
    } 
    if ($(document).scrollTop() > $("#p1id").height() && $(document).width() > 768) { 
      $("#ph").attr("src","img/phone2.png");
      $(".p1").css("color", "lightgray"); 
      $(".p2").css("color", "black");
      $(".p3").css("color", "lightgray"); 
    }
    if ($(document).scrollTop() > $("#p1id").height()+$("#p2id").height()-10 && $(document).width() > 768) { 
      $("#ph").attr("src","img/phone3.png");
      $(".p1").css("color", "lightgray"); 
      $(".p2").css("color", "lightgray");
      $(".p3").css("color", "black"); 
    } 
    if ($(document).width() < 768) {
      $(".p1").css("color", "black");
      $(".p2").css("color", "black");
      $(".p3").css("color", "black"); 
    }
  });
});

/**
$(document).ready(function(){
  $(window).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 10) { // check if user scrolled more than 50 from top of the browser window
      $(".navbar-fixed-top").css("background-color", "#f8f8f8"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
    }
  });
});


$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() < 75) { 
      $("#ph").attr("src","img/phone1.png");
      $(".p1").css("color", "black"); 
      $(".p2").css("color", "lightgray");
      $(".p3").css("color", "lightgray");
    } 
    if ($(document).scrollTop() > 75) { 
      $("#ph").attr("src","img/phone2.png");
      $(".p1").css("color", "lightgray"); 
      $(".p2").css("color", "black");
      $(".p3").css("color", "lightgray"); 
    }
    if ($(document).scrollTop() > 200) { 
      $("#ph").attr("src","img/phone3.png");
      $(".p1").css("color", "lightgray"); 
      $(".p2").css("color", "lightgray");
      $(".p3").css("color", "black"); 
    } 
  });
});


*/

