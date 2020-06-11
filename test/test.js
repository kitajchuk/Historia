import Historia from "../Historia";

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
