function checkForm()
{
 var oldPassword=document.getElementById("oldPassword").value;
 var newPassword=document.getElementById("newPassword").value;
 var confirmP =document.getElementById("confirmP").value;

 if(oldPassword!=""&&newPassword!=""&&confirmP!="")
 {
   if(oldPassword!=newPassword)
   {
     if(newPassword==confirmP)
      {
       return true;
      }
      else
       {
         alert("Confirm password is not same as you new password.");
         return false;
       }
   }
   else
  {
   alert(" This Is Your Old Password,Please Provide A New Password");
   return false;
  }
 }
 else
 {
  alert("All Fields Are Required");
  return false;
 }
}