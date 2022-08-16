//owl carousal library for sliding pages
$(function () {
  $("#pagesContainer").owlCarousel({
    loop: false,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
    },
  });

  //setting the page number
  const pageNumbers = document.querySelectorAll(".owl-dot");

  pageNumbers.forEach((page, index) => {
    page.textContent = index + 1;
  });

  console.log(pageNumbers);
});

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
