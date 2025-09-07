// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", doAlert);
    
// });

// function doAlert(){
//     console.log(this);
//     this.style.color="white";
//     var size = document.querySelectorAll("button").length;
//     console.log(size);

    
// };

//const audio = new Audio("sounds/crash.mp3");
    // audio.play();

//detecting the button pressed
var size = document.querySelectorAll(".drum").length;
for(var i=0; i< size; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var word = this.innerHTML;
        playTheSound(word);
        playAnimation(word);
    });
}

//dectecting the key pressed
document.addEventListener("keydown", function(event){
    console.log(event.key);
    playTheSound(event.key);
    var currentkeyy = event.key;
    playAnimation(currentkeyy);
});

//function for playing the sound
function playTheSound(word) {
            //var word = this.innerHTML;
            switch (word){
                case "w" :
                    var tom1 =new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;
                case "a" :
                    var tom2 =new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
                case "s" :
                    var tom3 =new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;
                case "d" :
                    var tom4 =new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;
                case "j" :
                    var snare =new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
                case "k" :
                    var crash =new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                case "l" :
                    var kick =new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
                
                default :
                console.log("invalid");            
        }
    };

    //this function to play the animation
    //see out the time delay option

    function playAnimation(currentkeyy) {
        var activeButton = document.querySelector("."+ currentkeyy);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100)
    }

//by this JS can detect which key you have pressed
// document.addEventListener("keydown", playTheSound(event){
    
//     console.log(event.key);
// });
