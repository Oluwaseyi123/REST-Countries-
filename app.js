const countriesContainer = document.querySelector('.countries-container')
class GetCountryFromUser{
    async getCountry(){
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const responseJSON = await response.json()
        return responseJSON;
    }
    async searchCountry(country){
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        const responseJSON = await response.json()
        return responseJSON;
    }
    async searchRegion(region){
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${region}`)
        const responseJSON = await response.json()
        return responseJSON;
    }
}
class UI{
    constructor(){
        this.country = document.querySelector('.countries-container')
    }
    showCountry(country){
    this.country.innerHTML = `
    <div class="country-container">
                <img src="${country.flag}" alt="Country Flag">
                <div class="country-info">
                    <h2><a href=# class ="info">${country.name}</a></h2>
                    <p>Population: <span>${country.population}</span> </p>
                    <p>Region: <span>${country.region}</span> </p>
                    <p>Capital: <span>${country.capital}</span> </p>
    
                </div> 
            </div>
    `
    }
    testing(){
        console.log('testing')
    }
}
function checkCountry(){
    const getCountryFromUser = new GetCountryFromUser()
    getCountryFromUser.getCountry()
    .then( res => {
      res.forEach(displayCountries)
    } )
    .catch(err => {
        console.log(err)
    })
}

function displayCountries(country){
    const countryContainer = document.querySelector('.country-container')
    const countriesContainer = document.querySelector('.countries-container')
    countriesContainer.innerHTML += `
    <div class="country-container">
                <img src="${country.flag}" alt="Country Flag">
                <div class="country-info">
                    <h2><a href=# class = "info" >${country.name}</a></h2>
                    <p>Population: <span>${country.population}</span> </p>
                    <p>Region: <span>${country.region}</span> </p>
                    <p>Capital: <span>${country.capital}</span> </p>
    
                </div> 
            </div>
    `
    const countriesDelegation = countriesContainer.children

    // for (let i = 0; i < countriesDelegation.length; i++) {
    //     const country = countriesDelegation[i]
    //     country.addEventListener('click', () => {
    //         window.open("../specificCountry/index.htm");
    //        const blo = country.getElementsByTagName('img')
    //         console.log(country)
    //         console.log(blo)
    //     })
    //     //console.log(countriesDelegation[i])
    // } 
   
    //console.log(countryContainer)
    // countryContainer.addEventListener('click', () => {

    //  })
}

const searchField = document.querySelector('#search-field')
searchField.addEventListener('input', (e) => {
    const ui=new UI()
    const userText = e.target.value
    if(userText !== ''){
        const getCountryFromUser = new GetCountryFromUser()
        const ui=new UI()
        getCountryFromUser.searchCountry(userText)
        .then((data) => {
            if(data.message == 'Not Found'){
                console.log('not found')
            }else{
                ui.showCountry(data[0])
            }
           
        })
    }else{
        e.preventDefault()
        console.log('idk')
        countriesContainer.innerHTML = ''
        checkCountry()
    }
})

//Do this later
const filterRegion = document.getElementById('filter-region')
const regionValue = filterRegion.value
filterRegion.addEventListener('change', () => {
    if(regionValue == 'Asia'){
        console.log('asia')
    }else{
        console.log('lol')
    }
})

const darkModeDiv = document.querySelector('.dark-mode-div')
darkModeDiv.addEventListener('click', (e) => {
     const html = document.querySelector('html');
     html.classList.toggle('dark')
   
}) 

checkCountry()
