

//document==html Page
function Outdisplay(att){
    document.getElementById("displayScreen").value +=att;
}
//eval executes the string and gives output
document.getElementById("displayScreen").addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        //event.preventDefault();
        Evaluate();
       }
})


function Evaluate(){
    var A=document.getElementById("displayScreen").value;

    var B=eval(A);
    document.getElementById("displayScreen").value=B;
}

function clr(){
    document.getElementById("displayScreen").value="";  
}