const express = require("express");
const router = express.Router();
const models= require("../models/index");



router.get("/api/customer/items", function(req,res){     ///every time you make a call to the database theres a promise
        models.Item.findAll()
        .then (function(data) {
         res.json({data: data })
       })
       .catch(function(err){
         res.json(err)
       })
})
//////////////////////////////////////////////////////////// Create a purchase

router.post("/api/customer/items/:itemId/purchases", function(req,res){
  models.Item.findById(req.params.itemId)
  .then (function(data) {
    if (data.cost > req.body.inputCash ){
      console.log("failed");
      res.json({data: "Insert More Money, or vend elsewhere"})
    }
    else{
      models.Purchase.create({
        itemId: req.params.itemId,
        inputCash: req.body.inputCash,
        change: req.body.inputCash - data.cost
      }).then (function(data) {
        console.log("create");
        res.json({data: "Thank you for your purchase", change: data.change })
      })

    }
 }) .catch(function(err){
   res.json(err)
 })

})


//////////////////////////////////////////////// get a list of all purchases with their item and date/time//// it's created already
router.get("/api/vendor/purchases", function (req,res){
      models.Purchase.findAll()
      .then (function(data) {
        res.json({data: data })
      })
      .catch(function(err){
        res.json(err)
      })

})


////////////////////////////////////////////////////////////
router.get("/api/vendor/money", function (req,res){
        models.Item.create({
          quantity: req.body.quantity,
          cost:req.body.cost,
          name:req.body.name
        })
        .then (function(data) {
          res.json({data: data})
        })
        .catch(function(err){
          res.json(err)
        })

});









////////////////////////////////////////////////////////////
router.post("/api/vendor/items", function(req,res){
          models.Item.create({
            quantity: req.body.quantity,
            cost:req.body.cost,
            name:req.body.name
          })
          .then (function(data) {
          res.json({data: data})
          })
          .catch(function(err){
          res.json(err)
           })
});

////////////////////////////////////////////////////////////
router.put("/api/vendor/items/:itemId", function(req,res){



})










////////////////////////////////////////////////////////////



module.exports = router;
