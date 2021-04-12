const weatherApi = {
    key: "a3bbab8770ef5232683821bf1ba7b5e8",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}



// var AUTOCOMPLETION_URL = 'https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json',
//     ajaxRequest = new XMLHttpRequest(),
//     query = '';


// function autoCompleteListener(textBox, event) {

//     if (query != textBox.value){
//         if (textBox.value.length >= 1){

//             /**
//              * A full list of available request parameters can be found in the Geocoder Autocompletion
//              * API documentation.
//              *
//              */
//             var params = '?' +
//                 'query=' +  encodeURIComponent(textBox.value) +   // The search text which is the basis of the query
//                 '&beginHighlight=' + encodeURIComponent('<mark>') + //  Mark the beginning of the match in a token.
//                 '&endHighlight=' + encodeURIComponent('</mark>') + //  Mark the end of the match in a token.
//                 '&maxresults=5' +  // The upper limit the for number of suggestions to be included
//                 // in the response.  Default is set to 5.
//                 '&apikey=' + APIKEY;
//             ajaxRequest.open('GET', AUTOCOMPLETION_URL + params );
//             ajaxRequest.send();
//         }
//     }
//     query = textBox.value;
// }


/**
 *  This is the event listener which processes the XMLHttpRequest response returned from the server.
 */
// function onAutoCompleteSuccess() {
    /*
     * The styling of the suggestions response on the map is entirely under the developer's control.
     * A representitive styling can be found the full JS + HTML code of this example
     * in the functions below:
     */
//     clearOldSuggestions();
//     addSuggestionsToPanel(this.response);  // In this context, 'this' means the XMLHttpRequest itself.
//     addSuggestionsToMap(this.response);
// }


/**
 * This function will be called if a communication error occurs during the XMLHttpRequest
 */
// function onAutoCompleteFailed() {
//     alert('Ooops!');
// }

// Attach the event listeners to the XMLHttpRequest object
// ajaxRequest.addEventListener("load", onAutoCompleteSuccess);
// ajaxRequest.addEventListener("error", onAutoCompleteFailed);
// ajaxRequest.responseType = "json";

const searchInputBox = document.getElementById('enter-input');


searchInputBox.addEventListener('keypress', (event) => {

    if (event.key == 'Enter') {
        console.log(searchInputBox.value);
        getweatherReport(searchInputBox.value)
    }

 });
// const search = document.getElementById('enter-input');
// const matchList = document.getElementById('match-list');

// const searchStates = async searchText => {
//     const res = await fetch('states.json');
//     const states = await res.json();

//     let matches = states.filter(state => {
//         const regex = new RegExp(`^${searchText}`, 'gi');
//         return state.name.match(regex) || state.abbr.match(regex);

//     });

//     if (searchText.length === 0) {
//         matches = [];
//     }

//     outputHtml(matches);

// };

// const outputHtml = matches => {
//     if (matches.length > 0) {
//         const html = matches.map(match => `
//          <div class = "card card-body mb-1">
//           <h4>${match.name} (${match.abbr}) <span class = "text-primary">${match.capital}</span></h4>
//           <small>Lat: ${match.lat} / Long: ${match.long}</small>
//           </div>
//           `)
//           .join('');

//         matchList.innerHTML = html;

          
//     }
// };

// search.addEventListener('input', () => searchStates(search.value));



function getweatherReport (city) {
        fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
          .then(weather => {
            return weather.json();
          }).then(showWeatherReport);
}
// function search () {
//     var value_field = $('#text').val();
//     $.ajax({
//       // create an ajax request here..and get the value
//       success: function (data) {
//         $('#div').html(data);
//       }
//     });
//   }
  
function showWeatherReport (weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    let header = document.getElementsByClassName('heading');
    let cit = document.getElementsByClassName('city');
    let datjs = document.getElementsByClassName('date');
    let tpt = document.getElementsByClassName('temp');
    let mmax = document.getElementsByClassName('min-max');
    let tpp = document.getElementsByClassName('weather');
    

    // if(weatherType.textContent == 'Rain'){
    //     document.body.style.backgroundImage = "url('rainy.jpg')";
    // }
    if(weather.main.temp <= 10){
        document.body.style.backgroundImage = "url('a2.jpg')"
        tpt[0].style.color = "black"
        mmax[0].style.color = "black"
        tpp[0].style.color = "black"
        tpp[0].style.color = "black"
        header[0].style.color = "black"
        cit[0].style.color = "black"
        datjs[0].style.color = "black"
    }
    else if(weather.main.temp >= 11 &&  weather.main.temp <= 25){
        document.body.style.backgroundImage = "url('goodweatherr.jpg')"

    }
       
     else if(weather.main.temp >= 25 &&  weather.main.temp <= 30){
        document.body.style.backgroundImage = "url('clloouds.jpg')"
        tpt[0].style.color = "black"
        mmax[0].style.color = "black"
        tpp[0].style.color = "black"
        header[0].style.color = "black"
        cit[0].style.color = "black"
        datjs[0].style.color = "black"  

     }
        
    else if(weather.main.temp >= 31 &&  weather.main.temp <= 40){
        document.body.style.backgroundImage = "url('sunshine.jpg')"  
       
        tpt[0].style.color = "black"
        mmax[0].style.color = "black"
        tpp[0].style.color = "black"
        header[0].style.color = "black"
        cit[0].style.color = "black"
        datjs[0].style.color = "black"

    }
 
     else if(weather.main.temp >= 41 &&  weather.main.temp <= 60){
        document.body.style.backgroundImage = "url('veryhot.jpg')"   

     }
    

    

    let minMaxtemp = document.getElementById('min-max');
    minMaxtemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);
}

function dateManage(dateArg){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
