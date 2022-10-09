function compute() {
    var principal=document.getElementById("principal").value;
    if(parseInt(principal)<1){
        alert("Insert a positive number");
        document.getElementById("principal").focus();
        return false;
    } 
    else if(principal == ""){
        alert("Insert a number")
        return false;
    }
    

    
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);    
    document.getElementById("depositmessage").innerHTML = ""+principal;
	document.getElementById("interestmessage").innerHTML = ""+rate;
	document.getElementById("amountmessage").innerHTML = ""+interest;
	document.getElementById("yearmessage").innerHTML = ""+year;
    return false;
};

function updateRate() {
	     var rateval = document.getElementById("rate").value;
	     document.getElementById("rate_val").innerHTML = rateval;
}
        