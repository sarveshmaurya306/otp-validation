const express= require('express');
const cors= require('cors');
const path= require('path')

const router= require('./routes')
const keys= require("./keys")

const app= express();
const PORT = keys.PORT || 4000;

app.use(express.json())
app.use(cors({
    origin: "*"
}));

if(process.env.NODE_ENV!=="TEST") {
    app.use(express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req,res) => res.sendFile(path.join(__dirname, 'client', 'build','index.html')));
    console.log('object');
}

app.use('/api', router);

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`)
})