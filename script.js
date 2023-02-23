const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[',
  '}', ']', ',', '|', ':', ';', '<', '>', '.', '?', '/'];

let generateEl = document.querySelector(".generate-el");
let result1El = document.querySelector("#result1-el");
let result2El = document.querySelector("#result2-el");

 

generateEl.addEventListener("click", generatePassword)
result1El.addEventListener("click", () => {
  copyPassword(result1El.textContent);
});
result2El.addEventListener("click", () => {
  copyPassword(result2El.textContent);
});

function generatePassword() {
  let result1 = "";
  let result2 = "";
  for (let i = 0; i < 15; i++) {
    result1 += characters[Math.floor(Math.random() * characters.length)];
    result2 += characters[Math.floor(Math.random() * characters.length)];
  }
  result1El.textContent = result1;
  result2El.textContent = result2;
}

function copyPassword(password) {
  navigator.clipboard.writeText(password).then(() => {
    alert('Content copied to clipboard');
  },() => {
    alert('Failed to copy');
  });
}