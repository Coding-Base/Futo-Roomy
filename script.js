const msg = document.createElement("div");
msg.setAttribute("id","grant");
function sucess(){
  const input = document.getElementById("input").value;
  

  if(input.length == 9  ){
    
 document.body.appendChild(msg)
  msg.innerHTML=`<div id="sent"><p style="font-weight: 200;">Request Sent</p><br><button style="padding:10px;color:white; background:black; border:none;border-radius:15px;opacity:80%;width:100%" onclick=Remove();>Exit</button></div>`
  const change = document.getElementById("btn4")
  change.setAttribute("style","background:green;opacity:100%;")
  alert("Your availability status have been fixed; you are now open for potential roommate to connect")
  document.getElementById("input").value=""
  area.innerText=""
  }
  else{
    document.body.appendChild(msg)
  msg.innerHTML=`<div id="sent"><p style="font-weight: 200;"> Oops !!! Account Not Found; Kindly visit portal to create an accoount </p><br><button style="padding:10px;color:white; background:black; border:none;border-radius:15px;opacity:80%;width:100%" onclick=Remove();>Exit</button></div>`
  }
  
}
function height() {
  document.getElementById("main").setAttribute("style","height:230vh");
  
  setTimeout(decreaseheight,"120000" )
}
function increaseheight() {
  document.getElementById("main").setAttribute("style","height:230vh");
  
  setTimeout(decreaseheight,"20000" )
}

const main = document.getElementById("main")
const sent = document.getElementById("sent")
//const button = document.getElementById("myForm");
function Remove(){
  
  msg.remove()
}

/*function Portal(){
 // main.remove();
  const newportal= document.createElement("div");
  //const portal = document.createElement("div");
//portal.setAttribute("id","grant");
 document.body.appendChild(newportal)
  //portal
  newportal.innerHTML=`<!DOCTYPEhtml>
<html lang="en">
  <head>
  <title>www.OneRoomy/Portal</title>
<link rel="stylesheet" href="style.css">
  </head>
  <body>

   <section id="section">
           <h2>Login</h2> 
       <input type="text" placeholder="Username"><br><br>

       <input type="text" placeholder="Password"><br><br>

 <div id="inline"><input id="check" type="checkbox"><span>Remember Me</span></div><br>
      <button> Login</button><br><br>
       <a href="#signup" onclick="Login()">Signup?</a>
    </section>


  
  </body>
  <footer>
    
  </footer>
</html>


  
  </body>
  <footer>
    
  </footer>
</html>
 <style>
 
 *{
  margin:0px;
  padding:0px;
  box-sizing: border-box;
  max-width: 100%;
}
body{
  background: white;
}
input{
  margin:20px;
  border:none;
  padding: 3%;
  color:grey;
  border-radius:15px;
  background: white;
  text-align: center;
  justify-content: center;
  width: 80%;
  opacity: 70%;
}
section{
  display:grid;
  justify-content: center;
 margin: auto;
 top:30%;
 z-index:1000;
 position:fixed;
 width: 100%;
 padding-top:8%;
 border-radius: 20px;
 padding-bottom: 8%;
 opacity: 90%;
 background:black;
 color:white;
}
h2{
  text-align: center;
  color: white;
}
a,span{
  text-align: Center;
  text-decoration: none;
  color: grey;
}
button{
  display: flex;
  justify-content: center;
  border:1px solid black;
  width: 100%;
  padding: 5%;
  text-align: center;
}
#inline{
  display: flex;
  justify-content: space-around;
  width: 100%;
 
}
span{
  width: 80%;
  margin-left: -50%;
}
#check{
  margin-left:-20% ;
  width: 80%;
}



 </style>`
  
}
*/
function Portal(){
 document.location.replace("#signup");
}
function Login(){
   document.location.replace("#log");
 }
function Back(){
  document.body.appendChild(main);
  setTimeout(Remove,50)
}
//button.addEventListener("click",sucess);
const input= document.getElementById("input");
input.addEventListener("click",increaseheight);
const area= document.getElementById("message");

area.addEventListener("click",height);
function decreaseheight(){
  document.getElementById("main").setAttribute("style","height:101vh");

}

