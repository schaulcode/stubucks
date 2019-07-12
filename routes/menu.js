var express = require('express');
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert")
var router = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'stubucks';


var products,categories;
/* GET Menu page. */
// router.param('/:catId', function(req,res,next){
//   console.log("I am going threw here")
//   var client = new MongoClient(url);
//   try {
//     client.connect((err)=>{
//       assert.equal(null,err);
//       const db = client.db(dbName);

//       (async ()=>{
//         products = await db.collection('products').find({cat_id : req.params.catId}).toArray();
//         res.end(products);
//         client.close();
//       })
//     })
//   } catch (err) {
    
//   }
// })

router.get('/', function(req, res, next) {
  var client = new MongoClient(url);
  try {
    client.connect((err)=>{
      assert.equal(null,err);
      console.log("Connected successfully to server");
    
      const db = client.db(dbName);
  
      // db.collection('products').find().toArray((err,result)=>{
      //   if (err) throw err
      //   products = result;
      //   console.log(products);
      //   res.render('menu', {title : 'Menu', products : products});
      // });
      (async ()=>{
        products = await db.collection('products').find({cat_id: 1}).toArray()
        categories = await db.collection('categories').find().toArray()
        res.render('menu', {title : 'Menu', products : products, categories : categories});
        client.close()
      })();
    });
  } catch (err) {
    
  }
    // client.close();
})



  


module.exports = router;
