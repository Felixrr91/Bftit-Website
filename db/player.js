import { dateNowAsISO } from "../utils/index.js";
import * as db from "./index.js";

export async function create( name, profileImg ) {
    const createdAt = dateNowAsISO();
    const result = await db.query( `
        INSERT INTO player
        VALUES (
            default,
            '${name}',
            '${profileImg}',
            '${createdAt}'
        );
    ` );

    console.log( "Player.create", result );

    return result;
}

export async function getAll() {
    const result = await db.query( "SELECT * FROM player;" );

    console.log( "Player.getAll", result?.rows );

    return result;
}