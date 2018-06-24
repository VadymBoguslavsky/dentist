
function createSelectItems(param){
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

     window.onload = function() {
      var fileInput = document.getElementById('image_uploads');
      var fileDisplayArea =  document.querySelector('.form__image');
      fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var imageType = /image.*/;
  
        if (file.type.match(imageType)) {
          var reader = new FileReader();
          reader.onload = function(e) {
           
            var img = new Image();
            img.src = reader.result;
            img.classList.add('form-image')
            fileDisplayArea.appendChild(img);
          }
          reader.readAsDataURL(file);	
        } else {
          fileDisplayArea.innerHTML = "File not supported!"
        }
      });
    }
  
      
    
