let pageMove = 0;
//owl carousal library for sliding pages
$(function () {
  $("#pagesContainer").owlCarousel({
    loop: false,
    margin: 30,
    autoHeight: true,
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
  const navButtonNext = document.querySelector(".owl-nav .owl-next");
  const navButtonBack = document.querySelector(".owl-nav .owl-prev");

  let nowIndex = 0;

  pageNumbers.forEach((page, index) => {
    page.textContent = index + 1;
  });

  navButtonNext.addEventListener("click", (e) => {
    pageNumbers.forEach((page) => {
      if (page.classList.contains("active")) {
        nowIndex = parseInt(page.textContent);
        pageNumbers[nowIndex - 1].style.display = "block";
      } else {
        page.style.display = "none";
      }
      page.style.left = `-${page.clientWidth * nowIndex}px`;
    });
    console.log(nowIndex);
  });

  navButtonBack.addEventListener("click", () => {
    pageNumbers.forEach((page) => {
      if (page.classList.contains("active")) {
        nowIndex = parseInt(page.textContent);
        pageNumbers[nowIndex].style.display = "block";
      } else {
        page.style.display = "none";
      }
      pageNumbers.forEach((page) => {
        page.style.left = `-${page.clientWidth * nowIndex}px`;
      });
    });
    console.log(nowIndex);
  });
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
