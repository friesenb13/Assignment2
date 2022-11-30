var app = new Framework7({
    // App root element
    el: '#app',
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
    ],
    // ... other parameters
});
var mainView = app.views.create('.view-main')

// var $$ = Dom7;
// var lat;
// var long;
// var map;
// var marker;
// var geoOpts ={
//     enableHighAccuracy: true 
// }

// $$(document).on('page:init', '.page[data-name="page2"]', function () {
//     // Page 2 fun here
//      map = new google.maps.Map(document.getElementById('map'),{

//         zoom: 18,
//         center: {lat: lat, lng: long}
//     })
//      marker = new google.maps.Marker({
//         position: {lat: lat, lng: long},
//         map: map
//     })
//     var watchID;

//     $("#startWatch").on('click', function(){
//        watchID= navigator.geolocation.watchPosition(watchSuccess, geoError, geoOpts)
//        $(this).hide();
//        $("#stopWatch").show()
//     })

//     $("#stopWatch").on('click', function(){
//         navigator.geolocation.clearWatch(watchID)
//         $(this).hide();
//        $("#startWatch").show()
//     })
//     function watchSuccess(position){
//         console.log(position)
//         lat= position.coords.latitude
//         long=position.coords.longitude
    
//         var coords = {lat: lat, lng: long}
//         map.setCenter(coords);
//         marker.setPosition(coords);
//         // $("#currentPos").html(lat + "," + long)
//     }
// })

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    // Cordova is now initialized. Have fun!

    //Geolocation paramaters
    
    //get the location as soon as app loads
    // navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOpts);


}

// function geoSuccess(position){
//     console.log(position)
//     lat= position.coords.latitude
//     long=position.coords.longitude

//     var coords = {lat: lat, lng: long}
//     map.setCenter(coords);
//     marker.setPosition(coords);
//     // $("#currentPos").html(lat + "," + long)
// }
// function geoError(message){
//     alert(message.message)
// }