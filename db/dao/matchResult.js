import { dateNowAsISO } from "../../utils/index.js";
import * as db from "../index.js";

export async function create( winnerId, opOneAvatar, opTwoAvatar ) {
    const createdAt = dateNowAsISO();
    const result = await db.query( `
        INSERT INTO match_result
        VALUES (
            default, 
            '${winnerId}', 
            '${opOneAvatar}', 
            '${opTwoAvatar}', 
            '${createdAt}'
        );
    ` );

    console.log( "MatchResult.create", result );

    return result;
}

export async function getAll() {
    const result = await db.query( "SELECT * FROM match_result;" );

    console.log( "MatchResult.getAll", result?.rows );

    return result;
}