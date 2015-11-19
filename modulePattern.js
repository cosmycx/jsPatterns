//function declaration
function rectArea(w,h){
	return w*h;
}
//console.log(rectArea(3,4));

//function expression
var rectangArea = function(w,h){
	return w*h;
}
//console.log(rectangArea(3,7));

//object literal
var bike = {
	color: 'green',
	chain: true,
	speed: 10,
	accelerate: function(){
		this.speed++;
	}
}
// console.log(bike.speed);
// bike.accelerate();
// console.log(bike.speed);

//singleton
function SingleBike(){

	if (typeof SingleBike.instance === 'object') {
	return SingleBike.instance;
    }
    this.color = 'teal',
    this.chain = true,
    this.terrain = false,
    this.bikeDetails = function(){
    	return console.log('bike: '+this.color+' chain: '+this.chain+' terrain: '+this.terrain);
    }
}
// var cityBike = new SingleBike();
// var secondBike = new SingleBike();
// console.log(cityBike.bikeDetails());
// console.log(secondBike.bikeDetails());

//module pattern
var car = (function(){
	var speed = 50;
	return{
		accelerate: function(inSpeed){
			speed+=inSpeed;
		},
		brake: function(inBrake){
			speed-=inBrake;
		},
		displaySpeed: function(){
			return speed;
		}
	}
})();
// console.log(car.displaySpeed());
// car.accelerate(20);
// console.log(car.displaySpeed());

//revealing module pattern
var truck = (function(){
	var speed = 40;
	function accelerate(inSpeed){
			speed+=inSpeed;
	}
	function displaySpeed(){
			return speed;
	}
	return{
		accelerate: accelerate,
		displaySpeed: displaySpeed
	}
})();
// console.log(truck.displaySpeed());
// truck.accelerate(20);
// console.log(truck.displaySpeed());

//constructor pattern
function Person(fName, lName, age){
	this.firstName = fName;
	this.lastName = lName;
	this.age = age;
	this.personDetails = function(){
		return this.firstName+' '+this.lastName+' '+this.age;
	}
}
// var mark = new Person('Mark', 'Doe', 24);
// console.log(mark.personDetails());

//constructor with prototype
function Person(fName, lName, age){
	this.firstName = fName;
	this.lastName = lName;
	this.age = age;
}
Person.prototype.personDetails = function(){
		return this.firstName+' '+this.lastName+' '+this.age;
}
//var mark = new Person('Mark', 'Doe', 24);
// console.log(mark);
// console.log(mark.personDetails());
// // does not run the constructor
// var simon = Object.create(Person.prototype);
// console.log(simon);
// console.log(simon.personDetails());

//prototype pattern, appends all methods at once
Cat = {
	name: 'Garfield',
	size: 'large',
	age: 5
}
Cat.prototype = {
	speak : function(){
		return 'miaow';
	}
}
console.log(Cat.prototype.speak());
kitty = Object.create(Person);
kitty.prototype.personDetails();
//console.log(kitty.speak());


