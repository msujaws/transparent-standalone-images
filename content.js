document.addEventListener("domcontentloaded", () => {
  if (document.toString() != "[object ImageDocument]") {
    return;
  }
  browser.runtime.sendMessage("ImageDocument");
});
