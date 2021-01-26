// Strings and string methods

let fullname = new String('Jack Sparrow');

console.log(fullname[0])

console.log(fullname.length)

var lorem = "         It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less intecbrussel normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).         ";

var isLoreminTheText = lorem.indexOf('Lorem'); // result if "Lorem" is in this string
console.log(isLoreminTheText,"lorem lorem find")

var consoleResult = lorem.lastIndexOf('intecbrussel');
consoleResult = lorem.search('more-or-less')

// extracting strings 
console.log(lorem)
consoleResult = lorem.slice(0,124)
consoleResult = lorem.substring(0,124)
consoleResult  = lorem.replace('intecbrussel','INTEC_BRUSSEL')

consoleResult = lorem.replace("like","00000000000000000000000000000") // find first match word and replace it
consoleResult = lorem.replace(/like/g,"0101010101010101010101")

consoleResult = lorem.toUpperCase();

consoleResult = lorem.toLowerCase();

consoleResult = lorem.concat('NEWWWWW_TEXT')

consoleResult = lorem.trim();
consoleResult = lorem.charAt(12)
consoleResult = lorem[12]
consoleResult = lorem.split(",")
console.log(consoleResult)


// capital letters  = toUpperCase(); when mouse over item
// lower letters = toLowerCase(); when mouse out item












// Numbers

let salary =  new Number(103434434);

console.log(salary)

// Boolean

let yes = new Boolean(true);

console.log(yes)

var url = "https://www.w3schools.com/js/js_string_methods.asp"

// w3schools.com
