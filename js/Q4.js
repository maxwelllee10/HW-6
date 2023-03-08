const links = ["http://www.csulb.edu", "https://www.csulb.edu/college-of-business", "https://www.csulb.edu/college-of-business/information-systems"];

const divElement = document.getElementById("content");

links.forEach(link => {
  const linkElement = document.createElement("a");
  linkElement.textContent = link;
  linkElement.href = link;

  divElement.appendChild(linkElement);


  divElement.appendChild(document.createElement("br"));
})

// const para2Element = document.createElement("p");
// const linkElement = document.createElement("a");
// // Add properties to link
// linkElement.href = "https://en.wikipedia.org/wiki/List_of_programming_languages";
// linkElement.textContent = "list";