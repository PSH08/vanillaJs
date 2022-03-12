const API_KEY = '92ccbff7b20cba04d700abc9bb70504a'

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(Response => Response.json()).then(data => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child')
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${parseInt(data.main.temp)}º`;
  });
}
function onGeoError() {
  alert("Can't find you. No Weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
