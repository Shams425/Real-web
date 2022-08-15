//making all the Contents in same length
const chaptersTitle = document.querySelectorAll(".accordion h2");
const contents = document.querySelectorAll(".accordion-body li a");
const contentsList = document.querySelectorAll(".accordion-body ul");

let result = [];
contents.forEach((content) => {
  result.push(content.textContent.trim());
});

let largest = result.reduce((acc = "", val1) =>
  acc.length < val1.length ? (acc = val1) : (acc = acc)
);

contents.forEach((content) => {
  if (content.textContent.length < largest.length + 5) {
    for (let i = 0; i < 30; i++) {
      content.textContent += ".";
    }
  }
  return content;
});
