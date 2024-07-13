
const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector(".currency-to-convert")

function valueToConvert(){
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    if(currencySelectConvert.value == "dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue)
    }
    if(currencySelectConvert.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue)
    }
    if(currencySelectConvert.value == "libra"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue)
    }
    if(currencySelectConvert.value == "bitcoin"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue)
    }
    if(currencySelectConvert.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrencyValue)
    }
}

function changeValueToConvert() {
    const currencyName = document.querySelector(".cash-name-to-convert")
    const currencyImage = document.querySelector("#currency-img-to-convert")

    if(currencySelectConvert.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src ="./assets/estados-unidos.png"
    }
    if(currencySelectConvert.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src ="./assets/euro.png"
    }
    if(currencySelectConvert.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if(currencySelectConvert.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if(currencySelectConvert.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil.png"
    }

    valueToConvert()
}


currencySelectConvert.addEventListener("change", changeValueToConvert, valueToConvert)




function convertValues(){
    const inputCurrencyValue = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    
    console.log(currencySelect.value)
    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.02
    const bitcoinToday = 308534.42
    const realToday = 1.00

    if(currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    if(currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style:"currency",
            currency:"BRL"
        }).format(inputCurrencyValue / realToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}


function changeCurrency() {
    const currencyName = document.querySelector(".cash-name-converted")
    const currencyImage = document.querySelector("#currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src ="./assets/estados-unidos.png"
    }
    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src ="./assets/euro.png"
    }
    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if(currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if(currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/brasil.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)