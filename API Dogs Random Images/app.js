// let jsonRes =
// '{"fact" : "Cats are in all colors.","lengrh":98}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);



// let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res) => res.json())
// .then((data) => {
//     console.log("data 1: ",data.fact);
//     return fetch(url);
// })
// .then((res) => res.json())
// .then((data) => {
//     console.log("data 2: ",data.fact);
// })
// .catch((err) => {
//     console.log("Error:", err);
// });




let btn = document.querySelector("button");
let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click", async () => {
    let fact = await getfacts();

    let img = document.querySelector("#result");
    img.setAttribute("src", fact);
    console.log(fact);

});

async function getfacts() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (err) {
        console.log("Error:", err);
        return "Error";
    }
}
