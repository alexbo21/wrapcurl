//Creating timer until evreything is rendered

    let startupTimer = 0;
    setInterval(function(){
        startupTimer += 0.5;
        if(startupTimer == 3){
            document.getElementById("startupWindow").style.display = "none";
        }
    },500)