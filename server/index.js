const express= require('express');
const cors= require('cors');

const router= require('./routes')
const keys= require("./keys")

const app= express();
const PORT = keys.PORT || 4000;

app.use(express.json())
app.use(cors({
    origin: "*"
}));

app.use('/api', router);

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})