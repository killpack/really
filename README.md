REALLY
======

Do you just sort of mindlessly type `twitter.com` into your browser all day?

Here's how this thing works: you give it a list of URLs or domains or whatever,
and if you visit one of those, you'll get an irritating alert box that asks,
"REALLY?" Sometimes the answer will be yes, but sometimes it will be no. This
Chrome extension doesn't judge, it just asks.

It won't bug you if you're just surfing around on the same domain. So, if you've
added `twitter.com` to the list, and you've navigated to Twitter and already
clicked "OK" on the irritating alert box, it won't display the alert when you
click on someone's profile. But if you navigate to another domain and then
back to Twitter, it'll ask again.

You can feed it regular expressions, too, if you want.

_To install:_

- Download and extract the contents of this repo (click the button at the top that says "ZIP").
- Open the Extensions view in Chrome.
- Make sure Developer mode is enabled.
- Click "Load unpacked extension...".
- Point the file dialog to wherever you extracted the ZIP.
- Enjoy?

_To update:_

- Re-download the ZIP and extract it to the same place as before. (Or just `$ git pull`.)
- Open the Extensions view in Chrome.
- Find the "REALLY" extension and click the link that says "Reload".
- Accept my gratitude for using my dumb thing.

_To configure and use:_

- Open the Extensions view in Chrome.
- Find the "REALLY" extension and click the link that says "Options".
- In the textarea, enter some URLs to interrogate, one per line. These can be
  as broad as `twitter.com` or as specific as
  `https://twitter.com/i/notifications`.
- If you want the URLs to be parsed as regular expressions, check the box.
  (They'll be case-insensitive, whether you like it or not.)
- Click "Save".
