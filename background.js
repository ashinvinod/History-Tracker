function getHistory(now){
    chrome.history.search({text: '', startTime: now, maxResults: 0}, function(data)
    {
        var i;
        var arr = [];
        var items = [];
        data.forEach(function(page)
        {
            var parser = document.createElement('a');
            parser.href = page.url;
            i = parser.hostname
            if (i.indexOf("www.") != -1)
            {
              i = i.split("www.")[1];
            }
            arr.push(i);
        });
        var counts = {};
        arr.forEach(function(x) {
            counts[x] = (counts[x] || 0)+1;
        });

        // Create items array
        items = Object.keys(counts).map(function(key) {
          return [key, counts[key]];
        });
        // Sort the array based on the second element
        items.sort(function(first, second) {
          return second[1] - first[1];
        });
        var j;

        items = items.slice(0,6);
        console.log(items);
        localStorage.setItem("vOneLocalStorage", items);
      });
}

chrome.runtime.onInstalled.addListener(function()
{
        var now = Date.now();                                                          // 1 year = 31104000000 ms
        now = now - 31104000000;                                                       // 1 week = 604800000 ms
        getHistory(now);                                                               // 1 day = 86400000 ms
});
