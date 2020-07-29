
//CONTROLS
let pages = 1;

// SYNTAX: 
// openPage(page)

openPage(1); //Opening Homepage By Defualt


function openPage(page){
    window.onload = function (){
        for(i = 1; i != (pages + 1); i++){
            document.getElementById("page" + i).style.display = "none";
            console.warn("Opening Page: " + page)
        }

        document.getElementById("page" + page).style.display = "block";

    }

    if(page == ""){
        console.warn("You have evaluated an error in the pageControler, App will close in 3 seconds");
        let i = 3;

        setInterval(function(){
            
            console.log("CLOSING IN: " + i);

            i--;

            if (i < 0){
                setInterval(function(){
                    close();
                }, 500)
            }
        }, 1125)
    }
}

