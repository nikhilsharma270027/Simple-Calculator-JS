let input = document.getElementById("inputBox");    // Accessing input-Box
let buttons = document.querySelectorAll("button");  // Accessing buttons 

let string = "";  // creating an empty string to store input

let arr = Array.from(buttons);   
arr.forEach(button => {
    button.addEventListener("click",(e) => {
        if(e.target.innerHTML == "="){    //if user click is equal to =
                string = eval(string);
                input.value = string;
          }
        else if(e.target.innerHTML == "AC"){   //if user click is equal to AC
              string = '';
              input.value = string;
        }
        else if(e.target.innerHTML == "DEL"){   //if user click is equal to DEl
            string = string.substring(0, string.length-1);
            input.value = string;
        } 
        else{  
              string = string + e.target.innerHTML;
              input.value = string;  
            }
    })
})