//List of API's used for the application
var openLibraryApi = "http://openlibrary.org/search.json?q="
var googleBooksApi = "https://books.googleapis.com/books/v1/volumes?q="
var googleSearchApi = "https://books.googleapis.com/books/v1/volumes?q=" + document.getElementById("input").value + "&key=AIzaSyB0jD4ojzXkBjv5QQueyFNrhDdBgI0Azqc"
var testApi = "https://books.googleapis.com/books/v1/volumes?q=love&key=AIzaSyB0jD4ojzXkBjv5QQueyFNrhDdBgI0Azqc"
console.log(testApi)

//Buttons for getting the book by name and by year
const book_link = document.querySelector(".bookLink button");
const year_link = document.querySelector(".yearLink button");
const books_grid = document.querySelector(".books-grid");
const years_grid = document.querySelector(".years-grid");


function getAuthor() {
    document.getElementById('output2').innerHTML = "";
    fetch("https://books.googleapis.com/books/v1/volumes?q=" + document.getElementById("input2").value + "&key=AIzaSyB0jD4ojzXkBjv5QQueyFNrhDdBgI0Azqc")
        .then(a => a.json())//converts the response which is currently a string into an object we can then read
        .then(response => {
            for (var i = 0; i < 15; i++) {
                document.getElementById("output2").innerHTML += "<h2>" + response.items[i].volumeInfo.authors + "</h2><br> <img src='http://books.google.com/books/content?id=" + response.items[i].id + "&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'><br>" + response.items[i].volumeInfo.description;
            }
        });
}

//The function needed to search the google books API by name or keyword
function getBooks() {
    books_grid.classList.add("activeBook");
    years_grid.classList.remove("activeYear");
    document.getElementById('output').innerHTML = "";
    fetch("https://books.googleapis.com/books/v1/volumes?q=" + document.getElementById("input").value + "&key=AIzaSyB0jD4ojzXkBjv5QQueyFNrhDdBgI0Azqc")
        .then(a => a.json())
        //converts the response which is currently a string into an object we can then read
        .then(response => {
            for (var i = 0; i < 4; i++) {
                console.log(response.items[i].saleInfo)
                document.getElementById("output").innerHTML += "<h2>" + response.items[i].volumeInfo.title + "</h2>" +
                    response.items[i].volumeInfo.authors + " <br> " +
                    '<a href="' + response.items[i].saleInfo.buyLink + '" target=blank>' +
                    " <img src='http://books.google.com/books/content?id=" + response.items[i].id + "&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api' >" + "</a>" + " <br>" + response.items[i].volumeInfo.description;
            }
        });
}

//The function needed to search the NY Times API to get the best selling book by year from 2009 and later
function getYear() {
    document.getElementById('outputYear').innerHTML = "";
    books_grid.classList.remove("activeBook");
    years_grid.classList.add("activeYear");
    fetch("https://api.nytimes.com/svc/books/v3/lists/full-overview.json?published_date=" + document.getElementById("inputYear").value + "-01-01&api-key=VpUnc9iC1dtZB9ka4zzUrJjNQ4Klo0N1")
        .then(a => a.json())
        //converts the response which is currently a string into an object we can then read 
        .then(response => {
            for (var i = 0; i < 5; i++) {
              document.getElementById("outputYear").innerHTML +="<h2>" + response.results.lists[0].books[i].title + "</h2>" + "<p>" + response.results.lists[0].books[i].author + "</p>" + "<img src='https://storage.googleapis.com/du-prd/books/images/" + response.results.lists[0].books[i].primary_isbn13 + ".jpg'>" + "<p>" + response.results.lists[0].books[i].description + "</p>" ;
            }
        });
}

//local storage for subscribing
function store(){
    var inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);
   };

//The area of JS for the dropdown menu for mobile devices
const menu_button = document.querySelector(".menuButton button");
const close_button = document.querySelector(".closeButton button");
const closeOpen = document.querySelector(".closeButton");
const menuClose = document.querySelector(".menuButton");
const dropDown = document.querySelector(".dropDown");

//Click commands to bring you to the correct part of the page
menu_button.onclick = ()=>{
    dropDown.classList.add("activeDrop");
    menuClose.classList.add("activeMenu");
    closeOpen.classList.add("activeClose");
} 

close_button.onclick = ()=>{
    closeOpen.classList.remove("activeClose");
    menuClose.classList.remove("activeMenu");
    dropDown.classList.remove("activeDrop");
}
