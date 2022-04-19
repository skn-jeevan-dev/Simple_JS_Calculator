function btnclick(val){
        
        document.getElementById("out").value+=val

}

function clearscr(){
    document.getElementById("out").value=""
     
}
function eqlclick(){
    var text=document.getElementById("out").value
    var result=eval(text)
    document.getElementById("out").value=result

    
}
function backspace() {											
    var size =document.getElementById("out").value.length;
    document.getElementById("out").value= document.getElementById("out").value.substring(0, size-1);
}
