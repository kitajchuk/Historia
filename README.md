PushState
=========

> Handles history pushstate/popstate with async option.



## Installation

```shell
npm install properjs-pushstate
```


## Usage
```javascript
var pushstate = new PushState({
    async: true,
    caching: true
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
