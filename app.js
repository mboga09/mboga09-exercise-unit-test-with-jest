// this is my function that sums two numbers (funcion flecha)
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//From Euro to Dollar

const fromEuroToDollar = (euro)=>{
    let conversionDolar = euro * oneEuroIs["USD"]
    return conversionDolar
}

//From Dollar to Yen

const fromDollarToEuro = (dollar)=>{
    let conversionEuro = dollar / oneEuroIs["USD"]
    return conversionEuro
}

const fromDollarToYen= (dollar)=>{
    let conversionEuro = fromDollarToEuro(dollar)
    let conversionYen = conversionEuro * oneEuroIs["JPY"]
    return conversionYen
}


//From Yen to Pound

const fromYenToEuro = (yen)=>{
    let conversionYenEuro = yen / oneEuroIs["JPY"]
    return conversionYenEuro
}

const fromYenToPound = (yen)=>{
    let conversionYenEuro = fromYenToEuro(yen)
    let conversionPound = conversionYenEuro * oneEuroIs["GBP"]
    return conversionPound
}

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}; //Agregar aqui cada funcion que quiero exportar