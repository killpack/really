var interrogate = function(listOfUrls, enableRegex) {
  if (loadingDubiousWebsite(listOfUrls, enableRegex)) {
    if (!window.confirm("REALLY?")) {
      window.history.back();
    }
  }
};

var loadingDubiousWebsite = function(listOfUrls, enableRegex) {
  var referrerHost = hostname(document.referrer);
  var currentHost = location.hostname;

  var isSameHost = contains(referrerHost, currentHost);

  var matchesUrlInList = listOfUrls.reduce(function(anyMatches, urlInList) {
    return anyMatches || matches(location.href, urlInList, enableRegex);
  }, false);

  return !isSameHost && matchesUrlInList;
};

var contains = function(string, substring) {
  return (string.indexOf(substring) !== -1);
};

var matches = function(currentHref, url, enableRegex) {
  if (enableRegex) {
    return currentHref.match(new RegExp(url, "i"));
  } else {
    return contains(currentHref, url);
  }
};

var hostname = function(url) {
  if (url === "") { return ""; }
  var a = document.createElement('a');
  a.href = url;
  return a.hostname;
};

chrome.storage.sync.get("reallyOptions", function(response) {
  var options = response.reallyOptions || {};
  if (options.list) {
    var parsedList = options.list.split("\n").filter(function(item) {
      return item !== "";
    });
    interrogate(parsedList, options.enableRegex);
  }
});


