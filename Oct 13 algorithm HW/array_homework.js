let arr=[1,2,3,43,5,6,7,89,10]

let map1=arr.map(x => x).reverse();
console.log(map1);

let map2=arr.map(x => x*2);
console.log(map2);

let map3=arr.map(x => x -1).reverse();
console.log(map3);

let map4=arr.filter(x => x >= 6);
console.log(map4);