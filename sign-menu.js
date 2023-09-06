// Password Confirm Check
const password = document.getElementById("password")
const confirm_password = document.getElementById("password-confirm");

function validatePassword() {
    if (password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
    } else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

// Random image
const logoBgImage = document.getElementById("logo-bg-image");
const imagesArray = [1, 2, 3, 4];

window.onload = changeRandomImage();

function changeRandomImage() {
    const randomImage = Math.ceil(Math.random() * Number(imagesArray.length));

    logoBgImage.src = `./images/bg${Number(randomImage)}.jpg`;
}

// Check if something valid to show the error icon
const inputs = document.querySelectorAll("input");
const errorIcons = document.querySelectorAll(".error");

inputs.forEach(element => {
    element.addEventListener("input", function (event) {
        if (element.checkValidity() == true) {
            errorIcons[Array.from(inputs).indexOf(element)].style.display = "none";
        } else {
            errorIcons[Array.from(inputs).indexOf(element)].style.display = "block";
        };
    })
});