let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let h2 = document.querySelector("h2");
    let randomColor = genRendomColor();
    h2.innerHTML = randomColor;
    console.log("color generated");

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});

function genRendomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256); 
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}