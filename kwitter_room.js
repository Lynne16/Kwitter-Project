var firebaseConfig = {
  apiKey: "AIzaSyAc3F-rtA0Oo0TB5lEUuG-bdkrFgGtV8aM",
  authDomain: "kwitter-project-36d3e.firebaseapp.com",
  databaseURL: "https://kwitter-project-36d3e-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-36d3e",
  storageBucket: "kwitter-project-36d3e.appspot.com",
  messagingSenderId: "438296149964",
  appId: "1:438296149964:web:2911153471c8250572e769"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// FIREBASE LINKS

user_name=localStorage.getItem("Username");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function AddRoom(){
  class_name=document.getElementById("add_room").value;
  localStorage.setItem("Class-Name", class_name);

  firebase.database().ref("/").child(class_name).update({
        purpose: "adding room name"
  });
  window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
 Room_names = childKey;
 //Start code
 console.log("Room Name- "+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(c_name){
  console.log(c_name);
  localStorage.setItem("selected_class_name",c_name);
  window.location="kwitter_page.html";
}


function logOut(){
    window.location="index.html";
}