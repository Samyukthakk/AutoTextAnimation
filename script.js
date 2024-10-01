const containerE1 = document.querySelector(".container");
const careers = ["Youtuber", "Webdeveloper", "Freelancer"];
let careersIndex = 0;
let charIndex = 0
updateText()

function updateText() {
charIndex++;
containerE1.innerHTML = `
<h1> I am a ${careers[careersIndex].slice(0,charIndex)} </h1>
`;
if(charIndex === careers[careersIndex].length) {
    careersIndex++;
    charIndex = 0;
}
if(careersIndex === careers.length) {
    careersIndex = 0;
}
setTimeout(updateText,400);

}
