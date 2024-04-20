import * as db from "../db/index.js";
import { getAllPlayers, createPlayer } from "../db/player.js";
import express from "express";

const router = express.Router();

const data = { projectName: "BFTIT" };

router.get( "/", ( req, res ) => {
    res.render( "index", data );
} );

router.get( "/player", async ( req, res ) => {
    const result = await createPlayer( "felix", "emperor.jpg" );

    const result2 = await getAllPlayers();
    res.send( result2?.rows );
} );

router.get( "/db", async ( req, res ) => {
    const result = await db.query( "SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';" );

    res.send( result.rows.map( row => row.table_name ) );
} );

export default router;
