const express = require('express');
const app = express();
const port = 3000;

const productServices = require('./product-services');

app.get('/', (req, res) => {
    res.send('MYSQL Meets Express');
})

app.get('/products', async (req, res) => {  
    const products = await productServices.getAllProductCategories();
    res.send(products);
});

app.post('/products', async (req, res) => {
    const product = req.body;
    const result = await productServices.createProductCategory(product);
    res.send("Product created");
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});