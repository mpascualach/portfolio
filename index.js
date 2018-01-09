var i = 0;

$(document).ready(function(){
  $(document).on("keydown",function(e){
    var key = e.charCode || e.keyCode;
    if(key == 39 || key == 37 )
        e.preventDefault();
  });
  $("#start-btn").click(function(){
    $("#start-btn").hide();
    $("#bubble").fadeIn();
    i++;
    $("#about").addClass("marker" + i);
  });
  $("#about-btn").click(function(){
    if( $("#bubble").css('display') == 'none') {
      $("#bubble").fadeIn();
    }
    $("#start-btn").hide();
    $("#about").fadeIn();
    if (i > 0){
      $("marker" + i).fadeOut();
    }
    i++;
    $("#about").addClass("marker" + i);
  });
  $("#projects-btn").click(function(){
    if ( $("#bubble").css('display') == 'none') $("#bubble").fadeIn();
    if (i > 0) $("marker" + i).fadeOut();
    i++;
    $("#projects").fadeIn().addClass("marker"+i);
  });
});
