var ar = [121, 200, 313, 13, 979, 10, 202, 11];
(function isPalindrome(arr) {
  var b =[];
  var c;
  for(i=0; i<arr.length; i++) {
    var a = arr[i];
    var str = a + '';
    var c = true;
  for (j=0; j<str.length/2; j++) {
    if(str[j] !== str[str.length-1-j]) {
       c = false;
       break;
    }
  }
  if (c == true) {
    b.push(arr[i]);
  }
}
console.log(b);
})(ar);