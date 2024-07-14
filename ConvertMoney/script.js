const selectOne = document.querySelector("#select-one")
const selectTwo = document.querySelector("#select-two")
const convertButton = document.querySelector("#convert-button")


function convertedValue(){
    const inputCurrency = document.querySelector("#input-currency").value
    const currencyValueOne = document.getElementById("currency-value-one")
    const currencyValueTwo = document.getElementById ("currency-value-two")
    
    const myArray = [
        dolarToday = 5.42, // position 0
        realToday = 1.0, // position 1
        euroToday = 5.92, //position 2
        libraToday = 6.89, //position 3
        bitcoinToday = 325416.25 //position 4
    ] 


    
    if(selectOne.value == "real" && selectTwo.value == "dolar"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency / myArray[0] * myArray[1]) 
    }
    if(selectOne.value == "real" && selectTwo.value == "real"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency / myArray[1] * myArray[1]) 
    }
    if(selectOne.value == "real" && selectTwo.value == "euro"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency / myArray[2] * myArray[1]) 
    }
    if(selectOne.value == "real" && selectTwo.value == "libra"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency / myArray[3] * myArray[1]) 
    }
    if(selectOne.value == "real" && selectTwo.value == "bitcoin"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency / myArray[4] * myArray[1]) 
    }



    if(selectOne.value == "dolar" && selectTwo.value == "real"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency/myArray[1] * myArray[0])
    }
    if(selectOne.value == "dolar" && selectTwo.value == "dolar"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency/myArray[0] * myArray[0])
    }
    if(selectOne.value == "dolar" && selectTwo.value == "euro"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency/myArray[2] * myArray[0])
    }
    if(selectOne.value == "dolar" && selectTwo.value == "libra"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency/myArray[3] * myArray[0])
    }
    if(selectOne.value == "dolar" && selectTwo.value == "bitcoin"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency/myArray[4] * myArray[0])
    }



    if(selectOne.value == "euro" && selectTwo.value == "real"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency/myArray[1] * myArray[2])
    }
    if(selectOne.value == "euro" && selectTwo.value == "dolar"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency/myArray[0] * myArray[2])
    }
    if(selectOne.value == "euro" && selectTwo.value == "euro"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency/myArray[2] * myArray[2])
    }
    if(selectOne.value == "euro" && selectTwo.value == "libra"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency/myArray[3] * myArray[2])
    }
    if(selectOne.value == "euro" && selectTwo.value == "bitcoin"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency/myArray[4] * myArray[2])
    }



    if(selectOne.value == "libra" && selectTwo.value == "real"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency/myArray[1] * myArray[3])
    }
    if(selectOne.value == "libra" && selectTwo.value == "dolar"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency/myArray[0] * myArray[3])
    }
    if(selectOne.value == "libra" && selectTwo.value == "euro"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency/myArray[2] * myArray[3])
    }
    if(selectOne.value == "libra" && selectTwo.value == "libra"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency/myArray[3] * myArray[3])
    }
    if(selectOne.value == "libra" && selectTwo.value == "bitcoin"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency/myArray[4] * myArray[3])
    }



    if(selectOne.value == "bitcoin" && selectTwo.value == "real"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrency/myArray[1] * myArray[4])
    }
    if(selectOne.value == "bitcoin" && selectTwo.value == "dolar"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrency/myArray[0] * myArray[4])
    }
    if(selectOne.value == "bitcoin" && selectTwo.value == "euro"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrency/myArray[2] * myArray[4])
    }
    if(selectOne.value == "bitcoin" && selectTwo.value == "libra"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrency/myArray[3] * myArray[4])
    }
    if(selectOne.value == "bitcoin" && selectTwo.value == "bitcoin"){
        currencyValueOne.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency); currencyValueTwo.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrency/myArray[4] * myArray[4])
    }
}

function changeSelectOne(){
    const currencyNameOne = document.querySelector("#currency-name-one")
    const currencyImgOne = document.querySelector("#img-select-one")

    if(selectOne.value == "dolar"){
        currencyNameOne.innerHTML = "Dólar Americano"
        currencyImgOne.src ="./assets/estados-unidos.png"
    }
    if(selectOne.value == "euro"){
        currencyNameOne.innerHTML = "Euro"
        currencyImgOne.src ="./assets/euro.png"
    }
    if(selectOne.value == "libra"){
        currencyNameOne.innerHTML = "Libra"
        currencyImgOne.src = "./assets/libra.png"
    }
    if(selectOne.value == "bitcoin"){
        currencyNameOne.innerHTML = "Bitcoin"
        currencyImgOne.src = "./assets/bitcoin.png"
    }
    if(selectOne.value == "real"){
        currencyNameOne.innerHTML = "Real"
        currencyImgOne.src = "./assets/brasil.png"
    }

    convertedValue()
}

function changeSelectTwo(){
    const currencyNameTwo = document.querySelector("#currency-name-two")
    const currencyImgTwo = document.querySelector("#img-select-two")

    if(selectTwo.value == "dolar"){
        currencyNameTwo.innerHTML = "Dólar Americano"
        currencyImgTwo.src ="./assets/estados-unidos.png"
    }
    if(selectTwo.value == "euro"){
        currencyNameTwo.innerHTML = "Euro"
        currencyImgTwo.src ="./assets/euro.png"
    }
    if(selectTwo.value == "libra"){
        currencyNameTwo.innerHTML = "Libra"
        currencyImgTwo.src = "./assets/libra.png"
    }
    if(selectTwo.value == "bitcoin"){
        currencyNameTwo.innerHTML = "Bitcoin"
        currencyImgTwo.src = "./assets/bitcoin.png"
    }
    if(selectTwo.value == "real"){
        currencyNameTwo.innerHTML = "Real"
        currencyImgTwo.src = "./assets/brasil.png"
    }

    convertedValue()
}

selectOne.addEventListener("change", changeSelectOne)
selectTwo.addEventListener("change", changeSelectTwo)
convertButton.addEventListener("click", convertedValue)