import mongoose from 'mongoose';
import express from 'express';
import routes from './src/routes/fundraiseRoutes';
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Server is running on http://localhost:${PORT}`)
);

routes(app);


//mongoose connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/fundraiserdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParseer.urlencoded({ extended: true }));
app.use(express.json());