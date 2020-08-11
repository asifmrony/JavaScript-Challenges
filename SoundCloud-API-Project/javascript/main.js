/* 1 Search */







/* Do the magic with Soundcloud API*/

var SoundCloudAPI = {};

SoundCloudAPI.init = function() {
    SC.initialize({
        client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
    });
}

SoundCloudAPI.init();

SoundCloudAPI.getTrack = function(inputValue) {
    // find all sounds of buskers licensed under 'creative commons share alike'
    SC.get('/tracks', {
        q: inputValue
    }).then(function(tracks) {
        console.log(tracks);
        SoundCloudAPI.renderTracks(tracks);
    });
}

SoundCloudAPI.getTrack('Kety Perry');


/*Display Songs based on Search Query*/
SoundCloudAPI.renderTracks = function(tracks) {
    
    tracks.forEach(function(track){
        console.log(track);
        var jsSearchResults = document.querySelector('.js-search-results');
    
        var newCard = document.createElement("div");
        newCard.classList.add("card");

        //image
        var imageDiv = document.createElement("div");
        imageDiv.classList.add("image");    
        var imageTag = document.createElement("img");
        imageTag.classList.add("image_img")
        imageTag.src = track.artwork_url || "http://www.placekitten.com/290/290";

        //content
        var content =  document.createElement("div");
        content.classList.add("content");

        var header = document.createElement("div");
        header.classList.add("header");
        header.innerHTML = '<a href='+ track.permalink_url +' target="_blank">'+ track.title +'</a>';


        //add to Playlist
        var playList = document.createElement("div");
        playList.classList.add("ui", "bottom", "attached", "button", "js-button");

        var iTag = document.createElement("i");
        iTag.classList.add("add", "icon");

        var spanTag = document.createElement("span");
        spanTag.innerHTML = "Add to Playlist";

        //appendChilds
        newCard.appendChild(imageDiv);
        newCard.appendChild(content);
        newCard.appendChild(playList);
        imageDiv.appendChild(imageTag);
        content.appendChild(header);
        playList.appendChild(iTag);
        playList.appendChild(spanTag);
        jsSearchResults.appendChild(newCard);
        
        /*When User Clicks Add to Playlist button*/
        playList.addEventListener('click', function(e){
           SoundCloudAPI.getEmbed(track.permalink_url);
        });
    });
    
}
    
/*Add to playlist feature*/
SoundCloudAPI.getEmbed = function(trackURL){
    console.log("working Yeah");
    SC.oEmbed(trackURL, {
      auto_play: true
    }).then(function(embed){
        console.log('oEmbed response: ', embed);
        
        var sidebar = document.querySelector('.js-playlist');
        
        box = document.createElement('div');
        box.innerHTML = embed.html;
        
        sidebar.insertBefore(box, sidebar.firstChild);
    });  
}          