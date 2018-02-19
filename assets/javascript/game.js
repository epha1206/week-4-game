$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19);
    
    $('#randomNumber').text(Random);

    var num1=Math.floor(Math.random()*11+1);
    var num2=Math.floor(Math.random()*11+1);
    var num3=Math.floor(Math.random()*11+1);
    var num4=Math.floor(Math.random()*11+1);

    var totalScore= 0;
    var wins= 0;
    var losses= 0;

    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        totalScore= 0;
        $('#finalTotal').text(totalScore);
    }

});