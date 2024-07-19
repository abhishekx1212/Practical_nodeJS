const mongoose = require('mongoose');

const db = async()=>{
    await mongoose.connect("mongodb+srv://trigonx1212:12345@cluster0.vhh609f.mongodb.net/practical");
    console.log('database connected!!');
}

module.exports = { db };