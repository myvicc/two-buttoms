const form = document.forms.link;
const inputUrl = form.elements["address"];
const button = form.elements["button"];

button.addEventListener("click", openLink);

function openLink() {
    if (inputUrl.value.indexOf("http") <0 || inputUrl.value.indexOf("https") < 0) {
        inputUrl.value = `https://wwww.${inputUrl.value}`;
    }
    window.open(inputUrl.value, "_blank");
}


