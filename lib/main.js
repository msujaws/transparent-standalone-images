// This is an active module of the jwein Add-on
exports.main = function() {
  var obbs = require("observer-service");
  obbs.add('content-document-global-created', function(subject, topic, data) {
    var doc = subject.document;
    if (!~doc.toString().indexOf("[object ImageDocument]")) {
      return;
    }
    var img = doc.body.firstChild;
    img.style.setProperty("background", "none", "important");
  });
};
