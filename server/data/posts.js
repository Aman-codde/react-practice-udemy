import fs from 'fs/promises';

async function getPosts(){
    const readPosts = await fs.readFile('posts.json','utf-8');
    const posts = JSON.parse(readPosts);
    return posts ? posts : [];
}

function writePost(posts){
    return fs.writeFile('posts.json',JSON.stringify(posts));
}

export {getPosts,writePost};
