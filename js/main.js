let spans = document.querySelectorAll(".rate-choice span");
let rateValue = document.querySelector(".rate-value");
spans.forEach((span) => {
  span.addEventListener("click", (e) => {
    spans.forEach((span) => {
      span.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

let submit = document.querySelector(".rate a");

submit.onclick = function () {
  let span = document.querySelector(".active");
  if (span === null) {
    window.alert("select one of the rate choice before you submit.");
  } else {
    rateValue.textContent = span.textContent;
    document.querySelector(".rate").style.display = "none";
    document.querySelector(".thank").style.display = "block";
  }
};
