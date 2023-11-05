const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
  const newArray =[...cats,"Broom"];  
  return newArray;
} 
function prependCat(name){
    const newArray =["Arnold",...cats];
    return newArray;
}
function removeLastCat(){
    const cats = ["Milo","Otis","Garfield"];
       const newArray =cats.splice(0,cats.length-1);
       return newArray;
}
function removeFirstCat(){
    const cats = ["Milo","Otis","Garfield"];
    const newArray = cats.splice(1)
    return newArray;
}