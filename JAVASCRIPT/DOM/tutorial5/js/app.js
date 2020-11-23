// selectors

// var firstname= document.querySelector('.firstname')

// var inputs = document.querySelectorAll('input');

// var firstname = inputs[0]
const [first] = document.querySelectorAll('input')
// console.log(firstname.placeholder)

var [firstname,lastname,email,street,city,zipcode,birthdate,phone,pass,confirm_pass,term] = document.querySelectorAll('input');

var [country,gender,country_code] = document.querySelectorAll('select');

var submitBtn = document.querySelector('button')

const formDatas=[]

submitBtn.addEventListener('click',function(e){
  
  if(term.checked == true){
    console.log('accepted')
    let formObj = {
      firstname:firstname.value,
      lastname:lastname.value,
      email:email.value,
      street:street.value,
      city:city.value,
      country:country.selectedOptions[0].value,
      zipcode:zipcode.value,
      gender:gender.selectedOptions[0].value,
      phone:country_code.selectedOptions[0].value + phone.value, // +32 + 4445556655 // +324445556655
      password:pass.value,
      confirm:confirm_pass.value
    }
    //console.log(formObj)
    let temp = formDatas
    temp.push(formObj) // update
    formDatas = temp; // updated array with new  obj
  }else{
    console.log('not accepted')
  }

  console.log(formDatas)

  e.preventDefault();

})

// on change event
country.addEventListener('change',function(){
  console.log(country.selectedOptions[0].value)
})

// function myArray(){
//   return ['name1','name2','name3']
// }

// var [n1,n2,n3] = myArray();

// console.log(n2)


// console.log(firstname,lastname,email,street,city,zipcode,birthdate,phone,pass,confirm_pass,term)

console.log(first.setAttribute('ads',1))
console.log(first)

formDatas.push('asdasd')
const temp = [1,2,3]
formDatas= temp;
console.log(formDatas)