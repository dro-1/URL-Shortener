
const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost/urlTable`;

const connector = () =>{

mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{ console.log('DB Connected')})
.catch(console.log)

mongoose.connection.on('error',err=>{
    console.log(`DB Error : ${err.message}`)
})
}

module.exports = { connector }