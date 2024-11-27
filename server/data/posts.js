import fs from 'fs/promises';

async function getPosts(){
    const readPosts = await fs.readFile('posts.json','utf-8');
    const posts = JSON.parse(readPosts);
    return posts ? posts : [];
}

export {getPosts};
