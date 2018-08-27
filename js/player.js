var playerModel = playerModel || {};

var $playerElement = $("#player1");

playerModel = {
    limitsX: [0, 583],
    limitsY: [],
    positionInitX: "",
    positionInitY: "",
    xInitialPosition: 0,
    xCurrentPosition: 0,
    yCurrentPosition: 0,
    velocity:3 ,
    jump : {
        yLimit: -200
    },
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

        goku.dash();
        
        $playerElement.css("margin-left", playerModel.xCurrentPosition);
       
    },

    jump: function(left)
    {
        //A cada 1 seg 

        this.collisionScenario(left);
        if (!this.collision) {
            // playerModel.xCurrentPosition = left 
            // ? (playerModel.xCurrentPosition - playerModel.velocity)
            // : (playerModel.xCurrentPosition + playerModel.velocity)
            // ;
            setInterval(function () {
                //debugger;

                if(parseInt($("#player1").css("margin-top")) > playerModel.jump.yLimit)
                 {                   
                    playerModel.yCurrentPosition =   parseInt($("#player1").css("margin-top")); 
                    $("#player1").css("margin-top", playerModel.yCurrentPosition -1 + "px");

                 }
              }, 100);
        }
    },

    collisionScenario: function (left) {
        
        var currentMarginLeft = parseInt($playerElement.css("margin-left"));

        if(left && currentMarginLeft == playerModel.limitsX[0])
        {
            this.collision = true;
            return;    
        }       
        if(!left && currentMarginLeft >= playerModel.limitsX[1])
        {
            this.collision = true;
            return;
        }

        this.collision = false;
       
    }
};

$(document).ready(function () {
    //alert("ready!");
});

$(document).keydown(function (e) {
    switch (e.which) {
        case 37: // left
            player_action.walk(true);
            break;
        case 38: // up
            player_action.jump(false);
        case 39: // right
            player_action.walk(false);
        case 40: // down
            break;

        default: return; // exit this handler for other keys
    }

    e.preventDefault(); // prevent the default action (scroll / move caret)
});