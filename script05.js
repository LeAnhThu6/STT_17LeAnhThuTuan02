// // Post a user

// var url = "http://localhost:8080/api/v1/users";

var data = {};
var json = JSON.stringify(data);
var url = 'https://jsonplaceholder.typicode.com/todos';
var xhr = new XMLHttpRequest()
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-type',
    'application/json; charset=utf-8');
xhr.onload = function() {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "201") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json);