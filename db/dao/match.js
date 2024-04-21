import { dateNowAsISO } from "../../utils/index.js";
import * as db from "../index.js";

export async function create( opId ) {
    const createdAt = dateNowAsISO();
    const result = await db.query( `
        INSERT INTO match(id, op1_id, created_at)
        VALUES (
            default, 
            '${opId}', 
            '${createdAt}'
        );
    ` );

    console.log( "Match.create", result );

    return result;
}

export async function updateOpponentTwoId( matchId, opId ) {
    const result = await db.query( `
        UPDATE match
        SET op2_id = ${opId}
        WHERE id = ${matchId};
    ` );

    console.log( "Match.updateOpponentTwoId", result );

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

export async function getAll() {
    const result = await db.query( "SELECT * FROM match;" );

    console.log( "Match.getAll", result?.rows );

    return result;
}