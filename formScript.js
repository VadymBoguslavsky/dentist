
function createSelectItems(param) {
  var main = document.querySelector(".form__select")
  var item = document.createElement("option")
  item.textContent = param.name;
  var newItem = item.cloneNode(true)
  main.appendChild(newItem)
}

fetch('http://504080.com/api/v1/directories/enquiry-types')
  .then(
    function (response) {
      response.json().then(function (data) {
        delete data.info;
        for (var key in data) {
          for (var i in data[key]) {
            createSelectItems(data[key][i])
          }
        }
      });
    }
  )
  .catch(function (err) {
    console.log('Fetch Error :-S', err);
  });

  window.onload = function () {
    
  var fileInput = document.getElementById('image_uploads');
  var fileDisplayArea = document.querySelector('.form__image');
  fileInput.addEventListener('change', function (e) {
    function fixBinary (bin) {
      var length = bin.length;
      var buf = new ArrayBuffer(length);
      var arr = new Uint8Array(buf);
      for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
      }
      return buf;
    }
    var base64 = 
    "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAB1klEQVR42n2TzytEURTHv3e8N1joRhZG" + 
    "zJsoCjsLhcw0jClKWbHwY2GnLGUlIfIP2IjyY2djZTHSMJNQSilFNkz24z0/Ms2MrnvfvMu8mcfZvPvu" + 
    "Pfdzz/mecwgKLNYKb0cFEgXbRvwV2s2HuWazCbzKA5LvNecDXayBjv9NL7tEpSNgbYzQ5kZmAlSXgsGG" + 
    "XmS+MjhKxDHgC+quyaPKQtoPYMQPOh5U9H6tBxF+Icy/aolqAqLP5wjWd5r/Ip3YXVILrF4ZRYAxDhCO" + 
    "J/yCwiMI+/xgjOEzmzIhAio04GeGayIXjQ0wGoAuQ5cmIjh8jNo0GF78QwNhpyvV1O9tdxSSR6PLl51F" + 
    "nIK3uQ4JJQME4sCxCIRxQbMwPNSjqaobsfskm9l4Ky6jvCzWEnDKU1ayQPe5BbN64vYJ2vwO7CIeLIi3" + 
    "ciYAoby0M4oNYBrXgdgAbC/MhGCRhyhCZwrcEz1Ib3KKO7f+2I4iFvoVmIxHigGiZHhPIb0bL1bQApFS" + 
    "9U/AC0ulSXrrhMotka/lQy0Ic08FDeIiAmDvA2HX01W05TopS2j2/H4T6FBVbj4YgV5+AecyLk+Ctvms" + 
    "QWK8WZZ+Hdf7QGu7fobMuZHyq1DoJLvUqQrfM966EU/qYGwAAAAASUVORK5CYII=";

  var binary = fixBinary(atob(base64));
  var blob = new Blob([binary], {type: 'image/png'});
  var url = URL.createObjectURL(blob);

  var reader = new FileReader();
  reader.onload = function (e) {
    var img = new Image();

   var urlCreator = window.URL || window.webkitURL;
   var imageUrl = urlCreator.createObjectURL( blob );
    img.src = imageUrl;
    img.classList.add('form-image')
    fileDisplayArea.appendChild(img);
  }
  reader.readAsDataURL(blob);
  });
}

function postData(e) {
  var data = document.querySelector('.js-post-form');
  var lang = {}
  
  for (var i = 0; i < data.length; i++) {
    var record = data[i];
    lang[record.name] = record.value;
  }
   fetch('http://504080.com/api/v1/support', {
    method: 'post',
    body: JSON.stringify(lang)
  }).then(function (response) {

     return response.json();
     
    }).then(function (data) {

  });
}