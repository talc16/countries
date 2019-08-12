const nameFlage = countries.reduce((flagOfCountry, country)=>{
    const {name, flag} =country
    return{...flagOfCountry, [name]: {flag} }
},{})

console.log(nameFlage)