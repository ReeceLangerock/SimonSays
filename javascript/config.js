var simonGameState = (function() {
  var order = []; // array to hold 20 light colors
  var numLights = 0; // counter for number or lights correctly remembered


  return {
    getOrder : function(){
      return order;
    },

    getNumLights : function(){
      return numLights;
    },

    correctPush: function(){
      numLights++;
    },

    resetGame: function(){
      numLights = 0;
    },

    setOrder: function(newOrder){
      console.log("Setting order");
      order = newOrder;
    }

  };

})();
