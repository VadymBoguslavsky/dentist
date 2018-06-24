
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

  var input = document.querySelector('#image_uploads');
  var preview = document.querySelector('.preview');
  console.log(input)
  // input.addEventListener('change', updateImageDisplay);function updateImageDisplay() {
  //   while(preview.firstChild) {
  //     preview.removeChild(preview.firstChild);
  //   }
  
  //   var curFiles = input.files;
  //   if(curFiles.length === 0) {
  //     var para = document.createElement('p');
  //     para.textContent = 'No files currently selected for upload';
  //     preview.appendChild(para);
  //   } else {
  //     var list = document.createElement('ol');
  //     preview.appendChild(list);
  //     for(var i = 0; i < curFiles.length; i++) {
  //       var listItem = document.createElement('li');
  //       var para = document.createElement('p');
  //       if(validFileType(curFiles[i])) {
  //         para.textContent = 'File name ' + curFiles[i].name + ', file size ' + returnFileSize(curFiles[i].size) + '.';
  //         var image = document.createElement('img');
  //         image.src = window.URL.createObjectURL(curFiles[i]);
  
  //         listItem.appendChild(image);
  //         listItem.appendChild(para);
  
  //       } else {
  //         para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
  //         listItem.appendChild(para);
  //       }
  
  //       list.appendChild(listItem);
  //     }
  //   }
  // }var fileTypes = [
  //   'image/jpeg',
  //   'image/pjpeg',
  //   'image/png'
  // ]
  
  // function validFileType(file) {
  //   for(var i = 0; i < fileTypes.length; i++) {
  //     if(file.type === fileTypes[i]) {
  //       return true;
  //     }
  //   }
  // }