import * as db from "../db/index.js";
import express from "express";

const router = express.Router();

router.get( "/", ( req, res ) => {
    res.send( "Hello world." );
} );

router.get( "/db", async ( req, res ) => {
    const result = await db.query( "SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';" );

    res.send( result.rows.map( row => row.table_name ) );
} );

export default router;
