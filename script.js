const printButton = document.querySelector("#printResume");

if (printButton) {
  printButton.addEventListener("click", () => {
    window.print();
  });
}
