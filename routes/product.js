var express = require('express');
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert")
var router = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'stubucks';


var products,categories;
/* GET Menu page. */
router.get('/menu/:catId', function(req,res,next){
  console.log("I am going threw here")
  var client = new MongoClient(url);
  try {
    client.connect((err)=>{
      assert.equal(null,err);
      const db = client.db(dbName);

      (async ()=>{
        products = await db.collection('products').find({cat_id : req.params.catId}).toArray();
        res.end(products);
        client.close();
      })
    })
  } catch (err) {
    
  }
})

module.exports = router;