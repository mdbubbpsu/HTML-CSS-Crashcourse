var goHome = document.getElementById('goHome')
var goAboutMe = document.getElementById('goAboutMe')
var goEd = document.getElementById('goEd')
var goContact = document.getElementById('goContact')

goHome.onclick = function(){
    window.location.href = "index.html";
};

goAboutMe.onclick = function(){
    window.location.href = "aboutMe.html";
};

goEd.onclick = function(){
    window.location.href = "education.html";
};

goContact.onclick = function(){
    window.location.href = "contactMe.html";
};
