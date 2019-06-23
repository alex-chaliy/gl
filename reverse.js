const str = "1234abc";

String.prototype.reverse = function() {
	const str = this.toString();
	let _str = "";

	for(let i = str.length - 1; i >= 0; i--) {
		_str += str[i];
	}

	return _str;
}

console.log( str.reverse() ); 

