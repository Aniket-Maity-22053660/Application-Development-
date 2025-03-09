/*

The checkPhoneNumber() function should accept phoneNumber as input and check if it is valid.

The provided phoneNumber is a valid phoneNumber if its value matches with any of the pattern suggested below:


+1 0999999999, 
+1 099-999-9999, 
+1 (099)-999-9999, 
  +1 (099)9999999, 
  +1 099 999 9999, 
  +1 099 999-9999, 
  +1 (099) 999-9999, 
  +1 099.999.9999
  +10999999999, 
  +1099-999-9999, 
  +1(099)-999-9999, 
  +1(099)9999999, 
  +1099 999 9999, 
  +1099 999-9999, 
  +1(099) 999-9999, 
  +1099.999.9999
  
  The function should return true if validation criteria is satisfied else should return false.
  
  Use Regular Expression to perform validation check.

*/

module.exports = function replaceString(inputString, searchString, replaceWith) {

  // Check if all inputs are strings
  if (
    typeof inputString !== 'string' ||
    typeof searchString !== 'string' ||
    typeof replaceWith !== 'string'
  ) {
    return "Invalid Input Types, All Inputs Should Be of Type String !!";
  }

  // Replace occurrences of searchString with replaceWith
  return inputString.replace(new RegExp(searchString, 'g'), replaceWith);
};