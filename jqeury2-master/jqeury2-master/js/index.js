
        let dataHtml=""
        
        const findAll = (input) =>  countries.filter(country => country.name.toLowerCase().includes(input)).map((country)=> {
        const { name, capital, flag } = country;
        console.log({flag, name, capital})
        collectDataToHtml({flag, name, capital})
        // return {flag, name, capital}
        })


        const findOne = (input) => {
        const result = countries.find(country => country.name.toLowerCase() === input)
        if(!result) return alert("no country") 
        // return 
        collectDataToHtml(result)
        ifOne()
       }
    

       $("#one").on("click",function(){
            let input =$("input[name='searchCountry']").val()
            findOne(input)
            console.log(input)
            sliderData()
            
       })
       $("#all").on("click",function(){
            let input =$("input[name='searchCountry']").val()
            findAll(input)
            console.log(input)
            sliderData()
       })

       function ifOne(){
        $(".slidesjs-slide").css("left","0px")
       }
       

    const collectDataToHtml=(data)=>{
            dataHtml+=`<img src='${data.flag}' title="${data.capital}">`
        }
        
        function sliderData(){
            
            $("#slides").append( `${dataHtml} <a href="#" class="slidesjs-previous slidesjs-navigation"><i class="icon-chevron-left icon-large"></i></a>
            <a href="#" class="slidesjs-next slidesjs-navigation"><i class="icon-chevron-right icon-large"></i></a>`)
            createSlider()
            if($(".slidesjs-pagination-item").children().size()<2) ifOne()
        }


//// create the plugin
function createSlider() {
    $('#slides').slidesjs({
      width: 940,
      height: 628,
      navigation: false
    });
  };