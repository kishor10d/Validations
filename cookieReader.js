/**
 * @author Kishor Mali
 */
 

/**
 * This is generic cookie reader
 */
var cookieReader = function(){
	
	c = document.cookie.split('; ');
    cookies = {};

    for(i=c.length-1; i>=0; i--)
    {
       C = c[i].split('=');
       cookies[C[0]] = C[1];
    }

    return cookies;
};

/**
 * To check the read cookies
 * 
 * @param {Object} cookieString
 */
var printAllCookies = function(cookieString){
	
	console.log(cookieString);
	
	for(key in cookieString){
		console.log("key : "+ key +   "   value : " + decodeURIComponent(cookieString[key]));
		// decodeURIComponent used to decode the encoded cookie
	}
};


var cookier = cookieReader();

printAllCookies(cookier);
