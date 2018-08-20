document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('01');
    console.log(button);
    // onClick's logic below:
    button.addEventListener('click', function() {
        var img = document.getElementById('01').src;
        if (img.indexOf('off_128.png')!=-1) {
            document.getElementById('01').src  = 'images/on_128.png';
            
            function prep() {
                setTimeout(function() {console.log("wait 10 seconds ")}, 1000);
            }
            function bot() {
                var array = ["gmohnDab", "garzDab", "steelKappa", "PepePls", "Jebaited", "BootyTime", "POGGERS", "LuL", "garzHaHAA" , "steelREALLY", "steelO", "garzOH", "ZreknarF", "BibleThump", "steelSalt", "steelGrin", "steelWOO", "steelDank", "garzW", "TTours", "KappaPride", "riPepperonis", "TriHard", "KKomrade", "steel4"];
                console.log(array);



                }
            }        
         else {
           document.getElementById('01').src = 'images/off_128.png';
       }

    })
    });
