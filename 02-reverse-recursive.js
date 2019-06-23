/** reverse recursive */ 

String.prototype.reverse = function() {
	const str = this.toString();
	let i = str.length - 1;
	let output = "";

	r();

	return output;

	function r() {
		output += str[i];

		--i;
		if(i >= 0) {
			r();
		}
	}
}


console.log( "1234asd".reverse() );