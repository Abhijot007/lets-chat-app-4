
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

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
             console.log("room_name - " + Room_names);
             row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
             document.getElementById("output").innerHTML += row;
       //End code
       });});}
 getData();
 function redirectToroomname(name){
       console.log(name);
       localStorage.setItem("Roomname",name);
       window.location = "kwitter_page.html";
 }
 function logout() {
       localStorage.removeItem("Username");
       localStorage.removeItem("Roomname");
       window.location = "index.html";
 }
 
 function send() {
      msg = document.getElementById("msg").value;
      console.log("Message "+msg);
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0,
            dislike:0
      });
      document.getElementById("msg").value = "";
}