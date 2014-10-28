$(document).ready(function() {
  
  var parseAPPID = "W91Wk1zFsAuDszjC07tMNEaatOf4cM1DS5m2k03P";
  var parseJSID = "rReOROOQgAkOePRoPa8TJ9UavsqAi2za36LOGIfh";
  
  Parse.initialize(parseAPPID, parseJSID);
// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    var geoData=['Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n'
          ];
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);

var point = new Parse.GeoPoint({geoData});