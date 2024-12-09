function data()
{
    var a1 = document.getElementById("naam").value;
    var a2 = document.getElementById("cnumber").value;
    var a3 = document.getElementById("pas").value;
    var a4 = document.getElementById("cpas").value;

    if(a1=="" ||a2=="" ||a3=="" ||a4=="")
    {
        alert("All fields fillup are mandatory");
        return false;
    }

    else if(a2.length<10 || a2.length>10)
        {
            alert("please check contant number \n please fill up vaild number");
            return false;
        }

        else if(isNaN(a2))
            {
                alert("Contact Number is only in Numaric accpeted");
                return false;
            }

            else if(a3!=a4)
                {
                    alert("Password and Confirm Password both are diffrent \n please fillup same password");
                    return false;
                }

    else 
    {
        true;
    }

}