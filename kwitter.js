const firebaseConfig = {
    apiKey: "AIzaSyBM-gOMOQgJFnG7JsRkhrLqJhoopUoOYdU",
    authDomain: "twitter-c83ec.firebaseapp.com",
    databaseURL: "https://twitter-c83ec-default-rtdb.firebaseio.com",
    projectId: "twitter-c83ec",
    storageBucket: "twitter-c83ec.appspot.com",
    messagingSenderId: "1066059751550",
    appId: "1:1066059751550:web:1da70b8e64bddd8b69382f"
  };
//função addUser
function addUser() 
{
// Obtenha o nome do usuário da caixa de entrada e o armazene dentro de uma variável
user_name=document.getElementById("user_name").value;
// Armazene o valor da variável user_name no armazenamento local com a chave user_name
localStorage.setItem("user_name",user_name);
// Redirecione os usuários para kwitter_room.html.
window.location="kwitter_room.html"
}


