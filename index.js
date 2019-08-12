const findAll = (input) => countries.filter(country => country.name.toLowerCase().includes(input)).map((country) => {
     const { name, capital, flag } = country;
     console.log({ flag, name, capital })
     return { flag, name, capital }
})


const findOne = (input) => {
     const result = countries.find(country => country.name.toLowerCase() === input)
     if (!result) return alert("no country")
     return [{ result }]

}


$("#one").on("click", function () {
     let input = $("input[name='searchCountry']").val()
     let dataResult = findOne(input)
     draw(dataResult)
     console.log(input)

})



$("#all").on("click", function (e) {
     let input = $("input[name='searchCountry']").val()
     let dataResult = findAll(input)
     draw(dataResult, e)
     console.log(input)
})

function draw(data, e) {
     $("#slider ul").html("")
     if ((data.length === 1) && ($(e.target).hasClass('one'))) {
          data = data[0].result
          createSlider(data)
     }
     else {
          data.forEach((data) => {
               createSlider(data)
          })
     }
     $("#hide").hide()
}

$("#country").on("change", function () {
     let getCountry = countries.find(country => country.name === ($("#country").val()))
     $("#courency").html("")
     selectCurrency(getCountry)
})

const fillCountry = () => {
     countries.forEach((country) => {
          $('<option/>', {
               'text': country.name,
               'value': country.name
          }).appendTo($("#country"))
     })
}

const selectCurrency = (country) => {
     country.currencies.forEach((currency) => {
          $('<option/>', {
               'text': `${currency.name} - ${currency.symbol}`,
               'value': `${currency.name} - ${currency.symbol}`,
          }).appendTo($("#courency"))
     })
}

fillCountry()