$(document).ready(function() {
    // initialize config.js variables
    simonGameState.setOrder(generateLightArray());
    // start button
    $("#startButton").click(function() {
        animateAll();
        simonGameState.setUserTurn(true);
        simonGameState.setActiveGame(true);
        $("#strictCheckbox").attr("disabled", true);

    });
    // strict button
    $("#strictCheckbox").change(function() {
        if (!simonGameState.getActiveGame()) {
            simonGameState.changeIsStrict();
        }
    });
    // restart button
    $("#restartButton").click(function() {
        restartGame();
    });

    $(".pad").click(function() {
        if (simonGameState.getUserTurn() && simonGameState.getActiveGame()) {
            var color = $(this).attr('data-tile');
            lightUp(color);
            checkClick(color);

        }


    });

});

function restartGame() {
    simonGameState.resetGame();
    simonGameState.setOrder(generateLightArray());
    simonGameState.setActiveGame(false);
    $("#strictCheckbox").removeAttr("disabled");
    $("#counter").html("00");
}

function generateLightArray() {
    var lights = ["blue", "red", "yellow", "green"];
    order = [];

    for (let i = 0; i < 20; i++) {
        var index = Math.floor(Math.random() * 4);
        order.push(lights[index]);
    }
    return order;

};

function checkClick(color) {
    simonGameState.setUserTurn(false);
    var counter = simonGameState.getCurrentClickCounter();
    var order = simonGameState.getOrder();
    console.log(counter);


    if (color == order[counter]) {
        simonGameState.addCurrentClickCounter();
        $("#counter").html(simonGameState.getUserClickOrder().length);

        if (counter == 9) // counter at 9 equals 10 correct
        {
            winner();
            restartGame();

        }

        if (simonGameState.getActiveGame() && simonGameState.getCurrentClickCounter() >= simonGameState.getLightsNeededCounter()) {
            simonGameState.resetCurrentClickCounter();
            simonGameState.addLightsNeeded();
            simonGameState.addUserClick(color);
            $("#counter").html(simonGameState.getUserClickOrder().length);
            setTimeout(function() {
                animateAll();
            }, 500);

        }
    } else {
        playSound("wrong");
        if (simonGameState.getIsStrict()) {
            restartGame();
        } else {
            simonGameState.resetCurrentClickCounter();
            setTimeout(function() {
                animateAll();
            }, 1000);
        }

    }


    simonGameState.setUserTurn(true);

};

function animateAll() {
    simonGameState.setUserTurn(false);
    var order = simonGameState.getOrder();
    var i = 0;
    var colorsToCheck = simonGameState.getLightsNeededCounter();

    var interval = setInterval(function() {
        lightUp(order[i]);



        i++;
        if (i >= colorsToCheck) {
            clearInterval(interval);
            simonGameState.setUserTurn(true);
        }
    }, 600);

};

function lightUp(color) {
    // need to add code to delay the display of each light
    playSound(color);
    $('[data-tile=' + color + ']').css('opacity', '1.0')
    window.setTimeout(function() {
        $('[data-tile=' + color + ']').css('opacity', '.6')
    }, 300);

};

function winnerLightUp(color) {
    $('[data-tile=' + color + ']').css('opacity', '1.0')
    window.setTimeout(function() {
        $('[data-tile=' + color + ']').css('opacity', '.6')
        $("#counter").css('color', 'darkred');
    }, 100);
};

function winner() {
    simonGameState.setUserTurn(false);
    simonGameState.setActiveGame(false);
    $("#counter").html("!!");
    playSound("winner");
    var order = ["red", "blue", "green", "yellow", "red", "blue", "green", "yellow", "red", "blue", "green", "yellow"];
    var i = 0;
    var colorsToCheck = 12;

    var interval = setInterval(function() {
        winnerLightUp(order[i]);
        $("#counter").css('color', 'white');
        i++;
        if (i >= colorsToCheck) {
            clearInterval(interval);
        }
    }, 100);


}

function playSound(color) {
    switch (color) {
        case "blue":
            var snd1 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"); // buffers automatically when created
            snd1.play();
            break;
        case "red":
            var snd2 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"); // buffers automatically when created
            snd2.play();
            break;
        case "yellow":
            var snd3 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"); // buffers automatically when created
            snd3.play();
            break;
        case "green":
            var snd4 = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"); // buffers automatically when created
            snd4.play();
            break;
        case "wrong":
            var snd5 = new Audio("wrong.mp3");
            snd5.play();
            break;
        case "winner":
            var snd5 = new Audio("winner.mp3");
            snd5.play();
            break;

    }

};
