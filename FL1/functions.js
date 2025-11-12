function greet(name) {
  return 'Hej ' + name;
}

const greetValue = greet('Mikaela');
console.log(greetValue);

const greetArrow = (name) => 'Hej ' + name;

const greetExpr = function (name) {
  return 'Hej ' + name;
};
console.log(greetArrow('Leia'));
console.log(greetExpr('Yoshi'));

let price = 10;
price = 20;
function withTax(price) {
  price = price * 1.25;
  return price;
}
console.log(withTax(100));
console.log(withTax(price));
X;
//console.log(price);
