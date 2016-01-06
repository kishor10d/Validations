
/**
 * This function used to read image before upload from file upload control
 * @param {file} file : This is file path / file object
 */
function readImage(file) {
		
	var reader = new FileReader();
	var image  = new Image();
		
	reader.readAsDataURL(file);  
	reader.onload = function(_file) {
		image.src    = _file.target.result; // url.createObjectURL(file);
		image.onload = function() {
			var w = this.width,
				h = this.height,
				t = file.type,              // ext only: // file.type.split('/')[1],
				n = file.name,
				s = ~~(file.size/1024) +'KB';
			//$('#uploadPreview').append('<img src="'+ this.src +'"> '+w+'x'+h+' '+s+' '+t+' '+n+'<br>');
			console.log('width : '+w+' Height : ' +h+ ' size : '+s+' Type : '+t+' Name : '+n);
		};
		image.onerror= function() {
			alert('Invalid file type: '+ file.type);
		};      
	};
}

var imgHeight = 0; 	// Global image height member variable
var imgWidth = 0;	// Global image width member variable
 	
/**
 * This is object which get height and width of image
 */
var findHHandWW = function() {
	imgHeight = this.height;
	imgWidth = this.width;
	return true;
};

/**
 * This function get image height and width when loading using ajax call
 * @param {string} imgPath : This is image path
 */
function showImage(imgPath) {
	
	var myImage = new Image();
		myImage.name = imgPath;
	    myImage.onload = findHHandWW;
	    myImage.src = imgPath;
	console.log("path : "+myImage.src+" name : "+myImage.name+"H : "+findHHandWW.height+" Width : "+findHHandWW.width);
	// You can apply this height and witdth to your img elements like below
	$("#imageElement").css("height:"+findHHandWW.height+";width:"+findHHandWW.width);
}