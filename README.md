Validations
===========

jQuery Validations using jzaefferer/jquery-validation

This is custom documentation for **jquery.validation.js.**
The purpose of this documentation is that to understand the custom validation method simply with examples.

Here I am giving some examples so that you can understand the custom validation more friendly and you come to know that how awesome this jquery.validation plugin is...

You can declare the variable for form like below
```
var form = $('#registrationForm');
```
By using this "form" elemenent you can validate your form, look at the code below.
```
var validator = form.validate({ });
```

Inside the curly braces you can write your validation code.

Inbuilt things in Plugin:

**1) rules :** These are the rules which you have to validate for particular field.

**2) messages :** These are the custom messsages shown to user if field is not validated.

Things written by me:

**1) mobile2 :** This is the field name which I want to validate.

**2) notEqualTo :** This is the custom rule to validate the mobile2 field.

**3) checkMobileExist2 :** This is also custom rule to validate the mobile2 field.

The field not validates if all rules are not receiving "true" result from validation function.

After this we have to see about the custom methods, not the "var validator" comes in focus.
The validate() method search for the methods which are associated with the "validator" object.

How to add methods to validator object?
```
jQuery.validator.addMethod("notEqualTo", function(value, element) {}, "");
```
Here **"notEqualTo"** the name of method which associated with **"validator"** object.
Inside **{}**, you have to write your validation logic.
Inside **""**, you have to write your custome validation error message; If you are going to provide custome message in **"messages"** under **validate()** then you need not mentioned any message here, so you can left it blank.

```
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
```
       
In above code, I left **""** blank because I already given message.
