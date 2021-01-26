// sessionStorage

// name-value pairs


console.log(typeof sessionStorage)


// setItem method
sessionStorage.setItem('PHPSESSID','287328738278378ccccsdasdsadasd2')
sessionStorage.setItem('intec','brussel')

// getItem
let name =  sessionStorage.getItem('PHPSESSID')
name = sessionStorage.getItem('intec')

console.log(name)

// removeItem
sessionStorage.removeItem('PHPSESSID')

// clear method
sessionStorage.clear();