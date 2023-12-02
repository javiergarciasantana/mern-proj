import path from 'path';
import express from "express";
import cors from 'cors';
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import otherUserModel from './models/otherUserModel.js'

dotenv.config();
connectDB(); 
const port = process.env.PORT || 5050;

const app = express();
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors()); 

app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
  otherUserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})
app.get('/getUser/:id', (req, res) => {
  const id = req.params.id;
  otherUserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  otherUserModel.findByIdAndUpdate({_id:id}, 
    {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
    })
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.delete('/ deleteUser/:id', (req, res) => {
  const id = req.params.id;
  otherUserModel.findByIdAndDelete({_id: id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})
   
app.post("/api/otherUsers", (req, res) => {
  otherUserModel.create(req.body).then(otherUsers => res.json(otherUsers)).catch(err => res.json(err))
})


console.log('NODE_ENV:', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));