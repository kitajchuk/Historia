ProperJS // Historia
====================

> JS history state attuned for any hero.



### Installation

```shell
npm i properjs-historia --save-dev
```


### Usage
Alone this utility may not be that useful, which is why it's used with the [ProperJS/Router](https://github.com/ProperJS/Router).
```javascript
import Historia from "properjs-historia";

const historia = new Historia({
    // Force Hash state instead...
    forceHash: false, // Default
});

historia.on( "popstate", ( url, state ) => {
    console.log( url, state );
});

// Push state to address bar
historia.push( "http://localhost:9999/some/url" );

// Go back in history
setTimeout(() => {
    historia.goBack();

}, 2000 );

// Go forward in history
setTimeout(() => {
    historia.goForward();

}, 4000 );
```
