
$(document).ready(function(){
  $(document).on("keydown",function(e){
    var key = e.charCode || e.keyCode;
    if(key == 39 || key == 37 )
        e.preventDefault();
  });
  $("#start-btn").click(function(){
    $("#start-btn").hide();
    $("#bubble").show();
    $("#about-box").fadeIn();
  });
  $("#about-btn").click(function(){
    if( $("#bubble").css('display') == 'none') {
      $("#bubble").fadeIn();
      $("#start-btn").hide();
    }
    $("#about-box").fadeIn();
    if ($("#projects-box").css('display') !== 'none'){
      $("#projects-box").fadeOut();
    }
    if ($("#contact-box").css('display') !== 'none'){
      $("#contact-box").fadeOut();
    }
  });
  $("#projects-btn").click(function(){
    if( $("#bubble").css('display') == 'none') {
      $("#bubble").fadeIn();
      $("#start-btn").hide();
    }
    if ($("#about-box").css('display') !== 'none'){
      $("#about-box").fadeOut();
    }
    $("#projects-box").fadeIn();
  });
  $("#contact-btn").click(function(){
    if( $("#bubble").css('display') == 'none') {
      $("#bubble").fadeIn();
      $("#start-btn").hide();
    }
    if ($("#about-box").css('display') !== 'none'){
      $("#about-box").fadeOut();
    }
    if ($("#projects-box").css('display') !== 'none'){
      $("#prokects-box").fadeOut();
    }
    $("#contact-box").fadeIn();
  });
});
