var playerModel = playerModel || {};

var $playerElement = $("#player1");

playerModel = {
    limitsX: [0, 583],
    limitsY: [],
    positionInitX: "",
    positionInitY: "",
    xInitialPosition: 0,
    xCurrentPosition: 0,
    velocity: 5,
};


var player_action = player_action || {

    
    collision: false,

    walk: function (left) {
        this.collisionScenario(left);
        if (!this.collision) {
            playerModel.xCurrentPosition = left 
            ? (playerModel.xCurrentPosition - playerModel.velocity)
            : (playerModel.xCurrentPosition + playerModel.velocity)
            ;
        }
        
        $playerElement.css("margin-left", playerModel.xCurrentPosition);
       
    },

    collisionScenario: function (left) {

        var currentMarginLeft = parseInt($playerElement.css("margin-left"));

        if(left && currentMarginLeft == playerModel.limitsX[0])
        {
            this.collision = true;
            return;    
        }
        else if(currentMarginLeft == playerModel.limitsX[0])
        {
            this.collision = false;
            return;
        }
        else if(!left && currentMarginLeft >= playerModel.limitsX[1])
        {
            this.collision = true;
            return;
        }
        else if(left)
        {
            this.collision = false;
            return;
        }
    }
};

$(document).ready(function () {
    //alert("ready!");
});

$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            player_action.walk(true);
            // player.xCurrentPosition = player.xCurrentPosition - player.velocity;
            // $(".player").css("margin-left", player.xCurrentPosition);
            break;

        case 38: // up
            break;

        case 39: // right
            // player.xCurrentPosition = player.xCurrentPosition + player.velocity;
            // $(".player").css("margin-left", player.xCurrentPosition);
            player_action.walk(false);
        case 40: // down
            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});