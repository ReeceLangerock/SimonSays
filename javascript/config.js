var simonGameState = (function() {
  var order = []; // array to hold 20 light colors
  var userClickOrder = []; // array of correct user color clicks
  var lightsNeededCounter = 1; // counter for number or lights that must be correctly remembered
  var currentClickCounter = 0; // counter for how many lights user has correctly clicked
  var userTurn = false;
  var isStrict = false;
  var activeGame = false;


  return {
    getOrder : function(){
      return order;
    },

    setActiveGame: function(boolValue){
      activeGame = boolValue;
    },

    getActiveGame: function(){
      return activeGame;
    },

    getUserClickOrder : function(){
      return userClickOrder;
    },

    getIsStrict: function(){
      return isStrict;
    },

    changeIsStrict: function(){
      if(isStrict){
        isStrict = false;
        $("#strict").html("STRICT = " +isStrict);
      }
      else {
        isStrict = true;
        $("#strict").html("STRICT = " +isStrict);
      }
    },

    getLightsNeededCounter : function(){
      return lightsNeededCounter;
    },

    getCurrentClickCounter: function(){
      return currentClickCounter;
    },

    getUserTurn: function(){
      return userTurn;
    },

    setUserTurn: function(trueOrFalse){
      userTurn = trueOrFalse;
    },

    addCurrentClickCounter: function(){
      currentClickCounter++;
    },

    resetCurrentClickCounter: function(){
      currentClickCounter = 0;
    },

    addLightsNeeded: function(){
      lightsNeededCounter++;
    },

    addUserClick: function(clickedColor){
      userClickOrder.push(clickedColor);
    },

    resetGame: function(){
      lightsNeededCounter = 1;
      currentClickCounter = 0;
      order = [];
      userClickOrder = [];
    },

    setOrder: function(newOrder){
      order = newOrder;
    }

  };

})();
