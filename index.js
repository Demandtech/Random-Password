const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

let passwordOneEl = document.getElementById("password-one");
let passwordTwoEl = document.getElementById("password-two");

//Generate random number to tag with the characters index
function generatePasswords() {
    let randomPassword = "";
    for (let i = 0; i < 15; i++) {
        let passwordIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[passwordIndex];
    }

    return randomPassword;
}

//render the generated password to html document
function getGeneratedPasswords() {
    passwordOneEl.setAttribute("value", generatePasswords());
    passwordTwoEl.setAttribute("value", generatePasswords());
}

function copyOneToClipboard() {
    let clipPasswordOne = document.getElementById("password-one").value;
    navigator.clipboard.writeText(clipPasswordOne).then(() => {
        alert(clipPasswordOne + " Copied to clipboard");
    });
}

function copyTwoToClipboard() {
    let clipPasswordTwo = document.getElementById("password-two").value;
    navigator.clipboard.writeText(clipPasswordTwo).then(() => {
        alert(clipPasswordTwo + " Copied to clipboard");
    });
}
