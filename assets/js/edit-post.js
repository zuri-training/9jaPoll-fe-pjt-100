const input = document.getElementById("edit-post")
const count = document.getElementById("number-count")
const buttons = document.querySelectorAll(".buttons");
textField.document.designMode = "On"


// input.addEventListener( "keyup",  function(e) {
//     wordCounter(e.target.value)
// } )


// function wordCounter(text) {
//     var text = input.value;
//     var wordCount = 0;
//     for (var i = 0; i <= text.length; i++) {
//       if (text.charAt(i) == ' ') {
//          wordCount++;
//       }
//     }
//     count.innerText = wordCount;
// }
  

buttons.forEach( button => button.addEventListener( "click", () =>{
    let cmd = button.getAttribute("data-cmd");
    if (button.name = "active") {
        button.classList.toggle("active")
    }

    if (cmd === "insertImage" || cmd === "createLink") {
        let url = prompt(  "Enter link here:  ", "  " );
        textField.document.execCommand( cmd, false, url );
        if (cmd === "insertImage") {
            const imgs =  textField.document.querySelectorAll("img");
            imgs.forEach( img  => img.style.maxWidth = "300px" );
        }else {
            const links = textField.document.querySelectorAll("a");
            links.forEach( link => {
                link.target = "_blank"
                link.addEventListener( "mouseover", () => {
                    textField.document.designMode = "Off";
                } )
            } )
        }
        // if (cmd = "fontSize") {
        
        // }
    }else {
        textField.document.execCommand( cmd, false, null );
    }
}  ) )



