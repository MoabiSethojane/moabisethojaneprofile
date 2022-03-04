
logo();
    function logo(){
        document.getElementById('logo').src='logo.png';  
    }
     
    navbar();
  function navbar(){

    document.getElementById("nav").innerHTML='<a href="index.html">Home</a> <a href="about.html" target="blank">About me</a>  ';

              
  }
  bodycontainer();
  function bodycontainer(){
    document.getElementById('contactmaintable').innerHTML='<h3>Address</h3> <p>City:Johannesburg <br>Province: Gauteng</p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0607865463476!2d27.860290314330854!3d-26.71050498321506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9459a77f8102e3%3A0x2ac83d31e146fb58!2sVaal%20University%20of%20Technology%20(VUT)!5e0!3m2!1sen!2sza!4v1645425902301!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  }
function validation(){
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var message = document.getElementById("message").value;
var error_message = document.getElementById("error_massage");
error_message.style.padding ="5px";
var text;

if(name.length<5){
    text= "Please enter valid name";
    error_message.innerHTML = text;
    return false;

}
if(surname.length<5){
    text= "Please enter valid surname";
    error_message.innerHTML = text;
    return false;

}
if(surname.length<5){
    text= "Please enter valid surname";
    error_message.innerHTML = text;
    return false;

}
if (email.indexOf("@")==-1 || email.length<6) {
        text= "Please enter valid email address";
        error_message.innerHTML=text;
        return false;
    }
    if (isNaN(phone)||phone.length != 10) {
        text="Please enter valid phone number"
        error_message.innerHTML=text;
        return false;
    }
    if (message.length<140 ) {
        text= "Please enter 140 characters "
        error_message.innerHTML=text;
        return false;
    }
    
    alert("Successfuly submited!");
    return true;
}
footer();
  function footer(){
    document.getElementById('footertable').innerHTML=' <a href="https://www.facebook.com/moabi.sethojane.3/" target="blank"> <img id="facebookicon"src="facebook-social-media-icon-facebook-logo.png"> facebook</a></td> <a href="https://www.linkedin.com/in/moabi-sethojane-32346892/" target="blank"><img id="linkedinicon" src="Linkedin-Logo.png">  linkedin</a>   <a href="https://twitter.com/MoabiSethojane" target="blank"> <img id="twittericon" src="free-twitter-logo-icon-2429-thumb.png"> twitter</a> <img id="whatappicon" src="whatsapp-social-media-icon-design-template-vector-22339907.jpg"> whatsapp number:0685335569  <img id="phoneNumber" src="phone-icon-telephone-icon-which-i-going-to-present-you-unique-you-totally-different-any-other-icons-you-111739308.jpg"> contact number: 0614666063';
  }