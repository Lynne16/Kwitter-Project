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

user_name=localStorage.getItem("Username");
class_name=localStorage.getItem("Class-Name");

document.getElementById("class_name").innerHTML="Welcome In Class "+class_name+"!";

function Send(){
    msg=document.getElementById("msg").value;

    firebase.database().ref(class_name).push({
          name: user_name,
          msg: msg,
          like: 0
    });

    document.getElementById("msg").value="";
}

  function BackToClass(){
    localStorage.removeItem("Class-name");
    window.location="kwitter_room.html";
  }