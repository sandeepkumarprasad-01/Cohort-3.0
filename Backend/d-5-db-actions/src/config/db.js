const { default: mongoose } = require("mongoose");

const connectdb = async () => {
    try {
        await mongoose.connect("   ");//paste mongodb cluster link
        console.log("MongoDb Connected");
        
    } catch (error) {
        console.log("DB not connected", error)
        
    }
}
module.exports = connectdb;
