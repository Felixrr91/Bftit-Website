import { dateNowAsISO } from "../../utils/index.js";
import * as db from "../index.js";

export async function create( winnerId, challengerAvatar, opponentAvatar ) {
    const createdAt = dateNowAsISO();
    const result = await db.query( `
        INSERT INTO match_result
        VALUES (
            default, 
            '${winnerId}', 
            '${challengerAvatar}', 
            '${opponentAvatar}', 
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

export async function getById( matchResultId ) {
    const result = await db.query( `
        SELECT *
        FROM match_result
        WHERE id = ${matchResultId};
    ` );

    console.log( "MatchResult.getById", result?.rows );

    return result;
}