// This is an active module of the jwein Add-on
exports.main = function() {
  var events = require("sdk/system/events");
  events.on("content-document-global-created", function(data) {
    var win = data.subject;
    var doc = win.document;
    if (!~doc.toString().indexOf("[object ImageDocument]")) {
      return;
    }
    var img = doc.body.firstChild;
    img.style.setProperty("background", "none", "important");
  }, true);
};
