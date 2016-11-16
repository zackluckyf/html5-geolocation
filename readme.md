## Synopsis

Small project involving HTML5 geolocation

## Template

navigator.geolocation.getCurrentPosition(showPosition, positionError, options);

navigator.geolocation.watchPosition(showPosition, positionError, options);

```
var options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 1000
};
```

Both api calls take two callback functions, one for success and one for errors also optionally an object to set options
