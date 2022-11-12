const express =require('express');
const app = express();
const port=process.env.port || 3000;  //jo bhi avalable port ho vo allot ho jaaye
require('./db/conn');

app.get("/",(req,res) => {


res.send("hello from saksham")

});

app.listen(port,()=>{
    console.log(`server is running at port no. ${port}`);
}
)