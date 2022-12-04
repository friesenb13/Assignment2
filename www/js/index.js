var app = new Framework7({
    // App root element
    el: '#app',
    routes: [
        {
            path: '/page1/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
        {
            path: '/page3/',
            url: 'pages/page3.html',
        },
    ],
    colorPicker: {
        modules: ['hb-spectrum', 'hue-slider'],
        url: 'select-color/',
      }
    // ... other parameters
});
var mainView = app.views.create('.view-main')
var $$  = Dom7;

// https://codepen.io/Suriteka/pen/dXmBXM

$("#random").click(function() {
    random = "#" + Math.floor(Math.random()*16777215).toString(16);
    $("#yourColor").css("background-color", random);
    $("#number").html(random);
  });


//page 2 camera stuff
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    $$(document).on('page:init', '.page[data-name="page2"]', function(e){
    var options={
        quality: 80, //default is 50
        destinationType: Camera.DestinationType.FILE_URI //this is the default
    }

    $("#takePhoto").on("click", takePic);

    function takePic(){
        navigator.camera.getPicture(onSuccess, onError, options)
    }
    function onSuccess(imageData){
        console.log(imageData);

        resolveLocalFileSystemURL(imageData, function (fileEntry) {
            var myNewImage = fileEntry.toURL()
            console.log(myNewImage);
            // do something with URL, assign to src or create an html 
            $("#takePhoto").after("<div class='photoDisplay'><img src='"+ myNewImage + " '></div>")
        }, onError);
    }

    function onError(message){
        alert("Photo not taken because" + message)
    }





    
    })

}

// https://codepen.io/tdora28/pen/YzaKBxJ

