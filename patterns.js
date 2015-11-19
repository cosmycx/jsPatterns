//function declaration-------------------------------------
function rectArea(w,h){
	return w*h;
}
//console.log(rectArea(3,4));


//function expression--------------------------------------
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


//singleton, one object only--------------------------------
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


//module pattern---------------------------------------------
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


//revealing module pattern------------------------------------
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


//constructor pattern------------------------------------------
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


//constructor with prototype-----------------------------------
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


//prototype pattern, appends all methods at once---------------
var Cat = {
	name: 'Garfield',
	size: 'large',
	age: 5
}
Cat.prototype = {
	speak : function(){
		return 'miaow';
	}
}
// console.log(Cat.prototype.speak());
// kitty = Object.create(Cat);
// console.log(kitty.prototype.speak());


//command pattern, declare methods first and an init/execute method---------
var Dog = {//methods
	speak: function() {
		return 'woof';
	},//execute:
	init: function(name){
		return Dog[name] && Dog[name].apply(Dog, [].splice.call(arguments,1));
	}
	
}
//console.log(Dog.init('speak','Rover'));


//factory pattern------------------------------------------------
function Car (options){
	this.color = options.color || 'red';
	this.doors = options.doors || 4;
	this.model = options.model || 'sedan';
}

function Truck (options){
	this.color = options.color || 'red';
	this.doors = options.doors || 4;
	this.seats = options.seats || 4;
}

function VehicleFactory(){
	VehicleFactory.prototype.createVehicle = function(options){
		switch(options.vehicleType){
			case 'car': this.vehicleClass = Car; break;
			case 'truck': this.vehicleClass = Truck; break;
		}
	return new this.vehicleClass(options);
	}
}

var carFactory = new VehicleFactory();
var car = carFactory.createVehicle({
	vehicleType:'car',
	color:'yellow',
	doors:6
});
// console.log(car instanceof Car);
// console.log(car);


