document.addEventListener("DOMContentLoaded", function(event) {
    'use strict';

    var lat = document.getElementById('lat');
    var long = document.getElementById('long');
    var watchlat = document.getElementById('watchlat');
    var watchlong = document.getElementById('watchlong');
    var options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 1000
    };

    (function() {
        navigator.geolocation.getCurrentPosition(showPosition, positionError, options);
        navigator.geolocation.watchPosition(position, positionError, options);

        function position(position) {
            var coords = position.coords;
            watchlat.innerHTML = coords.latitude;
            watchlong.innerHTML = coords.longitude;
        }

        function showPosition(position) {
            var coords = position.coords;
            lat.innerHTML = coords.latitude;
            long.innerHTML = coords.longitude;
        }

        function positionError(e) {
            switch (e.code) {
                case 0: // UNKNOWN ERROR
                    console.log('Unknown Error');
                    break;
                case 1: // PERMISSION DENIED
                    console.log('Permission Denied');
                    break;
                case 2: // POSITION UNAVAILABLE
                    console.log('Position Unavailable');
                    break;
                case 3: // TIMEOUT
                    console.log('Timeout');
                    break;
            }
        }
    })();
});
