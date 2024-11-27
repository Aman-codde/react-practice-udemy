import express from 'express';
import cors from 'cors';
import { getPosts } from './data/posts.js';

const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

app.get('/posts', async (req,res)=>{
    const posts = await getPosts();
    res.json(posts)
})

app.listen(PORT,()=>{
    console.log('Server is running on Port ',PORT);
})