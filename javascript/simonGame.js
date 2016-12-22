$(document).ready(function() {
  // initialize config.js variables
  simonGameState.setOrder(generateLightArray());
  // start button
  $("#startButton").click(function(){
    lightUp();
  });
  // start button
  $("#strictButton").click(function(){

  });
  // start button
  $("#restartButton").click(function(){
    simonGameState.setOrder(generateLightArray());
    simonGameState.resetGame();
  });

  $(".pad").click(function(){
    var color = $(this).attr('data-tile');
    console.log(color+ " click");
  });

});


function generateLightArray() {
    var lights = ["blue", "red", "yellow", "green"];
    order = [];

    for (let i = 0; i < 20; i++) {
        var index = Math.floor(Math.random() * 4);
        order.push(lights[index]);
    }
    return order;

};

function checkClick(){

};

function lightUp(){
// need to add code to delay the display of each light
  for(var i =0; i < order.length; i++){
  var color = order[i];
  console.log(color);
  var $tile = $('[data-tile=' + color + ']').css('opacity', '1.0')
  window.setTimeout(function() {
    $tile.css('opacity', '.60')
 }, 300);
}
};
