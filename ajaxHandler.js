/**
 * @author Kishor Mali
 */

/**
 * This is generic ajax request handler to handle all ajax request
 * 
 * @param {Object} callUrl : This is url of function to be called
 * @param {Object} postData : This is data to be post or get
 * @param {Object} method : post or get method
 * @param {Object} asyncStatus : async status TRUE or FALSE
 * @param {Object} successCallback : success state handler
 */
var ajaxHandler = function(callUrl, postData, method, asyncStatus,  successCallback) {
	
	jQuery.ajax({
		url : callUrl,
		data : JSON.stringify(postData),
		type : method,
		async : asyncStatus
	})
	.done(successCallback)
	.error(function(xhr, textStatus, errorThrown) {
		if(xhr.status = 400){
			console.log('Method Not Found');
		}
	});
};