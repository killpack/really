function save() {
    var list = document.getElementById("list").value;
    var enableRegex = document.getElementById("enableRegex").checked;
    status.innerHTML = "Saving...";
    var options = {
      "list": list,
      "enableRegex": enableRegex
    };
    chrome.storage.sync.set({reallyOptions: options}, function() {
        var status = document.getElementById("status");
        status.innerHTML = "Options Saved.";
        setTimeout(function() {
            status.innerHTML = "";
        }, 750);
    });
}

function restore() {
    chrome.storage.sync.get("reallyOptions", function(response) {
        var options = response.reallyOptions || {};
        var list = options.list;
        if (!list) {
            list = getSampleList();
        }

        document.getElementById("list").value = list;
        document.getElementById("enableRegex").checked = options.enableRegex;
    });
}

function getSampleList() {
    var sampleList = [
      "example.com",
      "facebook.com",
      "twitter.com"
    ];
    return sampleList.join("\n");
}

document.addEventListener("DOMContentLoaded", function() {
    restore();
    document.getElementById("save").addEventListener('click', save);
});



