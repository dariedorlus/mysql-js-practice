import credentials from './credentials.js';

import mysql from 'mysql2';

export const connectionPool = mysql.createPool({
  host: 'localhost',
  database: 'Commerce',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ...credentials
}).promise()