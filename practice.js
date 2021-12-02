var firebaseConfig = {
    apiKey: "AIzaSyDOmQfAa6mMGuKdcf5p4VnrMBC1i54Q6A0",
    authDomain: "kwitter-a119c.firebaseapp.com",
    databaseURL: "https://kwitter-a119c-default-rtdb.firebaseio.com",
    projectId: "kwitter-a119c",
    storageBucket: "kwitter-a119c.appspot.com",
    messagingSenderId: "956224254017",
    appId: "1:956224254017:web:b1fd98535fffc06376d6c0"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose  : "adding user"
    });
}