document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('01');
    console.log(button);
    // onClick's logic below:
    button.addEventListener('click', function() {
        var img = document.getElementById('01').src;
        if (img.indexOf('off_128.png')!=-1) {
            document.getElementById('01').src  = 'images/on_128.png';
            
            /*function prep() {
                setTimeout(function() {console.log("wait 10 seconds ")}, 1000);
            } */
            var array = ["gmohnDab", "garzDab", "steelKappa", "PepePls", "Jebaited", "BootyTime", "POGGERS", "LuL", "garzHaHAA" , "steelREALLY", "steelO", "garzOH", "ZreknarF", "BibleThump", "steelSalt", "steelGrin", "steelWOO", "steelDank", "garzW", "TTours", "KappaPride", "riPepperonis", "TriHard", "KKomrade", "steel4"];
            //console.log(array);
            setInterval(function(){
            var rand = Math.floor(Math.random() * 24);
            function randomWholeNum() {
            // Only change code below this line.
            return Math.floor(Math.random() * 10);
            }
            console.log(rand);
            var emote = array[rand];
            console.log(emote);
            // document.getElementsByClassName("tw-block tw-border-radius-medium tw-font-size-6 tw-full-width tw-textarea tw-textarea--no-resize")
            var text = emote;
            function sendInput() {
                var buttonValue
            }

            var e = new Event("keydown");
            e.key="return";    // just enter the char you want to send 
            e.keyCode=e.key.charCodeAt(13);
            e.which=e.keyCode;
            e.altKey=false;
            e.ctrlKey=true;
            e.shiftKey=false;
            e.metaKey=false;
            e.bubbles=true;
            document.dispatchEvent(e);
            console.log(e);
            }, 5000);
}                
         else {
           document.getElementById('01').src = 'images/off_128.png';
           clearInterval();
       }

    })
    });
