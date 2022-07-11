

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAv9rahgHmaHKkyBkUywY8bffa95c-mTEo",
    authDomain: "let-s-chat-c1416.firebaseapp.com",
    databaseURL: "https://let-s-chat-c1416-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-c1416",
    storageBucket: "let-s-chat-c1416.appspot.com",
    messagingSenderId: "1052848413021",
    appId: "1:1052848413021:web:ec7ebedb7ba4e5550ef0b4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();