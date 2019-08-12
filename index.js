/// get input of one and draw
$("#one").on("click", function (e) {
    let input = $("input[name='searchCountry']").val()
    let dataResult = findOne(input)
    draw(dataResult,e)
    console.log(input)

})


/// get input of all and draw
$("#all").on("click", function (e) {
    let input = $("input[name='searchCountry']").val()
    let dataResult = findAll(input)
    draw(dataResult, e)
    console.log(input)
})

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


const draw=(data, e)=> {
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
     currency(getCountry)
})

const fillCountry = () => {
     countries.forEach((country) => {
          $('<option/>', {
               'text': country.name,
               'value': country.name
          }).appendTo($("#country"))
     })
}

const currency = (country) => {
     country.currencies.forEach((currency) => {
          $('<option/>', {
               'text': `${currency.name} - ${currency.symbol}`,
               'value': `${currency.name} - ${currency.symbol}`,
          }).appendTo($("#courency"))
     })
}

const createSlider=(data)=> {
    if ($("#slider ul").children().length === 0) {
        const emptySlide = $("<li></li>").html("slide to see flags");
        $("#slider ul").append(emptySlide);
    }
    const flag = $("<li></li>").append($("<img></img>").attr("src", data.flag));
    $("#slider ul").append(flag);

    flag.prepend($("<span></span>").html(`${data.name}-  ${data.capital}`).attr("class", "capital"));
};


fillCountry()