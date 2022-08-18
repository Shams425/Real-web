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

  let currentIndex = 0;

  pageNumbers.forEach((page, index) => {
    page.textContent = index + 1;
  });

  navButtonNext.addEventListener("click", () => {
    currentIndex++;

    pageNumbers.forEach((page) => {
      page.classList.remove("showDots");
    });

    if (currentIndex < pageNumbers.length - 3) {
      pageNumbers[currentIndex - 1].classList.add("active");
      pageNumbers[currentIndex].classList.add("standBy");
      pageNumbers[currentIndex + 1].classList.add("standBy");
      pageNumbers[pageNumbers.length - 1].style.left = "30px";
      pageNumbers[pageNumbers.length - 1].classList.add("active");
      pageNumbers[currentIndex + 1].classList.add("showDots");
    } else {
      pageNumbers[currentIndex - 1].classList.add("active");
      pageNumbers[currentIndex].classList.add("active");
      pageNumbers[currentIndex + 1].classList.add("active");
      pageNumbers[pageNumbers.length - 1].style.left = "0px";
      pageNumbers[pageNumbers.length - 1].classList.add("active");
    }
  });

  navButtonBack.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex <= 1) currentIndex = 1;

    pageNumbers.forEach((page) => {
      page.classList.remove("showDots");
      page.classList.remove("standBy");
    });

    if (currentIndex < pageNumbers.length - 3) {
      pageNumbers[currentIndex - 1].classList.add("active");
      pageNumbers[currentIndex].classList.add("standBy");
      pageNumbers[currentIndex + 1].classList.add("standBy");
      pageNumbers[pageNumbers.length - 1].style.left = "30px";
      pageNumbers[pageNumbers.length - 1].classList.add("standBy");
      pageNumbers[currentIndex + 1].classList.add("showDots");
    } else {
      pageNumbers[currentIndex - 1].classList.add("active");
      pageNumbers[currentIndex].classList.add("active");
      pageNumbers[currentIndex + 1].classList.add("active");
      pageNumbers[pageNumbers.length - 1].style.left = "0px";
      pageNumbers[pageNumbers.length - 1].classList.add("active");
    }
  });
});

//making all the Contents chapters in same length
const chaptersTitle = document.querySelectorAll(".accordion h2");
const contents = document.querySelectorAll(".accordion-body li a");
const showPageNum = document.querySelectorAll(".accordion-body .pageNum");

let result = [];
contents.forEach((content) => {
  result.push(content.textContent.trim());
});

let largest = result.reduce((acc = "", val1) =>
  acc.length < val1.length ? (acc = val1) : (acc = acc)
);

let listWidth = document.querySelector(".accordion").clientWidth;
const listPadding = 80;
const pageNumWidth = 10;
const scrollWidth = 6;
let PageContentWidth = Math.round(
  (listWidth - listPadding - pageNumWidth - scrollWidth) / 8
);

console.log(listWidth - scrollWidth, PageContentWidth);

contents.forEach((content, index) => {
  if (content.textContent.length < largest.length) {
    for (let i = 0; i < 0 / 8; i++) {
      content.textContent += ".";
    }
  }
  return content;
});

showPageNum.forEach((list, index) => {
  list.textContent = index + 1;
});
