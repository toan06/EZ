# simple repeat chatbot _no token no hard setup_

## step1:
>First you need to login to [Facebook](https://m.facebook.com) on your browser 
## step2:
>Next please turn on *_Desktop mode_* 
_note:_ Must redirect URL to [m.facebook.com](https://m.facebook.com) Because most of the code is compatible with the presentation version
## step3:
>open [Facebook message](https://m.facebook.com/messages)
## step4:
 __Example__

```js
const fs = require("fs");
const login = require("facebook-chat-api");

var credentials = {email: "FB_EMAIL", password: "FB_PASSWORD"};

login(credentials, (err, api) => {
    if(err) return console.error(err);

    fs.writeFileSync('appstate.json', JSON.stringify(api.getAppState()));
});
```

------------------------------------

' ' '


