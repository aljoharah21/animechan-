
fetch('https://animechan.vercel.app/api/quotes')
    .then(response => response.json())
    .then(function (quotes) {
        console.log(quotes);

        for (let i = 0; i < quotes.length; i++) {

            let p1 = document.createElement("p")
            p1.innerText = (quotes[i].anime)
            p1.id = "anmie"


            let p2 = document.createElement("P")
            p2.innerText = (quotes[i].quote)
            p2.id = "quote"

            let p3 = document.createElement("small")
            p3.innerText = (quotes[i].character)
            p3.id = "character"

            let div = document.createElement("div")
            div.className = "quote-box"
            div.append(p1)
            div.append(p2)
            div.append(p3)

            let div2 = document.createElement("div")
            div2.className = "bbooxx"

            div2.append(div)

            let bod = document.querySelector(".des")
            bod.append(div2)

        }
    })

let serchbuttons = document.querySelector(".submit")

serchbuttons.addEventListener("click", function () {
    let d1 = document.querySelector(".des")
    d1.innerHTML = ("")

    let getTitle = document.getElementById("getTitle").value.trim();

    fetch(`https://animechan.vercel.app/api/quotes/anime?title=${getTitle}`)
        .then(response => response.json())
        .then(function (quotes) {


            for (let i = 0; i < quotes.length; i++) {

                let p1 = document.createElement("p")
                p1.innerText = (quotes[i].anime)
                p1.id = "anmie"


                let p2 = document.createElement("P")
                p2.innerText = (quotes[i].quote)
                p2.id = "quote"

                let p3 = document.createElement("small")
                p3.innerText = (quotes[i].character)
                p3.id = "character"

                let div = document.createElement("div")
                div.className = "quote-box"
                div.append(p1)
                div.append(p2)
                div.append(p3)

                let div2 = document.createElement("div")
                div2.className = "bbooxx"

                div2.append(div)

                let bod = document.querySelector(".des")
                bod.append(div2)

            }
        }
        )
}
)





