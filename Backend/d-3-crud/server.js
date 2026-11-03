const express = require("express")
const app = express();
let port =3000;
let users= [
    {
        name:"pollar",
        age: 34,

        
    }
]
//create
app.post("")

// get matlab read
app.get("/",(req,res)=>{
    res.send(users)
})
app.listen(port,()=>{
console.log(`server is listening on port ${port}`);

})