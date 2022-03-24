function compute()
{
    //creating variables from input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Calculate
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    //validation for "Principal" input box if less than 0, alert "user"!
    if(principal <= 0 ){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    //display the result
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>";
}

// update the rate values
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rateval").innerText=rateval;
}