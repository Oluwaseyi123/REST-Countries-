
const container = document.querySelector('.container')
container.addEventListener('click', () => {
    console.log('blo')
})

function showCountry(){
    const getCountryFromUser = new GetCountryFromUser()
    displayCountries()
    console.log(country)
    const container = document.querySelector('.container')
    // container.innerHTML = `
    // <img src="../images/apostolos-vamvouras-mKi4QEJXRCs-unsplash.jpg" alt="">
    // <div class="country-information">
    //     <h2>Bangladesh</h2>
    //     <p>Population: <span>987654443</span> </p>
    //     <p>Region: <span>Europe</span> </p>
    //     <p>Capital: <span>India</span> </p>
    // </div> 
    // `
}
showCountry()
const ui = new UI()
ui.testing()