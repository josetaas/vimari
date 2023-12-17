var SafariExtensionCommunicator = (function (msgHandler) {
    'use strict'
    var publicAPI = {}

    // Connect the provided message handler to the received messages.
    safari.self.addEventListener("message", msgHandler)

    var sendMessage = function(msgName, data = {}) {
        safari.extension.dispatchMessage(msgName, data)
    }

    publicAPI.requestSettingsUpdate = function() {
        sendMessage("updateSettings")
    }
    publicAPI.requestTabForward = function() {
        sendMessage("tabForward")
    }
    publicAPI.requestTabBackward = function() {
        sendMessage("tabBackward")
    }
    publicAPI.requestCloseTab = function () {
        sendMessage("closeTab")
    }
    publicAPI.requestScrollStart = function (direction) {
        sendMessage("scrollStart", {direction: direction});
    }
    publicAPI.requestScrollStop = function () {
        sendMessage("scrollStop");
    }


    // Return only the public methods.
    return publicAPI;
});
