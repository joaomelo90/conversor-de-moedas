const convertButton = document.querySelector(".convert-button") //1 -variavel com nome qualquer = html.queryselector(botão que esta no html)
const convertSelect = document.querySelector(".currency-euro") //input que seleciona euro-dolar
const convert = document.querySelector(".currency-real")


async function convertValues() {  //3 abri minha função

    const inputCurrcyVelue = document.querySelector(".input-currency").value  // 3- input que esta o valor,valor a converter
    const valorToConvert = document.querySelector(".valor-real")
    const valorConvertido = document.querySelector(".valor-dolar")



    const data = await fetch("https://economia.awesomeapi.com.br/last/USD,EUR,BTC,GBP").then(Response => Response.json())

    const dolartoday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const libraToday = data.GBPBRL.high
    const Bitcointoday = data.BTCBRL.high




    if (convertSelect.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrcyVelue / dolartoday)
    }
    
    //if ( convert.value == "dolar" && convertSelect.value == "euro"){
//        valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {//valor dola*euro porem não deu certo pois o valor do dolar/euro e o valor brasileiro
  //          style: "currency",
    //        currency: "EUR"
      //  }).format(inputCurrcyVelue * euroToday)


//    }


    if (convertSelect.value == "euro") {
       valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrcyVelue / euroToday)
    }

    if (convertSelect.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrcyVelue / realToday)
    }

    if (convertSelect.value == "libra") {
        valorConvertido.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrcyVelue / libraToday)
    }

    if (convertSelect.value == "bitcoin") {
        valorConvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrcyVelue / Bitcointoday)
    }


    if (convert.value == "real") {
        valorToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrcyVelue)
    }
  


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".img-bandeira")

    if (convertSelect.value == "dolar") {
        currencyName.innerHTML = "Dolar"
        currencyImg.src = "./img/estados-unidos (1) 1.png"
    }
    if (convertSelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./img/euro.png"

    }

    if (convertSelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./img/brasil 2.png"

    }

    if (convertSelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./img/libra 1.png"

    }

    if (convertSelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./img/bitcoin 1.png"

    }
}
function troca() {

    const currencyNameOne = document.querySelector(".imgbra")
    const currencyImgOne = document.getElementById("currency-nome-valor")

    if (convert.value == "libra") {
        currencyImgOne.innerHTML = "Libra"
        currencyNameOne.src = "./img/libra 1.png"

    }
    if (convert.value == "dolar") {
        currencyImgOne.innerHTML = "Dolar"
        currencyNameOne.src = "./img/estados-unidos (1) 1.png"

    }
    if (convert.value == "euro") {
        currencyImgOne.innerHTML = "Euro"
        currencyNameOne.src = "./img/euro.png"

    }
    if (convert.value == "real") {
        currencyImgOne.innerHTML = "Real"
        currencyNameOne.src = "./img/brasil 2.png"

    }
    if (convert.value == "bitcoin") {
        currencyImgOne.innerHTML = "Bitcoin"
        currencyNameOne.src = "./img/bitcoin 1.png"

    }


    convertValues()
}

convert.addEventListener("change", troca)
convertSelect, addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues) //2 ouvinte- função que e chamada quando clicar no meu botão(click no botão, 3- nome da minha função  )


