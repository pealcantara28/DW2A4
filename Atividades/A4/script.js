import CEP from './modules/cep.js'
import Covid from './modules/covid.js'
var viacep = new CEP()
var covid = new Covid()

document.getElementById('CEP').addEventListener('blur', (e) => {
    let cep = document.getElementById('CEP').value
    getCep(cep)
})

function getCep(cep) {
    viacep.getData(cep).then(responseCep => responseCep.json())
        .then(endereco => {
            getCovid(endereco.uf)
        })
}

function getCovid(uf) {
    covid.getData(uf)
        .then(responseCovid => responseCovid.json())
        .then(covidData => {
            generateTable(covidData)
        })
}

function generateTable(covidData) {
    covidData = [covidData]
    var table = new Tabulator("#tableCovid", {
        data: covidData,
        layout: "fitColumns",
        resizable: false,
        columns: [
            { title: "UF", field: "uf", tooltip: "Estado consultado", resizable: false, headerSort: false, headerHozAlign: "center" },
            { title: "Casos", field: "cases", tooltip: "Total de Casos de Covid-19 confirmados no Estado", hozAlign: "right", sorter: "number", widthGrow: 2, resizable: false, headerSort: false, headerHozAlign: "center" },
            { title: "Suspeitas", field: "suspects", tooltip: "Total de Casos de Suspeita de Covid-19 no Estado", hozAlign: "right", sorter: "number", widthGrow: 2, resizable: false, headerSort: false, headerHozAlign: "center" },
            { title: "Mortes", field: "deaths", tooltip: "Total de Mortes relacionadas a Covid-19 confirmados no Estado", hozAlign: "right", sorter: "number", widthGrow: 2, resizable: false, headerSort: false, headerHozAlign: "center" },
        ],
    });
}
