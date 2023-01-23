console.log("Script loaded");
console.log("hello world")

button = document.querySelector("button");
button.onclick = () => {
    console.log("YOU CLICKED ME");
    window.location = "https://google.com";
};