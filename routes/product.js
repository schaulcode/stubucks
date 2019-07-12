var express = require('express');
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert")
var router = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'stubucks';


var products,categories;
/* GET Menu page. */
router.get('/:catId', function(req,res,next){
  console.log("I am going threw here")
  var param = req.params.catId
  var client = new MongoClient(url);
  try {
    client.connect((err)=>{
      assert.equal(null,err);
      const db = client.db(dbName);

      (async ()=>{
        products = await db.collection('products').find({cat_id : parseInt(req.params.catId)}).toArray();
        console.log(products)
        res.send(JSON.stringify(products));
        client.close();
      })()
    })
  } catch (err) {
    
  }
})

module.exports = router;