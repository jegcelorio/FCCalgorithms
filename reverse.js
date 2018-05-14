//version iterating an array

function reverseString(str){
  var sepString = str.split('');
  var revString = '';

  //the array sepString has to be iterated backwards in order to reverse its items
  for (var i=sepString.length-1; i>=0; i--){
    revString = revString + sepString[i];
  }

  str = revString;
  return str;
}

//version implemementing the reverse and join methods
function reverseString(str){
  var sepString = str.split('');
  var revString = sepString.reverse();
  str = revString.join('');
  return str;
}

reverseString("hello");
