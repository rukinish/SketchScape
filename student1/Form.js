
/*Selects the form by thier ID */
var First_name = document.forms['form']['First_name'];
var Last_name = document.forms['form']['Last_name'];
var address = document.forms['form']['address'];
var City_Town = document.forms['form']['City_Town'];
var Zip_code = document.forms['form']['Zip_code'];
var Email = document.forms['form']['Email'];
var Mobile = document.forms['form']['Mobile'];

/*Verifies the input in the respective form fields and update styling and error message */

First_name.addEventListener('textInput',fname_Verify);
Last_name.addEventListener('textInput',lname_Verify);
address.addEventListener('textInput',address_Verify);
City_Town.addEventListener('textInput',City_Verify);
Zip_code.addEventListener('textInput',Zip_Verify);
Email.addEventListener('textInput',Email_Verify);
Mobile.addEventListener('textInput',Mobile_Verify);




var fname_error = document.getElementById('fname_error');
var lname_error = document.getElementById('lname_error');
var address_error = document.getElementById('address_error');
var city_error = document.getElementById('city_error');
var code_error = document.getElementById('code_error');
var Email_error = document.getElementById('Email_error');
var Mobile_error = document.getElementById('Mobile_error');



/*Checks each input is correct */
function validated(){
    if(First_name.value.length ==0){
        First_name.style.border = "2px solid red";
        fname_error.style.display="block"
        First_name.focus();
        return false;
    }

    if(Last_name.value.length ==0){
        Last_name.style.border = "2px solid red";
        lname_error.style.display="block"
        Last_name.focus();
        return false;
    }
    if(address.value.length ==0){
        address.style.border = "2px solid red";
        address_error.style.display="block"
        address.focus();
        return false;
    }
    if(City_Town.value.length ==0){
        City_Town.style.border = "2px solid red";
        city_error.style.display="block"
        City_Town.focus();
        return false;
    }
    if(Zip_code.value.length ==0){
        Zip_code.style.border = "2px solid red";
        code_error.style.display="block"
        Zip_code.focus();
        return false;
    }
    if(Email.value.length ==0){
        Email.style.border = "2px solid red";
        Email_error.style.display="block"
        Email.focus();
        return false;
    }
    if(Mobile.value.length <9){
        Mobile.style.border = "2px solid red";
        Mobile_error.style.display="block"
        Mobile.focus();
        return false;
    }
    
    
}

function fname_Verify(){
    if(First_name.value.length >=0){
        First_name.style.border="2px solid green";
        fname_error.style.display ="none";
        return true;
    }

}

function lname_Verify(){
    if(Last_name.value.length >=0){
        Last_name.style.border="2px solid green";
        lname_error.style.display ="none";
        return true;
    }
}

function address_Verify(){
    if(address.value.length >=0){
        address.style.border="2px solid green";
        address_error.style.display ="none";
        return true;
    }
}
function City_Verify(){
    if(City_Town.value.length >=0){
        City_Town.style.border="2px solid green";
        city_error.style.display ="none";
        return true;
    }
}
function Zip_Verify(){
    if(Zip_code.value.length >=0){
        Zip_code.style.border="2px solid green";
        code_error.style.display ="none";
        return true;
    }
}
function Email_Verify(){
    if(Email.value.length >=0){
        Email.style.border="2px solid green";
        Email_error.style.display ="none";
        return true;
    }
}
function Mobile_Verify(){
    if(Mobile.value.length ==9){
        Mobile.style.border="2px solid green";
        Mobile_error.style.display ="none";
        return true;
    }
}


function displaySummary() {
    // Get the form input values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
  
    // Create the summary HTML
    var summary = "<h2>Summary</h2>";
    summary += "<p>First Name: " + firstName + "</p>";
    summary += "<p>Last Name: " + lastName + "</p>";
  
    // Insert the summary HTML into a new page or section
    document.getElementById("summaryContainer").innerHTML = summary;
  }