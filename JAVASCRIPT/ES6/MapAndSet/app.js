// MAP


/*

key-value

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise. {isKeyExist?}
map.delete(key) – removes the value by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.


*/
let keyName='Intecbrussel'
let value = {
    a:1,
    b:2
}
const myFunc = ()=>console.log('hello map!')
let test = [1,2,3]
// init map
let DataCollection = new Map(); // map

// set method
DataCollection.set('key1','intecbrussel')
DataCollection.set(keyName,value)
DataCollection.set('myFunction',myFunc)
DataCollection.set('obj1',{x:6,y:7})
DataCollection.set('firstname','Jack')
DataCollection.set(true,false)
DataCollection.set('age',29)
DataCollection.set('myArray',[1,2,3])
DataCollection.set(test,[3,2,1])


// get method
let getResult;

getResult= DataCollection.get(keyName)
getResult = DataCollection.get('obj1')
getResult = DataCollection.get('myFunction') // this is a function
getResult = DataCollection.get(true)
getResult=  DataCollection.get('myArray')
getResult=  DataCollection.get(test)


//getResult()

// has(keyName)

getResult = DataCollection.has(keyName) // true
getResult = DataCollection.has('WebDeveloper') //false
getResult = DataCollection.has(test); // true



let DataCollection1 = new Map([['Player','Jack'],['score',100]]);


DataCollection.forEach((value,key,MapItself)=>console.log(`Key:${key} Value:${value}`))
console.log('##########################################')
for (let [key,value] of DataCollection.entries()){
    console.log(`${key} - ${value}`)
}

console.log(DataCollection1)
console.log(getResult)
console.log(DataCollection)

// Set


/*

new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

*/

let SetCollection = new Set();


SetCollection.add(100)
SetCollection.add(100)
SetCollection.add('intecbrussel')
SetCollection.add('intecbrussel')
SetCollection.add(true)
SetCollection.add(true)
SetCollection.add([55,66,77])
SetCollection.add({x:1,y:2,z:3})

let SetCollectionResult;
// size method
SetCollectionResult = SetCollection.size;


SetCollectionResult = SetCollection.delete('intecbrusselx')

// has  => isValueExist?
SetCollectionResult = SetCollection.has(1000)

// clear()
//SetCollection.clear();

// ForEach
SetCollection.forEach(value =>console.log(value))



// console.log("SetCollectionResult=> ",SetCollectionResult)
// console.log(typeof SetCollection)
 console.log(SetCollection)

let iterator = SetCollection.values();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(SetCollection.values())


// for(value of SetCollection){
//     console.log(value)
// }

while(iterator.next().done !=true){ // 
    console.log(iterator.next())
}
