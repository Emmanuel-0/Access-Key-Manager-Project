import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

/*const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});*/

const pool = new Pool({
  user: 'postgres',
  password: 'AMALITECH2022',
  host: 'localhost',
  port: 5432,
  database: 'DB'
});

export default {
  /**
   * DB Query
   * @param {string} text
   * @param {Array} params
   * @returns {object} object 
   */
  query(text, params){
    return new Promise((resolve, reject) => {
      pool.query(text, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
    })
  }
}
