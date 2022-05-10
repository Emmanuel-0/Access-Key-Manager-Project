import pg from "pg";
const { Pool } = pg;
import dotenv from 'dotenv';

dotenv.config();

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL
// });

const pool = new Pool({
  user: 'postgres',
  password: '19ephenPK.',
  host: 'localhost',
  port: 5432,
  database: 'reflection_db'
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
