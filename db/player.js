import * as db from "./index.js";

export async function createPlayer( name, profileImg ) {
    const createdAt = new Date().toISOString();
    const result = await db.query( `INSERT INTO player VALUES (default, '${name}', '${profileImg}', '${createdAt}');` );

    console.log( "createPlayer", result );

    return result;
}

export async function getAllPlayers() {
    const result = await db.query( "SELECT * FROM player;" );

    console.log( "getAllPlayers", result?.rows );

    return result;
}