function Body(){
  const addition = document.createElement("div");
  addition.setAttribute("id", "addition")
  addition.innerHTML=`
   <img class="png-image" src="png2.png">
  <div class="pikin">
  <h2  class="h2">Excutive Lodge  </h>
  <p class="vacant">Vacant room is available at the executive lodge, very close to school</p>
 <div class="image-div">
  <img class="inner-image" src="Future.jpg">
  </div>
  <div class="pikin-inner1"><h3 class="pikin-text">Location</h3><h3 class="pikin-text">Rent</h3><h3 class="pikin-text">Agent</h3></div>
  <div class="pikin-inner2"><h3 class="pikin-text">Eziobodo</h3><h3 class="pikin-text">100k</h3><h3 class="pikin-text">Free</h3>

  </div>
    <hr></hr>
            <button class="signup-btn">Contact</button></div>
  <img class="png-image" src="bed3.png">
  <div id="signup">
  <h2 class="sign-text">signup</h2>
  <input id="signup-input" class="signput" placeholder="Full Name" > 
   <input id="password-input" class="signput" placeholder="Password" >

    <input id="confirm" class="signput" placeholder="Confirm Password" >
        <button onclick="validate()" id="signup-btn">Sign-up</button><br>
        <p id="text-msg"></p>
            <span>Already have an account?</span> <br>  <a onclick="Login()" style="font-weight:500; font-size:15px;font-family:San Serif;">Login</a><br><br>
   </div>
     <hr></hr>
  <div class="pikin">
  <h2 class="h2">Covenant Lodge  </h>
  <p class="vacant">Vacant room is available at the Covenant lodge, very close to school</p>
 <div class="image-div">
  <img class="inner-image" src="duplex1.jpg">
  </div>
  <div class="pikin-inner1"><h3 class="pikin-text">Location</h3><h3 class="pikin-text">Rent</h3><h3 class="pikin-text">Agent</h3></div>
  <div class="pikin-inner2"><h3 class="pikin-text">Umuchima</h3><h3 class="pikin-text">150k</h3><h3 class="pikin-text">Free</h3>

</div>
  <button  class="signup-btn">Contact</button>
  <hr></hr>
<a onclick="AI()"><img class="png-image" src="chatgpt.png"></a>
  <p class="vacant">Click Icon to Access AI  </p>
  </div>
  <hr></hr>
</div>
  <img class="png-image" src="bed3.png">
  <div id="log">
  <h2 class="sign-text">Login</h2>
  <input id="signup-input" class="signput" placeholder="User Name" > 
   <input id="signup-input1" class="signput" placeholder="Password" >
           <button id="signup-btn">Login</button>
   </div>
   <img class="png-image" src="png1.png">
  `
  document.body.appendChild(addition)
}
Body();
function home(){
  document.Location.replace("#home")
}

function CreateAccount(){
  //const signin = prompt("reconfirm your user name??");
  const signin = document.getElementById("signup-input").value;
  //const Id= document.getElementById("signup-input1").value;
const Id= Math.floor(Math.random()*1000);
  document.getElementById("main").remove()
  document.getElementById("addition").remove()
const home = document.getElementById("home");
home.setAttribute("style","background:white;")

const Account = document.createElement("div");
Account.setAttribute("id","user-account")
Account.innerHTML=`
<div id="user-div">
<div id="account-info">
<h1 class="info">My Account</h1>
<div id="img-div"><img id="profile-image" src="User.png">
<h1 class="info"> ID:101${Id}</h1></div>
</div>
<h2 id="user-welcome"> Welcome back,     ${signin}</h2>
<div id="user-main">
<div id="child-main3"  class="user-submain">Sent Request</div>
<div id="child-main2"  class="user-submain"> Connections</div>
<div id="child-main1"  class="user-submain">Previous Room-mate</div>

</div>
<div class="user-submain2">
<div id="child" class="submain-2div">Activities</div>
<div id="child2" class="submain-2div">Lodges</div>
</div>
<img class="png-image" src="bed3.png">
</div>`


document.body.appendChild(Account);
}
function validate(){
  const input = document.getElementById("password-input").value;
  const confirm = document.getElementById("confirm").value;
  const text = document.getElementById("text-msg")
  if(input.length>8 && input===confirm){
    text.innerHTML="";
    CreateAccount();
  }
  else if( input.length<8 && input===confirm ){
    text.innerHTML="password must be greater than 8 digits and contain upper and lowercase "
    text.setAttribute("style","color:red;")
  }
  else if(input.length>8 && input !== confirm){
    text.innerHTML="Confirm password doesn't match password"
      text.setAttribute("style","color:red;")
  }
  else if(input.length<8 && confirm.length<8){
    text.innerHTML="Password must be greater than 8"
        text.setAttribute("style","color:red;")
  }
  
  else{
    alert("An error occurred")
  }
}
function AI(){
  window.location.replace("https://chat.chatgptdemo.net/")
}
 