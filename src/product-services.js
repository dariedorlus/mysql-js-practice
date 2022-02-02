const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'Commerce'
});

//const query = `SELECT * FROM ProductCategories`;

// connection.query(query, (err, results) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//    // console.log(results);
// });



const getAllProductCategories = async () => {
    const query = `SELECT * FROM ProductCategories`;
    const [rows, fields] = await connection.promise().query(query);
    console.log("Rows from the method", rows);
    return rows;
}

const createProductCategory = async (productCategory) => {
 const insertQuery = `INSERT INTO ProductCategories (Id, Name, ParentCategoryId) 
 VALUES  (${productCategory.Id}, '${productCategory.Name}', ${productCategory.ParentCategoryId})`;

 const [rows, fields] = await connection.promise().query(insertQuery);
 console.log("Rows from the method", rows);
 return rows;
}

//getAllProductCategories()
//createProductCategory({Id: 8, Name: "Electronics", ParentCategoryId: 1})

module.exports = { getAllProductCategories, createProductCategory };

//connection.end();