const deleteBtn = document.getElementById('delete');

const database = firebase.database();
// var path = window.location.origin.toString().replace('www.massanger.','');
// path = path.replace("https://","");
console.log(window.location.origin.toString());

// var end_of_unique = window.location.origin.toString().indexOf("netlify.app");
// var path = window.location.origin.toString().substring(0,end_of_unique-1);
// path = path.replace("https://www.","");
// var path = window.location.origin.toString().replace("fbologin.github.io/","");
// path = path.replace("https://www.","");
// var path = window.location.pathname.toString().replace("/vicc","");
// path = path.replace("/","");  
var path = "Massangger";
console.log(path);
const usersRef = database.ref('/users'+path);
deleteBtn.addEventListener('click', e => {
    e.preventDefault();
    usersRef.remove();
  });
