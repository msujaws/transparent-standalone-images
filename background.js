browser.tabs.onActivated.addListener(async function({tabId, windowId}) => {
browser.runtime.onMessage((message, sender) => {
  if (message != "ImageDocument") {
    return;
  }
  let tabId = sender.tab.id;
  browser.tabs.executeScript(tabId, "transparent_image.css");
});
