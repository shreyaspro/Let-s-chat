
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx2cu89MH-GvacigYhZvEZKi05FOsFMI0",
  authDomain: "class-base-45cd0.firebaseapp.com",
  databaseURL: "https://class-base-45cd0-default-rtdb.firebaseio.com",
  projectId: "class-base-45cd0",
  storageBucket: "class-base-45cd0.appspot.com",
  messagingSenderId: "92824733365",
  appId: "1:92824733365:web:c78e8538e2073926c320fc",
  measurementId: "G-0P57D8TLXB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome  " + user_name + "!";


function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding Room Name"
    });
    localStorage.setitem("room_name", room_name);
    window.location = "kwitter_page.html";
}


function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html"
}


function logout(){
 localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html"
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log("Room Name - " + Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); }


getData();
