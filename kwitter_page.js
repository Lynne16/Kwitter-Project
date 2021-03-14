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

function getData() { firebase.database().ref("/"+class_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(message_data);

name1=message_data['name'];
msg=message_data['msg'];
like=message_data['like'];
name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'><h4>";
msg_with_tag="<h4 class='message_h4'>"+msg+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like "+like+"</span></button><hr>";

row = name_with_tag+msg_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+= row;
//End code
 } });  }); }
getData();

    function updateLike(message_id){
        console.log("click on like button- "+message_id);
        button_id= message_id;
        like=document.getElementById(button_id).value;
        updated_likes=Number(like)+ 1;
        console.log(updated_likes);
  
        firebase.database().ref(class_name).child(message_id).update({
              like: updated_likes
        });
  }

function BackToClass(){
    window.location="kwitter_room.html";

}
