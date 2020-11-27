

function searchLat(){
  var url = "https://en.wikipedia.org/w/api.php";
 var params = {
     action: "query",
     prop: "coordinates",
     titles: "Wikimedia Foundation",
     format: "json"
 };
 url = url + "?origin=*";
 Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});
 fetch(url)
     .then(function(response){return response.json();})
     .then(function(response) {
         var pages = response.query.pages;
         for (var page in pages) {
             getElementById('demo').innerHTML = ("Latitute: " + pages[page].coordinates[0].lat);
             getElementById('demo').innerHTML =("Longitude: " + pages[page].coordinates[0].lon);
         }
     })
     .catch(function(error){console.log(error);});

}


function randon (){
  var url = "https://en.wikipedia.org/w/api.php";

var params = {
  action: "query",
  format: "json",
  list: "random",
  rnlimit: "5"
};

url = url + "?origin=*";
Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

fetch(url)
  .then(function(response){return response.json();})
  .then(function(response) {
      var randoms = response.query.random;
      for (var r in randoms) {
          getElementById('demo').innerHTML =(randoms[r].title);
      }
  })
  .catch(function(error){getElementById('demo').innerHTML =(error);});
}
