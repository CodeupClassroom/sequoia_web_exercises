"use strict";

// make event listener for changing units of measurement

// event listener for changing number of days to forecast
$("#days").change(function(e) {
    // use the value from $(e.target).val() to send w/ request options

    options.days = $(e.target).val();
    getForecast(options)
});

// Default Options
var options = {
    "days": 3,
    "units": "imperial",
    "lat": 29.426791,
    "lng": -98.489602
};

function getForecast(options) {
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "a8df453d0094a6356c71e33efe98f000",
        lat: options.lat,
        lon: options.lng,
        units: options.units,
        cnt: options.days,

    }).done(function(data) {
        console.log(data);

        $("#location").html("<h1>" + data.city.name + "</h1>");


    }).fail(function(xhr, status, error) {
        console.log(status);
        console.log(error);
    })
}

getForecast(options);

