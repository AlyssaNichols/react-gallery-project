const pg = require('pg');

const pool = new pg.Pool({
    database: 'react_gallery', 
    host: 'localhost', 
    port: 5432,        
    max: 10,           
    idleTimeoutMillis: 30000 
});

// Listener setup on the pool 
pool.on('connect', () => {
    console.log('Connected to the database');
});

pool.on('error', (error) => {
    console.log('Error with database pool', error);
});

module.exports = pool;