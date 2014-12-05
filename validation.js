/**
 * @author Kishor Mali
 */


$(document).ready(function(){
	
	// Custom validation to validate mobile number 1 not equal to mobile number 2
    jQuery.validator.addMethod("notEqualTo", function(value, element)
       {
           if(value == $('#mobile1').val() && $('#mobile1').val() != "")
           {
                return false; 
           }
           else
           {
               return true; 
           }
       },"");
       
	   // Custom validation to validate less than values
       jQuery.validator.addMethod("lessThanBrothers", function(value, element)
       {
           if(value <= $('#no_of_brothers').val())
           {
                return true; 
           }
           else
           {
               return false; 
           }
       },"");
       
	   // Custom validation to validate less than values
       jQuery.validator.addMethod("lessThanSisters", function(value, element)
       {
           if(value <= $('#no_of_sisters').val())
           {
                return true; 
           }
           else
           {
               return false; 
           }
       },"");
       
	   // Custom validation to validate dropdown is selected with proper value or not
       jQuery.validator.addMethod("selected", function(value, element)
       {
           if(value == 0) { return false; }
          else { return true; }
       },"This field is required.");
       
       // Custom validation to validate greater than values like to income is greater than for income
       jQuery.validator.addMethod("greaterThan", function(value, element)
       {
			var value = parseFloat(value);
			var smaller = parseFloat($("#part_anual_income_from").val());
	   
           if(value < smaller)     
                { return false; }
           else
                { return true; }
       },"To Salary is must greater than from.");
       
       // Custom validation to validate file extension ie. .jpg, .doc, .png etc.
       jQuery.validator.addMethod("acceptImgExtension", function(value, element)
       {
           if(value == "")
           {
               return true;
           }
           else
           {
               var extension = (value.substring(value.lastIndexOf('.') + 1)).toLowerCase(); 
           
              if(extension == 'jpg'|| extension=='png' || extension == "jpeg") 
                    { return true; }
              else 
                    { return false; }
           }
                     
          
       }, "Only JPG, JPEG and PNG files are allowed");
       
       // Custom validation to validate file extension ie. .jpg, .doc, .png etc.
       jQuery.validator.addMethod("acceptDocExtension", function(value, element)
       {
           if(value == "")
           {
               return true;
           }
           else
           {
              var extension = (value.substring(value.lastIndexOf('.') + 1)).toLowerCase();
               
              if(extension == 'jpg'|| extension=='png' || extension == "jpeg" || extension == "doc" || extension == "docx" || extension == "pdf") 
                    { return true; }
              else 
                    { return false; } 
           }       
       }, "Only JPG, JPEG, PNG, DOC, DOCX, PDF files are allowed");
       
       
	   // Custom validation with ajax call the check username already exist in database
       jQuery.validator.addMethod("checkUsername", function(value, element)
       {
           var response;
           var post_url_check_username = baseurl + "user/checkUsernameExist/";
           
               $.ajax({
                      type: "POST",
                      url: post_url_check_username,
                      data: {username : value},
                      dataType: "json",
                      async: false
               }).done(function(result){
                   //alert(result.status);
                    if(result.status == true){
                        response = false;
                    }else{
                        response = true;    
                    }
               });
               return response;
       }, "Username already taken.");
       
	   
       // Custom validation with ajax call the check email already exist in database
       jQuery.validator.addMethod("checkEmailExist", function(value, element)
       {
           var response = false;
           
           var post_url_check_email = baseurl +"user/checkEmailExist/";
           
           $.ajax({
                  type: "POST",
                  url: post_url_check_email,
                  data: {email : value},
                  dataType: "json",
                  async: false
           }).done(function(result){
                if(result.status == true){
                    response = false;
                }else{
                    response = true;    
                }
           });
           return response;
       }, "Email already taken.");
       
       // Custom validation with ajax call the check mobile number already exist in database
       jQuery.validator.addMethod("checkMobileExist", function(value, element)
       {
           var response = false;
           
           var post_url_check_mobile = baseurl + "user/checkMobileExist/";
           
           $.ajax({
                  type: "POST",
                  url: post_url_check_mobile,
                  data: {mob : value},
                  dataType: "json",
                  async: false
           }).done(function(result){
                if(result.status == true){
                    response = false;
                }else{
                    response = true;    
                }
           });
           return response;
       }, "Mobile number already registered.");
       
	   // Custom validation with ajax call the check mobile number already exist in database
       jQuery.validator.addMethod("checkMobileExist2", function(value, element)
       {
           var response = false;
           
           var post_url_check_mobile2 = baseurl + "user/checkMobileExist2/";
           
           if(value == "")
           {
               response = true;
           }
           else
           {
               $.ajax({
                      type: "POST",
                      url: post_url_check_mobile2,
                      data: {mob : value},
                      dataType: "json",
                      async: false
               }).done(function(result){
                    if(result.status == true)
                    {
                        response = false;
                    }else
                    {
                        response = true;    
                    }
               });
           }
           return response;
       }, "Mobile number already registered.");
       
       // Custom validation with ajax call the check phone number already exist in database
       jQuery.validator.addMethod("checkPhoneExist", function(value, element)
       {
           var response = false;
           
           var post_url_check_phone = baseurl +"user/checkPhoneExist/";
           
           if(value == "")
           {
               response = true;
           }
           else
           {
               $.ajax({
                      type: "POST",
                      url: post_url_check_phone,
                      data: {mob : value},
                      dataType: "json",
                      async: false
               }).done(function(result){
                    if(result.status == true)
                    {
                        response = false;
                    }else
                    {
                        response = true;    
                    }
               });
           }
           return response;
       }, "Phone number already registered.");
       
		// Custom validation to validate date format in 'dd/mm/yyyy' and 'dd/mm/yy' format
       jQuery.validator.addMethod('checkDateFormat', function(value, element){
           
		   // date format regular expression which allows 'dd/mm/yyyy' and 'dd/mm/yy' format
           var stringPattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/gm;
           
           if(stringPattern.test(value))
           {
               return true;
           }
           else
           {
               return false;
           }
       },"Please enter correct date.");
       
	   // Custom validation to restrict the white spaces in username / email id
	   jQuery.validator.addMethod('checkWhiteSpaces', function(value, element){
           
           var stringPattern = /\s/;
           
           if(stringPattern.test(value))
           {
               return false;
           }
           else
           {
               return true;
           }
       },"Spaces are not allowed in username.");
	   
	   // Custom validation to validate the current date & birth year
	   jQuery.validator.addMethod('checkDateDifference', function(value, element){
           
		   var birthYear = parseInt( value.substring(value.lastIndexOf('/') + 1)),
				dateNow = new Date(),
				dateDiff = dateNow.getFullYear() - birthYear;
				
           if(dateDiff < 17)
           {
               return false;
           }
           else
           {
               return true;
           }
       },"Please enter less than 18 years of current date.");
	
	
});
