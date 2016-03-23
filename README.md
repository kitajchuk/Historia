PushState
=========

> Handles history pushstate/popstate with async option.



## Installation

```shell
npm install properjs-pushstate --save-dev
```


## Usage
```javascript
var PushState = require( "properjs-pushstate" ),
    pushstate = new PushState({
        // Uses XHR
        async: true,

        // Keeps response caches for requests
        caching: true,

        // Handle 404s and 500s
        handle404: true,
        handle500: true,

        // Run PushState as a proxy
        proxy: {
            domain: "your.proxy.domain"
        }
    });

pushstate.on( "popstate", function ( url, data, status ) {
    // Handle stuff here
});

pushstate.on( "beforestate", function () {
    // Handle stuff before state change here
});

pushstate.on( "afterstate", function () {
    // Handle stuff after state change here
});

pushstate.push( url, function ( response, status ) {
    // Handle push state callback here
});

// Go back in history
pushstate.goBack();

// Go forward in history
pushstate.goForward();
```
