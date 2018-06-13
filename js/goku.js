var goku = goku || {};




goku = {

    goku_player: "#goku_player"
    ,

    walk_dash:function(){        
            var timerId =  setTimeout(goku.walk, 1000);
            setTimeout(() => { 
                clearInterval(timerId);
                setTimeout(goku.dash, 2000); }
            , 2000);         
    },

    walk: function(){
        console.log("walk-" + goku.getHrMin());
        $(this.goku_player).removeClass("goku-dash").addClass("goku-walk");
    },

    dash:function(){
        console.log("dash-" + goku.getHrMin());
        $(this.goku_player).removeClass("goku-walk").addClass("goku-dash");
    },

    getHrMin:function(){
        var dateHour = new Date();
        return dateHour.getHours() + "-" + dateHour.getMinutes() + "-" + dateHour.getSeconds()
    }
 

}


$(document).ready(function(){
    goku.walk_dash();
});

    
