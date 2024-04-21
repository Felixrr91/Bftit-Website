import { dateNowAsISO } from "../../utils/index.js";
import * as db from "../index.js";

export async function create( opId ) {
    const createdAt = dateNowAsISO();
    const result = await db.query( `
        INSERT INTO match(id, challenger_id, created_at)
        VALUES (
            default, 
            '${opId}', 
            '${createdAt}'
        );
    ` );

    console.log( "Match.create", result );

    return result;
}

export async function getAll() {
    const result = await db.query( "SELECT * FROM match;" );

    console.log( "Match.getAll", result?.rows );

    return result;
}

export async function getById( matchId ) {
    const result = await db.query( `
        SELECT *
        FROM match
        WHERE id = ${matchId};
    ` );

    console.log( "Match.getById", result?.rows );

    return result;
}

export async function findByChallengerId( challengerId ) {
    const result = await db.query( `
        SELECT *
        FROM match
        WHERE challenger_id = ${challengerId};
    ` );

    console.log( "Match.findByChallengerId", result?.rows );

    return result;
}

export async function findByPlayerId( playerId ) {
    const result = await db.query( `
        SELECT *
        FROM match
        WHERE 
            challenger_id = ${playerId} OR
            opponent_id = ${playerId};
    ` );

    console.log( "Match.findByPlayerId", result?.rows );

    return result;
}

export async function updateOpponentId( matchId, opId ) {
    const result = await db.query( `
        UPDATE match
        SET opponent_id = ${opId}
        WHERE id = ${matchId};
    ` );

    console.log( "Match.updateOpponentId", result );

    return result;
}

export async function updateMatchResultId( matchId, matchResultId ) {
    const result = await db.query( `
        UPDATE match
        SET result_id = ${matchResultId}
        WHERE id = ${matchId};
    ` );

    console.log( "Match.updateMatchResultId", result );

    return result;
}