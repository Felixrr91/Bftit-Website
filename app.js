/* eslint-disable no-console */
import express from "express";
import logger from "morgan";
import path from "path";
import pug from "pug";
import { fileURLToPath } from "url";
import { v4 as uuid } from "uuid";
import dotenv from 'dotenv';
import { initDatabase } from "./db/index.js";
import router from "./routes/index.js";

const __dirname = path.dirname( fileURLToPath( import.meta.url ) );

dotenv.config();

initDatabase();

const app = express();

app.set( "view engine", "pug" );

app.use( logger( "dev" ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( express.static( path.join( __dirname, "static" ) ) );
app.use( router );

app.get( "/", ( req, res ) => {
    res.render( "index", { projectName: "BFTIT" } );
} );

export default app;
