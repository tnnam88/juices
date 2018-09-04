var storage = require('node-persist');
storage.initSync({
    dir : "data",
    ttl : false
});

var data = [
	{
		"id": "1",
		"cat_id" : "1",
		"name": "Orange Juice",
		"price": "60000",
		"image": "images/fruit-juices/fj1.jpg",
		"description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice. Juice is commonly consumed as a beverage or used as an ingredient or flavoring in foods or other beverages, as for smoothies. Juice emerged as a popular beverage choice after the development of pasteurization methods enabled its preservation without using fermentation (which is used in wine production)",
		"top_product": "1",
	},
	{
		"id": "2",
		"cat_id" : "1",
		"name": "Lemon Juice",
		"price": "70000",
		"image": "images/fruit-juices/fj2.jpg",
		"description": "Juice is extracted from the fruit and the water content is reduced (by evaporating off the water naturally present) in the country of origin. The concentrated juice is usually frozen and shipped to the country of use for packing. Fruit juice packers then reconstitute the juice by adding back the water.",
		"top_product": "0",
	},
	{
		"id": "3",
		"cat_id" : "1",
		"name": "Strawberry Juice",
		"price": "60000",
		"image": "images/fruit-juices/fj3.jpg",
		"description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice. Juice is commonly consumed as a beverage or used as an ingredient or flavoring in foods or other beverages, as for smoothies. Juice emerged as a popular beverage choice after the development of pasteurization methods enabled its preservation without using fermentation (which is used in wine production)",
		"top_product": "1",
	},
	{
		"id": "4",
		"cat_id" : "1",
		"name": "Blueberry Juice",
		"price": "70000",
		"image": "images/fruit-juices/fj4.jpg",
		"description": "Juice is extracted from the fruit and the water content is reduced (by evaporating off the water naturally present) in the country of origin. The concentrated juice is usually frozen and shipped to the country of use for packing. Fruit juice packers then reconstitute the juice by adding back the water.",
		"top_product": "0",
	},
	{
		"id": "5",
		"cat_id" : "1",
		"name": "Avocado Juice",
		"price": "60000",
		"image": "images/fruit-juices/fj5.jpg",
		"description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice. Juice is commonly consumed as a beverage or used as an ingredient or flavoring in foods or other beverages, as for smoothies. Juice emerged as a popular beverage choice after the development of pasteurization methods enabled its preservation without using fermentation (which is used in wine production)",
		"top_product": "1",
	},
	{
		"id": "6",
		"cat_id" : "1",
		"name": "Watermelon Juice",
		"price": "70000",
		"image": "images/fruit-juices/fj6.jpg",
		"description": "Juice is extracted from the fruit and the water content is reduced (by evaporating off the water naturally present) in the country of origin. The concentrated juice is usually frozen and shipped to the country of use for packing. Fruit juice packers then reconstitute the juice by adding back the water.",
		"top_product": "0",
	},
	{
		"id": "7",
		"cat_id" : "1",
		"name": "Mango Juice",
		"price": "60000",
		"image": "images/fruit-juices/fj7.jpg",
		"description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice. Juice is commonly consumed as a beverage or used as an ingredient or flavoring in foods or other beverages, as for smoothies. Juice emerged as a popular beverage choice after the development of pasteurization methods enabled its preservation without using fermentation (which is used in wine production)",
		"top_product": "1",
	},
	{
		"id": "8",
		"cat_id" : "2",
		"name": "Carrot Juice",
		"price": "50000",
		"image": "images/vegetable-juices/vj1.jpg",
		"description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice. Juice is commonly consumed as a beverage or used as an ingredient or flavoring in foods or other beverages, as for smoothies. Juice emerged as a popular beverage choice after the development of pasteurization methods enabled its preservation without using fermentation (which is used in wine production)",
		"top_product": "0",
	},
	{
		"id": "9",
		"cat_id" : "2",
		"name": "Broccoli Juice",
		"price": "60000",
		"image": "images/vegetable-juices/vj2.jpg",
		"description": "Juice is extracted from the fruit and the water content is reduced (by evaporating off the water naturally present) in the country of origin. The concentrated juice is usually frozen and shipped to the country of use for packing. Fruit juice packers then reconstitute the juice by adding back the water.",
		"top_product": "1",
	},
	{
		"id": "10",
		"cat_id" : "2",
		"name": "Tomato Juice",
		"price": "50000",
		"image": "images/vegetable-juices/vj3.jpg",
		"description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice. Juice is commonly consumed as a beverage or used as an ingredient or flavoring in foods or other beverages, as for smoothies. Juice emerged as a popular beverage choice after the development of pasteurization methods enabled its preservation without using fermentation (which is used in wine production)",
		"top_product": "0",
	},
	{
		"id": "11",
		"cat_id" : "2",
		"name": "Cucumber Juice",
		"price": "60000",
		"image": "images/vegetable-juices/vj4.jpg",
		"description": "Juice is extracted from the fruit and the water content is reduced (by evaporating off the water naturally present) in the country of origin. The concentrated juice is usually frozen and shipped to the country of use for packing. Fruit juice packers then reconstitute the juice by adding back the water.",
		"top_product": "1",
	},
	{
		"id": "12",
		"cat_id" : "2",
		"name": "Centella Asiatica Juice",
		"price": "50000",
		"image": "images/vegetable-juices/vj5.jpg",
		"description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice. Juice is commonly consumed as a beverage or used as an ingredient or flavoring in foods or other beverages, as for smoothies. Juice emerged as a popular beverage choice after the development of pasteurization methods enabled its preservation without using fermentation (which is used in wine production)",
		"top_product": "0",
	},
	{
		"id": "13",
		"cat_id" : "2",
		"name": "Cabbage Juice",
		"price": "60000",
		"image": "images/vegetable-juices/vj6.jpg",
		"description": "Juice is extracted from the fruit and the water content is reduced (by evaporating off the water naturally present) in the country of origin. The concentrated juice is usually frozen and shipped to the country of use for packing. Fruit juice packers then reconstitute the juice by adding back the water.",
		"top_product": "1",
	},
	{
		"id": "14",
		"cat_id" : "2",
		"name": "Spinach Juice",
		"price": "50000",
		"image": "images/vegetable-juices/vj7.jpg",
		"description": "Juice is a drink made from the extraction or pressing of the natural liquid contained in fruit and vegetables. It can also refer to liquids that are flavored with concentrate or other biological food sources, such as meat or seafood, such as clam juice. Juice is commonly consumed as a beverage or used as an ingredient or flavoring in foods or other beverages, as for smoothies. Juice emerged as a popular beverage choice after the development of pasteurization methods enabled its preservation without using fermentation (which is used in wine production)",
		"top_product": "0",
	},
]
storage.setItemSync("juices", data);

var exp = require("express");
var app = exp();

app.get('/list-product', function (request, response) {
 //  response.sendFile(__dirname+"/"+"home.html");
   var juices = storage.getItemSync("juices");
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
   response.send(juices);
});


app.post('/add-api', function (request, response) {
 	var new_product = {
 		image: request.body.image,
 		link: request.body.link,
 	};
 	console.log(new_product);
 	var products = storage.getItemSync("fruits");
 	products.push(new_product);
 	storage.setItemSync("fruits",products);
 	response.redirect("/");
});

var server = app.listen(3000, function () {
console.log('Server is now running!');
})
