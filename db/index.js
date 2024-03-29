import pg from "pg";

let pool;

export const initDatabase = () => {
    pool = new pg.Pool( {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        port: 5432,
    } );

};

export const query = ( queryString, params ) => pool.query( queryString, params );