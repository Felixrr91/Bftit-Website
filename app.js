/* eslint-disable no-console */
import express from "express";
import logger from "morgan";
import path from "path";
import pug from "pug";
import { fileURLToPath } from "url";
import { v4 as uuid } from "uuid";

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );
const app = express();

app.set( "view engine", "pug" );

app.use( logger( "dev" ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( express.static( path.join( __dirname, "static" ) ) );

app.get( "/", ( req, res ) => {
    res.render( "index", { projectName: "BFTIT" } );
} );

export default app;
