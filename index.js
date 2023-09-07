function reverseString(s) {
	console.log("String passed to function is: ", s);
    return s.split('').reverse().join(',');
}


module.exports=reverseString
