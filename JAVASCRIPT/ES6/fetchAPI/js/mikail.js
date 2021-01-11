var number =1;
async function getNumber(num){
    let data = await num;
    return data;
}

getNumber(number).then(printIt=>console.log(printIt))