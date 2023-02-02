const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

app.use(cors());
app.get('/api/test', (req, res)=>{
    res.json('Hello Catherine Tram Bui from from President Dr.Man Ha'+Date.now())
})

console.log("process.env.API_PORT",process.env.API_PORT)

if(process.env.API_PORT){
    const PORT = process.env.API_PORT || 5000;
    app.listen(PORT,() => console.log(`Server Port: ${PORT}`));
}

module.exports = app;


