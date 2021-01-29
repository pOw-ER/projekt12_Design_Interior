function showInConsole (){
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let message = document.getElementById('message');
  let button = document.getElementById('button');
  console.log(name.value);
  console.log(email.value);
  console.log(message.value);
}
button.addEventListener('click',showInConsole)
