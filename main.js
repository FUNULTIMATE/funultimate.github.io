function savecookie(){
  document.cookie = "username=John Doe; expires=Thu, 18 Dec 2100 12:00:00 UTC; path=/";
};
function changecookie(){
 document.cookie = "username=John Smith; expires=Thu, 18 Dec 2100 12:00:00 UTC; path=/";
};
function deletecookie(){
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
function listcookie(){
  var result = document.cookie;
  document.getElementById("list").innerHTML=result;
};
