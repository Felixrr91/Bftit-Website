import { dateNowAsISO } from "../../utils/index.js";
import * as db from "../index.js";

export async function create( playerId ) {
    const createdAt = dateNowAsISO();
    const result = await db.query( `
        INSERT INTO match_statistic
        VALUES (
            default, 
            '${playerId}', 
            0, 
            0, 
            0,
            0
        );
    ` );

    console.log( "MatchStatistic.create", result );

    return result;
}

export async function getAll() {
    const result = await db.query( "SELECT * FROM match_statistic;" );

    console.log( "MatchStatistic.getAll", result?.rows );

    return result;
}

export async function getByPlayerId( playerId ) {
    const result = await db.query( `
        SELECT *
        FROM match_statistic
        WHERE player_id = ${playerId};
    ` );

    console.log( "MatchStatistic.getByPlayerId", result?.rows );

    return result;
}

export async function incrementTotalPlayed( playerId ) {
    const result = await db.query( `
        UPDATE match_statistic
        SET total_played = total_played + 1
        WHERE player_id = ${playerId};
    ` );

    console.log( "MatchStatistic.incrementTotalPlayed", result );

    return result;
}

export async function incrementTotalWon( playerId ) {
    const result = await db.query( `
        UPDATE match_statistic
        SET total_played = total_played + 1,
            total_won = total_won + 1
        WHERE player_id = ${playerId};
    ` );

    console.log( "MatchStatistic.incrementTotalWon", result );

    return result;
}

export async function incrementRankedPlayed( playerId ) {
    const result = await db.query( `
        UPDATE match_statistic
        SET total_played = total_played + 1,
            ranked_played = ranked_played + 1
        WHERE player_id = ${playerId};
    ` );

    console.log( "MatchStatistic.incrementRankedPlayed", result );

    return result;
}

export async function incrementRankedWon( playerId ) {
    const result = await db.query( `
        UPDATE match_statistic
        SET total_played = total_played + 1,
            ranked_played = ranked_played + 1,
            total_won = total_won + 1,
            ranked_won = ranked_won + 1
        WHERE player_id = ${playerId};
    ` );

    console.log( "MatchStatistic.incrementRankedWon", result );

    return result;
}