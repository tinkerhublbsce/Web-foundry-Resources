function clr(){
    
    document.getElementById("val").value=""

}

function dis(n){

    document.getElementById("val").value+=n

}

function doCalc(){

    var question=document.getElementById("val").value
    var result=eval(question)
    document.getElementById("val").value=result


}