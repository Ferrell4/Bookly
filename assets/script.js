/*function getBooks(){
    document.getElementById('output').innerHTML= "";
    fetch("http://openlibrary.org/search.json?q=" + document.getElementById("input").value)
    .then(a=> a.json())//converts the response which is currently a string into an object we can then read 
    .then(response =>{
        for(var i = 0; i<10;i++){
            document.getElementById("output").innerHTML +="<h2>" + response.docs[i].title + "</h2>"+response.docs[i].author_name[0]+" <br> <img src='http://covers.openlibrary.org/b/isbn/" + response.docs[i].isbn[0]+"-M.jpg'><br>";
        }
    } );
}
*/

//response.items.[i].imageLinks.thumbnail  

var openLibraryApi = "http://openlibrary.org/search.json?q="
var googleBooksApi = "https://books.googleapis.com/books/v1/volumes?q="
var googleSearchApi = "https://books.googleapis.com/books/v1/volumes?q="+document.getElementById("input").value+"&key=AIzaSyB0jD4ojzXkBjv5QQueyFNrhDdBgI0Azqc"
var testApi = "https://books.googleapis.com/books/v1/volumes?q=love&key=AIzaSyB0jD4ojzXkBjv5QQueyFNrhDdBgI0Azqc"
console.log(testApi)

function getBooks(){
    document.getElementById('output').innerHTML= "";
    fetch("https://books.googleapis.com/books/v1/volumes?q="+document.getElementById("input").value+"&key=AIzaSyB0jD4ojzXkBjv5QQueyFNrhDdBgI0Azqc")
    .then(a=> a.json())//converts the response which is currently a string into an object we can then read
    .then(response =>{
        // for(var i = 0; i < response.items.length;i++){
        //     document.getElementById("output").innerHTML +="<h2>" + response.items[i].volumeInfo.title + "</h2>"+response.items[i].volumeInfo.authors+" <br> <img src='http://books.google.com/books/content?id=" +response.items[i].id+ "&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'><br>";
        // }
        for(var i = 0; i < 4;i++){
            document.getElementById("output").innerHTML +="<h2>" + response.items[i].volumeInfo.title + "</h2>"+response.items[i].volumeInfo.authors+" <br> <img src='http://books.google.com/books/content?id=" +response.items[i].id+ "&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'><br>" + response.items[i].volumeInfo.description;
        }
    } );
}