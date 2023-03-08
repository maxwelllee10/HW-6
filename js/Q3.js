const backgroundColor = prompt("Enter background color");

const divElements = document.getElementsByTagName("div");

Array.from(divElements).forEach(div => {
  div.style.color = textColor;
  div.style.backgroundColor = backgroundColor;
})

// const spanElement = document.createElement("span");
// // Set the span element attributes
// spanElement.textContent = CSULB IS Courses;
// spanElement.textContent = Fall Classes Taken;
// spanElement.textContent = Spring Classes Taken;
// spanElement.style.fontWeight = "Bold";
// something like this but bold 