// Delete a user
var url = "https://650fabb854d18aabfe9a2abd.mockapi.io/api/todos/";
// var url = 'https://jsonplaceholder.typicode.com/todos';
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url + "/1", true);
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(null);
