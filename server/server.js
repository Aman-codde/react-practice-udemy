import express from 'express';
import cors from 'cors';
import { getPosts, writePost } from './data/posts.js';

const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

app.get('/posts', async (req,res)=>{
    const posts = await getPosts();
    //it adds a delay to show how to use loading.. message in front end
    await new Promise((resolve, reject) => 
        setTimeout(()=> resolve())
    ,1500);

    res.json(posts);
});

app.post('/posts',async (req,res)=>{
    const existingPosts = await getPosts();
    const data = req.body;
    const newPost = {
        ...data,
        id: Math.random().toString(),
    }
    const updatedPosts = [newPost, ...existingPosts];
    await writePost(updatedPosts);
    res.status(201).json({message:'New Post created', post: newPost})
})

app.listen(PORT,()=>{
    console.log('Server is running on Port ',PORT);
})