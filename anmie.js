
fetch('https://animechan.vercel.app/api/quotes')
.then(response => response.json())
.then(function(quotes){ 
    console.log(quotes);

    for (let i = 0; i <quotes.length; i++) {
        console.log(quotes[i].character) 
     console.log(quotes[i].anime)
     console.log(quotes[i].quote)
    }
})






