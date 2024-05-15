
//npm init
//npm install mongodb express cors body-parser




const bodyParser = require('body-parser');
//body-Parser: It is responsible for parsing the incoming request bodies in a middleware before you handle it
const MongoClient = require('mongodb').MongoClient;
const newRouter = require('./router.js');

const express = require('express');
const app = express();
//CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API.
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

//The names we're using below were defined in the last post
MongoClient.connect('mongodb://localhost:27017') // This is the location of where your local database is living.
  .then((client) => {
    const db = client.db('GrainTradeWeb'); // The name we gave our DB
    
    const grainCollection = db.collection('Grain-entry'); // The name we gave our collection inside the DB
    const grainRouter = newRouter(grainCollection); // for router functionality
    
    const feedcollection=db.collection('Feedback') ;
    const feedbackRouter =newRouter(feedcollection)
  
    const loginCollection=db.collection('login-data');
    const loginRouter=newRouter(loginCollection);

    
    const signupCollection=db.collection('signup-data');
    const signupRouter=newRouter(signupCollection);

    const busiCollection=db.collection('business-Details');
    const busiRouter=newRouter(busiCollection);

    const CardCollection=db.collection('Cards-Data');
    const cardRouter=newRouter(CardCollection);
    
    const AddCollection=db.collection('Address-Data');
    const AddRouter=newRouter(AddCollection);

    const gstCollection=db.collection('Gst-Data');
    const gstRouter=newRouter(gstCollection);

    const BuyerLoginCollection=db.collection('Buyer-Loginn-Data');
    const BuyerLoginRouter=newRouter(BuyerLoginCollection);
   
    
    const SellerLoginCollection=db.collection('Seller-Loginn-Data');
    const SellerLoginRouter=newRouter(SellerLoginCollection);
 


    const BuyerSignupCollection=db.collection('Buyer-Signup-Data');
    const BuyersignupRouter=newRouter(BuyerSignupCollection);
   
    
  const SellerSignupCollection=db.collection('Seller-Signup-Data');
    const SellersignupRouter=newRouter(SellerSignupCollection);

    app.use('/seller/signup',SellersignupRouter);
    app.use('/buyer/signup',BuyersignupRouter);
    app.use('/seller/loginn',SellerLoginRouter);
    app.use('/buyer/loginn',BuyerLoginRouter);
    app.use('/GSTdetails',gstRouter);
app.use('/address',AddRouter);
    app.use('/login',loginRouter);
app.use('/cardDetails',cardRouter);
    app.use('/signup',signupRouter);
    app.use('/businessDetails',busiRouter);
    app.use('/grainEntry', grainRouter); 





    app.use('/feedback', feedbackRouter);// Defining the base route where we can later access our data
  })
  .catch(console.err);



app.listen(4000, function () {
  console.log(`Listening on this port: ${this.address().port}`);
});