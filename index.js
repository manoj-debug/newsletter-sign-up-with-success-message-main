function simple(){
  document.querySelector(".iamanchor").addEventListener("click",function(event){
    
    var emailInput = document.querySelector('.email-id');
  var emailValue = emailInput.value;
  var mailFormat =  /@/;
  if (emailValue.match(mailFormat)) {
    alert("bye")
    const url = "thanks.html?data=" + encodeURIComponent(emailValue);
    alert(url);
    window.location.href = url;

    
  } else {
    event.preventDefault();
    document.querySelector(".valid").style.display="block"
    var NAME = document.querySelector(".email-id")
NAME.className="sample "


  }

})


} 