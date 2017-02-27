var dice = {
	sides: 6,
	roll: function () {
  		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  		console.log(randomNumber);
  		return randomNumber;
	}
}

var diceTen = {
	sides: 10,
	roll: function () {
  		var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  		console.log(randomNumber);
	}
}