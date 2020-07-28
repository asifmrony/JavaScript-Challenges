/*grab the input value*/

var button = document.querySelector(".js-go");
button.addEventListener('click', function(){
    var input = document.querySelector("input").value;
    console.log(input);
    pushToDOM(input);

});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){
    var input = document.querySelector("input").value;
    
    /*if key ENTER is pressed*/
    if(e.which === 13){
       pushToDOM(input);
       }
    
});


/*Do the Data stuff with API*/
var url = "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

//ajax request
function reqListener () {
    var response = this.response;
    pushToDOM(response);
}

var giphyRequest = new XMLHttpRequest();
giphyRequest.addEventListener("load", reqListener);
giphyRequest.open("GET", url);
giphyRequest.send();




/* Show me the GIFs */
function pushToDOM(input){
    //convert data to object
    var dataResponse = JSON.parse(input);
    var imageURLs = dataResponse.data;
    
    imageURLs.forEach(function(images){
        var allImageUrls = images.images.fixed_height.url;
        console.log(allImageUrls);
        var jsContainer = document.querySelector(".js-container");
        jsContainer.innerHTML += "<img src=\"" + allImageUrls + "\">";
    })
}




