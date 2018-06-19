var goku = goku || {};




goku = {

    goku_player: "#goku_player"
    ,

    walk_dash:function(){  
            var timerId =  setTimeout(goku.walk, 1000);
            setTimeout(() => {                
                setTimeout(goku.dash, 2000); }
            , 2000);         
    /*
    
    function myMove() {
    var elem = document.getElementById("myAnimation"); 
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}
    */      
    
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

    
