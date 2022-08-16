//making all the Contents chapters in same length
const chaptersTitle = document.querySelectorAll(".accordion h2");
const contents = document.querySelectorAll(".accordion-body li a");
const contentsList = document.querySelectorAll(".accordion-body ul li");

let result = [];
contents.forEach((content) => {
  result.push(content.textContent.trim());
});

let largest = result.reduce((acc = "", val1) =>
  acc.length < val1.length ? (acc = val1) : (acc = acc)
);

contents.forEach((content) => {
  if (content.textContent.length < largest.length) {
    for (let i = 0; i < Math.floor(250 / 8) - content.textContent.length; i++) {
      content.textContent += ".";
    }
  }
  return content;
});

console.log(contentsList[0].clientWidth);
