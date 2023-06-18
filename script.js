// question-1

const parent={
    display:function(){
        console.log("Hii!!!")
    }
}

const child1= Object.create(parent)
child1.name = function(){
    console.log("This is a Child 1")
}

const child2= Object.create(child1)

child2.name=function(){
    console.log("vasu")
}

child2.name()
child2.display()

// question-2

function Parent(name) {
    this.name = name;
  }
  
  
  Parent.prototype.greet = function() {
    console.log('Hello, my name is ' + this.name);
  };
  
  
  function Child(name, age) {
    Parent.call(this, name); // Inherit properties from Parent
    this.age = age;
  }
  
  
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
  
  
  Child.prototype.introduce = function() {
    console.log('I am ' + this.name + ' and I am ' + this.age + ' years old.');
  };
  

  var parent1 = new Parent('John');
  var child = new Child('Alice', 7);
  
 
  parent1.greet(); // Hello, my name is John
  child.greet(); // Hello, my name is Alice
  child.introduce();//I am Alice and I am 7 years old.


//   question-3
Array.prototype.sum = function() {
    return this.reduce(function(acc, val) {
      return acc + val;
    }, 0);
  };
  
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = [10, 20, 30, 40, 50];
  var arr3 = [3, 7, 12, 15, 21];

  var sum1 = arr1.sum();
  var sum2 = arr2.sum();
  var sum3 = arr3.sum();
  
  console.log("Sum of arr1:", sum1); 
  console.log("Sum of arr2:", sum2); 
  console.log("Sum of arr3:", sum3);

//   question-4

function getAllPropertyNames(obj) {
    var propertyNames = [];
  
    var ownProperties = Object.getOwnPropertyNames(obj);
    propertyNames = propertyNames.concat(ownProperties);
  
    var prototype = Object.getPrototypeOf(obj);
  
    if (prototype !== null) {
      var inheritedProperties = getAllPropertyNames(prototype);
      propertyNames = propertyNames.concat(inheritedProperties);
    }
  
    return propertyNames;
  }

  var person = {
    name: 'John',
    age: 30,
  };

  Object.prototype.country = 'USA';
 
  var allPropertyNames = getAllPropertyNames(person);
 
  console.log(allPropertyNames);

