if (!Number.isInteger(U)) {
  console.log(`Error! You must enter integers. You enteres ${integer1} and ${integer2}`);
} else {
  const integer1 = prompt("Enter a Number");
const integer2 = prompt("Enter a different Number");

const paraElement = document.createElement("p");

const spanElement = document.createElement("span");

spanElement.textContent = integer1;
spanElement.textContent = integer2;
spanElement.style.color = "red";
spanElement.style.fontWeight = "Bold";

paraElement.textContent = "The sum of your integers is ";
paraElement.appendChild(spanElement);
paraElement.innerHTML += `${integer1} + ${integer2}`;

document.getElementById("output").appendChild(paraElement);
}

