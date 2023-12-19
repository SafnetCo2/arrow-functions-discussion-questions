// Arrow Function Shortcuts
const playMusic = function (music) {
    return 'playing' + music;

}
playMusic('jazz');

const playMusics = (music) => {
    return `i love playing ${music}`
}
playMusics('drums')

let myfunction = (a, b) => a * b;
myfunction(1, 2)


hello = () => {
    return "Hello World";


}

hello = () => "Hello World"
console.log('hello world')

function greetings(name) {
    return `Hello am ${name}`
}
const greetings = (name) => {
    return `Hello am ${name}`
}
greetings = (name) => `Hello ${name}`
console.log(greetings('Hello am Josephine'));

const fruits = ["Mangoes", "kiwi", "oranges", "letuce"];
console.log(fruits.map((fruit) => fruit.length))