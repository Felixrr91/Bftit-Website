window.addEventListener( "DOMContentLoaded", () => {
    htmx.onLoad( loadedContent => {
	console.log( "htmx.onLoad", loadedContent );
    } );
} );