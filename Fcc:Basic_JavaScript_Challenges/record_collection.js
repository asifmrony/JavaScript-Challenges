// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if(value === "") {
    delete collection[id][prop];
  } else if(prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value); 
  } else {
    collection[id][prop] = value;
  }

  return collection;
}

// Alter values below to test your code
var temp = { 
/* this object created to write less code for testing the logic,
    updating property value's here take place on update record 
    and printing function */
  "albumName" : 5439,
  "property" : "tracks",
  "value" : "Take a chance on Me"
};
updateRecords(temp["albumName"], temp["property"], temp["value"]);

var newVariable = temp["albumName"]

console.log(collection[newVariable])

