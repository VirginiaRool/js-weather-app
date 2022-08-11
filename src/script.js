let apiKey = "c7cd54d7f273febb5e037c3f52d9dfdb";
let city = "London,uk";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

console.log(apiUrl);
