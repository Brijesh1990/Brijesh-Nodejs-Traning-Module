function valid()
{
if(document.frm.email.value=="")
{
    // alert('Please Enter Your email')
    document.getElementById("error").innerHTML="Please enter Your email here";
    document.frm.email.focus();
    return false;

}
}