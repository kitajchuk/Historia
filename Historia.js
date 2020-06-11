import Controller from "properjs-controller";



const pushable = ("history" in window && "pushState" in window.history);
const hashable = ("onhashchange" in window);



export default class Historia extends Controller {
    constructor ( options ) {
        super();

        this._initUrl = window.location.href.replace( window.location.hash, "" );
        this._options = (options || {});
        this._enabled = false;
        this._ishashpushed = false;
        this._states = {};
        this._callbacks = {};
        this._states[ this._initUrl ] = {
            uid: this.uid(), // Controller method
        };

        this._stateEnable();
    }


    push ( url ) {
        if ( url === window.location.href ) {
            return;
        }

        this._push( url );

        this._states[ url ] = {
            uid: this.uid(),
        };
    }


    goBack () {
        window.history.back();

        this.fire( "backstate" );
    }


    goForward () {
        window.history.forward();

        this.fire( "forwardstate" );
    }


    _push ( url ) {
        if ( pushable && !this._options.forceHash ) {
            window.history.pushState( this._states[ url ], "", url );

        } else {
            // This replace ensures we get the following:
            // "/":         root
            // "/foo/bar/": uri path
            let hashUri = url.replace( window.location.origin, "" );

            // Fix for root hash uri.
            // Ensure we dont get the following:
            // "/foo/bar/#/foo/bar/"
            // Rather we would get the following:
            // "/foo/bar/#/"
            if ( hashUri === window.location.pathname ) {
                hashUri = "/";
            }

            this._ishashpushed = true;

            window.location.hash = hashUri;
        }
    }


    _stateEnable () {
        if ( this._enabled ) {
            return this;
        }

        this._enabled = true;

        const handler = () => {
            let url = window.location.href;
            const roots = ["#/", "#", ""];

            // Ensure we clean out the hash for Router
            // Example:
            // Start:  http://localhost/foo/#/bar/
            // Result: http://localhost/foo/bar/
            if ( this._options.forceHash ) {
                // Shave the hash from the end of the URL
                url = url.replace( window.location.hash, "" );

                // Shave the hash root from the end of the URL
                url = url.replace( window.location.pathname, "" );

                // Empty hash means we have gone back to root
                if ( roots.indexOf( window.location.hash ) !== -1 ) {
                    // Append the hash root to the URL
                    url = (url + window.location.pathname);

                } else {
                    // Append the applied hash pathname to the URL
                    url = (url + window.location.hash.replace( "#", "" ));
                }
            }

            this.fire( "popstate", url, this._states[ url ] );
        };

        if ( pushable && !this._options.forceHash ) {
            window.addEventListener( "popstate", () => {
                handler();

            }, false );

        } else if ( hashable ) {
            // For hashstate we should apply initial hash on page load
            this._push( this._initUrl );

            window.addEventListener( "hashchange", () => {
                if ( !this._ishashpushed ) {
                    handler();

                } else {
                    this._ishashpushed = false;
                }

            }, false );
        }
    }
}
