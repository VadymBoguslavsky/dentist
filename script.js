function createItems(param) {
  var item = document.querySelector("#template")
  var main = document.querySelector(".services__items")
  var newItem = item.content.cloneNode(true);
  newItem.querySelector('.services__name').textContent = param.title;
  var urlImage = 'http:' + param.icon
  newItem.querySelector('.services__icon').removeAttribute("src");
  newItem.querySelector('.services__icon').setAttribute("src", urlImage);
  main.appendChild(newItem)
}



var token = 'ebf777b0b340d70fb1d7aa7afdefa4c932e2673b'
var request = new XMLHttpRequest();
request.open('GET', 'http://504080.com/api/v1/services/categories', true);
request.setRequestHeader('Authorization', token);
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      for (var key in data) {
        for (var k in data[key]) {
          createItems(data[key][k])
        }
      }
    } else {
      var error = JSON.parse(request.responseText);
      var title = error.error.message;
      var description = error.error.description
      console.log(title, description)
      swal({
        title: title,
        text: description
      });
    }
  }
};

request.onerror = function () {

};



request.send();