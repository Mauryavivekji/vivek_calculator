let input=document.querySelector("input");
let button=document.querySelectorAll("button");

let string=" ";
button.forEach(element=>{
    element.addEventListener("click",(e)=>{
        // console.log(" button was clicked");
        if(e.target.innerText=='='){
            string=String(eval(string));
            input.value=string;g
        }
        else if(e.target.innerText=="AC"){
string="";
input.value=string;
        }
        else if(e.target.innerText=="DEL"){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerText;
            input.value=string;
        }
       
    })
})
