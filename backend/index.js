const express = require("express");
const cors=require("cors");
require('./db/config');
const User = require('./db/User');
const Product= require('./db/Product');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
  let user= new User(req.body);
  let result=await user.save();
  result=result.toObject();
  delete result.password;
  res.send(result);
})

app.post("/login",async (req,res)=>{
  console.log(req.body)
  if(req.body.password && req.body.email){
    let user= await User.findOne(req.body).select("-password");
    if(user){
      res.send(user)
    }else{
      res.send({result:"No user found"})
  
    }
  }else{
    res.send({result:"No user found"})
  }
})

app.post('/add-product', async (req, res) => {
  const { name, price, category, company, userId, count } = req.body;

  let existingProduct = await Product.findOne({ name, category });

  if (existingProduct) {
    existingProduct.count += parseInt(count) || 1;
    await existingProduct.save();
    res.send(existingProduct);
  } else {
    let product = new Product({
      name,
      price,
      category,
      company,
      userId,
      count: parseInt(count) || 1
    });
    let result = await product.save();
    res.send(result);
  }
});


app.get('/products',async(req,res)=>{
  let products=await Product.find();
  if(products.length>0){
  res.send(products);
  }else{
    res.send({result:"not found"})
  }
});

app.delete("/product/:id",async(req,res)=>{
  let result=await Product.deleteOne({_id:req.params.id});
  res.send(result)
}),

app.get("/product/:id",async(req,res)=>{
  let result= await Product.findOne({_id:req.params.id});
  if(result){
    res.send(result);
  }else{
    res.send({"result":"not found"})
  }
})

app.put("/product/:id",async(req,res)=>{
  let result = await Product.updateOne(
    {_id:req.params.id},
    {$set:req.body}
  )
  res.send(result)
});

app.get("/search/:key",async(req,res)=>{
  let result= await Product.find({
    "$or":[
      {
        name:{$regex:req.params.key}
      },
      {
        company:{$regex:req.params.key}
      },
      {
        category:{$regex:req.params.key}
      }
    ]
  });
  res.send(result);
})
app.listen(5000);