/*
Name: Justin Kim
Student No.: 146 377 163
Date: August 10, 2020
*/

function validateForm(form1)
{
    document.getElementById("error").innerHTML = "";
    var errorCount=0;
    var returnValue = true;
    if (form1.first_name.value.length <= 0 || form1.first_name.value.match("^[A-Z][A-Za-z]*") != form1.first_name.value )
    {
        //alert("First name must start with a capital letter and contain only letters.");
        form1.first_name.focus();
        form1.first_name.select();
        returnValue = false;
        printError(errorCount,"First name must start with a capital letter and contain only letters.");
        errorCount++;
    }
    if (form1.last_name.value.length <= 0 || form1.last_name.value.match("^[A-Z][A-Za-z]*") != form1.last_name.value )
    {
        //alert("Last name must start with a capital letter and contain only letters.");
        form1.last_name.focus();
        form1.last_name.select();
        returnValue = false;
        printError(errorCount,"Last name must start with a capital letter and contain only letters.");
        errorCount++;
    }
    if (form1.username.value.length <= 6 || form1.username.value.match("^[A-Za-z][A-Za-z0-9]*") != form1.username.value )
    {
        //alert("Username must start with a character and contain at least 6 alphanumeric characters.");
        form1.username.focus();
        form1.username.select();
        returnValue = false;
        printError(errorCount,"Username must start with a character and contain at least 6 alphanumeric characters.");
        errorCount++;
    }
    if ( form1.password1.value.length <= 6 || form1.password1.value.match("^[A-Za-z]") == null || form1.password1.value.match(".*[a-z]") == null 
                || form1.password1.value.match(".*[0-9]") == null || form1.password1.value.match(".*[A-Z]") == null 
                ||  form1.password1.value.match("[A-Za-z0-9]*") != form1.password1.value || form1.password1.value != form1.password2.value )
    {

        if (form1.password1.value.length <= 6)
        {
            //alert("Error! Password must be at least 6 characters long.");
            printError(errorCount,"Password must be at least 6 characters long.");
            errorCount++;
        }
        if( form1.password1.value.match("^[A-Za-z]") == null )
        {
            //alert("Error! Password must start with a character.");
            printError(errorCount,"Password must start with a character.");
            errorCount++;
        }
        if (  form1.password1.value.match(".*[a-z]") == null || form1.password1.value.match(".*[A-Z]") == null )
        {
            //alert("Error! Password must contain at least one uppercase and one lowercase number.");
            printError(errorCount,"Password must contain at least one uppercase and one lowercase number.");
            errorCount++;
        }
        if ( form1.password1.value.match(".*[0-9]") == null )
        {
            //alert("Error! Password must contain at least one number.");
            printError(errorCount,"Password must contain at least one number.");
            errorCount++;
        }
        if ( form1.password1.value != form1.password2.value )
        {
            //alert("Error! Passwords do no match!");
            printError(errorCount,"Passwords do no match!");
            errorCount++;
        }
        if (form1.password1.value.match("[A-Za-z0-9]*") != form1.password1.value )
        {
            //alert("Error! Password must only contain alphanumeric values!");
            printError(errorCount,"Password must only contain alphanumeric values!");
            errorCount++;
        }
        // else
        // {
        //     //alert("Error! Unknown password error!");
        //     printError(errorCount,);
        //     errorCount++;
        // }
        form1.password1.focus();
        form1.password1.select();
        returnValue = false;
    }
    if ( form1.age.value < 18 || form1.password1.value > 60 )
    {
        //alert("Error! Age must be between 18 and 60!");
        form1.age.focus();
        form1.age.select();
        printError(errorCount,"Age must be between 18 and 60!");
        errorCount++;
        returnValue = false;
    }

    
    return returnValue;
}

function printError(errorCount,errorMessage)
{
    errorCount++;
    var error_element = document.getElementById("error");
    var br = document.createElement("br");
    if ( errorCount <= 5)
    {
        //alert(errorMessage);
        error_element.appendChild( document.createTextNode("Error " + errorCount + ": " + errorMessage ) );
        error_element.appendChild(br);
        error_element.appendChild(br);
    }

    
}