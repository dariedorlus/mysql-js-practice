import mysql from 'mysql2';
import {connectionPool} from './db.js';

// const connection = mysql.createConnection({
//     host: '34.67.146.233',
//     user: 'root',
//     password: 'BuildingSoFlo',
//     database: 'Commerce'
// });

//const query = `SELECT * FROM ProductCategories`;

// connection.query(query, (err, results) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//    // console.log(results);
// });



const getAllProducts = async () => {
    const query = `SELECT * FROM Products`;
    // const [rows, fields] = await connection.promise().query(query);
    const [rows, fields] = await connectionPool.query(query);
    console.log("Rows from the method", rows);
    return rows;
}

const createProduct = async (product) => {
  const insertQuery = `INSERT INTO Products ( Description, SKU)) 
 VALUES  ('${product.description}', '${product.sku}')`;

  const [rows, fields] = await connection.promise().query(insertQuery);
  console.log("Rows from the method", rows);
  return rows;
}

console.log("Products", await getAllProducts());

//getAllProductCategories()
//createProductCategory({Id: 8, Name: "Electronics", ParentCategoryId: 1})

//module.exports = { getAllProducts, createProduct };

//connection.end();
connectionPool.end();