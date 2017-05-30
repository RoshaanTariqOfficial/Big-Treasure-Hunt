var random;
var count = 0;
random = Math.ceil(Math.random() * 6);
function check1(){
    if(random == 1){
        document.getElementById('pic1').src = 'images/treasure.png';
        document.getElementById('pic1').style.opacity = 1;
        alert('You Won!!!');
        setTimeout(function() {
               window.location.reload();
            }, 1000);
    }
    else{
        document.getElementById('pic1').src = 'images/skull.png';
        document.getElementById('pic1').style.opacity = 1;
        count++;
        if(count == 2){
            alert("Game Over");
            setTimeout(function() {
               window.location.reload();
            }, 1000);
        }
    }
}
function check2(){
    if(random == 2){
        document.getElementById('pic2').src = 'images/treasure.png';
        document.getElementById('pic2').style.opacity = 1;
        alert('You Won!!!');
        setTimeout(function() {
               window.location.reload();
            }, 1000);
    }
    else{
        document.getElementById('pic2').src = 'images/skull.png';
        document.getElementById('pic2').style.opacity = 1;
        count++;
        if(count == 2){
            alert("Game Over");
            setTimeout(function() {
               window.location.reload();
            }, 1000);
        }
    }
}
function check3(){
    if(random == 3){
        document.getElementById('pic3').src = 'images/treasure.png';
        document.getElementById('pic3').style.opacity = 1;
        alert('You Won!!!');
        setTimeout(function() {
               window.location.reload();
            }, 1000);
    }
    else{
        document.getElementById('pic3').src = 'images/skull.png';
        document.getElementById('pic3').style.opacity = 1;
        count++;
        if(count == 2){
            alert("Game Over");
            setTimeout(function() {
               window.location.reload();
            }, 1000);
        }
    }
}
function check4(){
    if(random == 4){
        document.getElementById('pic4').src = 'images/treasure.png';
        document.getElementById('pic4').style.opacity = 1;
        alert('You Won!!!');
        setTimeout(function() {
               window.location.reload();
            }, 1000);
    }
    else{
        document.getElementById('pic4').src = 'images/skull.png';
        document.getElementById('pic4').style.opacity = 1;
        count++;
        if(count == 2){
            alert("Game Over");
            setTimeout(function() {
               window.location.reload();
            }, 1000);
        }
    }
}
function check5(){
    if(random == 5){
        document.getElementById('pic5').src = 'images/treasure.png';
        document.getElementById('pic5').style.opacity = 1;
        alert('You Won!!!');
        setTimeout(function() {
               window.location.reload();
            }, 1000);
    }
    else{
        document.getElementById('pic5').src = 'images/skull.png';
        document.getElementById('pic5').style.opacity = 1;
        count++;
        if(count == 2){
            alert("Game Over");
            setTimeout(function() {
               window.location.reload();
            }, 1000);
        }
    }
}
function check6(){
    if(random == 6){
        document.getElementById('pic6').src = 'images/treasure.png';
        document.getElementById('pic6').style.opacity = 1;
        alert('You Won!!!');
        setTimeout(function() {
               window.location.reload();
            }, 1000);
    }
    else{
        document.getElementById('pic6').src = 'images/skull.png';
        document.getElementById('pic6').style.opacity = 1;
        count++;
        if(count == 2){
            alert("Game Over");
            setTimeout(function() {
               window.location.reload();
            }, 1000);
        }
    }
}

