chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log("got the message");
    if (request.message == "gotoJisho")
      sendResponse({data: window.getSelection().toString()});
    else
      sendResponse({}); // snub them.
});