// import express from 'express';
// const router = express.Router();

// // Modify the routes as per your requirement
// router.get('/:userId', (req, res) => {
//   console.log('This is post!', new Date());
//   res.send('Post created');
// });

// router.post('/', (req, res) => {
//   console.log('This is post!', new Date());
//   res.send('Post created');
// });

// export default router;


// ------------------------
// import express from 'express';
// const router = express.Router();

// // Get a Post
// router.get('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Get Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to fetch the post by userId and postId
//   res.send(`Get Post - userId: ${userId}, postId: ${postId}`);
// });

// // Get User Posts
// router.get('/posts/:userId', (req, res) => {
//   const { userId } = req.params;
//   console.log(`Get User Posts - userId: ${userId}`);
//   // Logic to fetch all posts by userId
//   res.send(`Get User Posts - userId: ${userId}`);
// });

// // Update a Post
// router.put('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Update Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to update the post by userId and postId
//   res.send(`Update Post - userId: ${userId}, postId: ${postId}`);
// });

// // Create a Post
// router.post('/', (req, res) => {
//   console.log('Create Post');
//   // Logic to create a new post
//   res.send('Post created');
// });

// // Delete a Post
// router.delete('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Delete Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to delete the post by userId and postId
//   res.send(`Delete Post - userId: ${userId}, postId: ${postId}`);
// });

// export default router;
// ---------------------

// -----------------
// import express from 'express';
// const router = express.Router();

// // Get a Post
// router.get('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Get Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to fetch the post by userId and postId
//   res.send(`Get Post - userId: ${userId}, postId: ${postId}`);
// });

// // Get User Posts
// router.get('/posts/:userId', (req, res) => {
//   const { userId } = req.params;
//   console.log(`Get User Posts - userId: ${userId}`);
//   // Logic to fetch all posts by userId
//   res.send(`Get User Posts - userId: ${userId}`);
// });

// // Update a Post
// router.put('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Update Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to update the post by userId and postId
//   res.send(`Update Post - userId: ${userId}, postId: ${postId}`);
// });

// // Create a Post
// router.post('/', (req, res) => {
//   console.log('Create Post');
//   // Logic to create a new post
//   res.send('Post created');
// });

// // Delete a Post
// router.delete('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Delete Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to delete the post by userId and postId
//   res.send(`Delete Post - userId: ${userId}, postId: ${postId}`);
// });

// export default router;
// -----------------

//------------- create post working --------------
// import express from 'express';
// const router = express.Router();

// // Get a Post
// router.get('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Get Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to fetch the post by userId and postId
//   res.send(`Get Post - userId: ${userId}, postId: ${postId}`);
// });

// // Get User Posts
// router.get('/posts/:userId', (req, res) => {
//   const { userId } = req.params;
//   console.log(`Get User Posts - userId: ${userId}`);
//   // Logic to fetch all posts by userId
//   res.send(`Get User Posts - userId: ${userId}`);
// });

// // Update a Post
// router.put('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Update Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to update the post by userId and postId
//   res.send(`Update Post - userId: ${userId}, postId: ${postId}`);
// });

// // Create a Post
// router.post('/', (req, res) => {
//   console.log('Create Post');
//   // Logic to create a new post
//   res.send('Post created');
// });

// // Delete a Post
// router.delete('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Delete Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to delete the post by userId and postId
//   res.send(`Delete Post - userId: ${userId}, postId: ${postId}`);
// });

// export default router;
// ------------------- create post working --------------------

// import express from 'express';
// const router = express.Router();

// // Create an array to store posts
// const posts = [];

// // Utility function to generate a unique post ID
// function generatePostId() {
//   // Generate a random number or use a library like 'uuid' to generate a unique ID
//   return Math.floor(Math.random() * 1000000).toString();
// }

// // Get a Post
// router.get('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Get Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to fetch the post by userId and postId
//   res.send(`Get Post - userId: ${userId}, postId: ${postId}`);
// });

// // Get User Posts
// router.get('/posts/:userId', (req, res) => {
//   const { userId } = req.params;
//   console.log(`Get User Posts - userId: ${userId}`);
//   // Logic to fetch all posts by userId
//   res.send(`Get User Posts - userId: ${userId}`);
// });

// // Update a Post
// router.put('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Update Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to update the post by userId and postId
//   res.send(`Update Post - userId: ${userId}, postId: ${postId}`);
// });

// // Create a Post
// router.post('/', (req, res) => {
//   console.log('Create Post');
//   const { userId, content } = req.body;

//   // Generate a unique post ID
//   const postId = generatePostId();

//   // Create a new post object
//   const newPost = {
//     postId,
//     userId,
//     content,
//   };

//   // Add the new post to the posts array
//   posts.push(newPost);

//   res.json({
//     message: 'Post created successfully',
//     post: newPost,
//   });
// });

// // Delete a Post
// router.delete('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;
//   console.log(`Delete Post - userId: ${userId}, postId: ${postId}`);
//   // Logic to delete the post by userId and postId
//   res.send(`Delete Post - userId: ${userId}, postId: ${postId}`);
// });

// export default router;

// ---------------------------------------

// import express from 'express';
// const router = express.Router();

// // Create an array to store posts
// const posts = [];

// // Utility function to generate a post ID
// function generatePostId() {
//   // Generate a random number or use a library like 'uuid' to generate a unique ID
//   return Math.floor(Math.random() * 1000000).toString();
// }

// // Create a new post
// router.post('/', (req, res) => {
//   const { userId, content } = req.body;

//   // Generate a unique post ID
//   const postId = generatePostId();

//   // Create a new post object
//   const newPost = {
//     postId,
//     userId,
//     content,
//   };

//   // Add the new post to the posts array
//   posts.push(newPost);

//   res.json({
//     message: 'Post created successfully',
//     post: newPost,
//   });
// });

// // Get a specific post by postId
// router.get('/:postId', (req, res) => {
//   const { postId } = req.params;

//   // Find the post by postId in the posts array
//   const post = posts.find((p) => p.postId === postId);

//   if (!post) {
//     res.status(404).json({ message: 'Post not found' });
//     return;
//   }

//   res.json({
//     message: 'Post retrieved successfully',
//     post,
//   });
// });

// export default router;

// ---------------------------

// import express from 'express';
// const router = express.Router();

// // Create an array to store posts
// const posts = [];

// // Utility function to generate a post ID
// function generatePostId() {
//   // Generate a random number or use a library like 'uuid' to generate a unique ID
//   return Math.floor(Math.random() * 1000000).toString();
// }

// // Create a new post
// router.post('/', (req, res) => {
//   const { userId, content } = req.body;

//   // Generate a unique post ID
//   const postId = generatePostId();

//   // Create a new post object
//   const newPost = {
//     postId,
//     userId,
//     content,
//   };

//   // Add the new post to the posts array
//   posts.push(newPost);

//   res.json({
//     message: 'Post created successfully',
//     post: newPost,
//   });
// });

// // Get a specific post by userId and postId
// router.get('/:userId/:postId', (req, res) => {
//   const { userId, postId } = req.params;

//   // Find the post by userId and postId in the posts array
//   const post = posts.find((p) => p.userId === userId && p.postId === postId);

//   if (!post) {
//     res.status(404).json({ message: 'Post not found' });
//     return;
//   }

//   res.json({
//     message: 'Post retrieved successfully',
//     post,
//   });
// });

// // Get all posts by userId
// router.get('/posts/:userId', (req, res) => {
//   const { userId } = req.params;

//   // Find all posts with the given userId in the posts array
//   const userPosts = posts.filter((p) => p.userId === userId);

//   res.json({
//     message: 'User posts retrieved successfully',
//     posts: userPosts,
//   });
// });

// export default router;

// ----------------------

import express from 'express';
const router = express.Router();

// Create an array to store posts
const posts = [];

// Utility function to generate a post ID
function generatePostId() {
  // Generate a random number or use a library like 'uuid' to generate a unique ID
  return Math.floor(Math.random() * 1000000).toString();
}

// Create a new post
router.post('/', (req, res) => {
  const { userId, content } = req.body;

  // Generate a unique post ID
  const postId = generatePostId();

  // Create a new post object
  const newPost = {
    postId,
    userId,
    content,
  };

  // Add the new post to the posts array
  posts.push(newPost);

  res.json({
    message: 'Post created successfully',
    post: newPost,
  });
});

// Get a specific post by postId
router.get('/:postId', (req, res) => {
  const { postId } = req.params;

  // Find the post by postId in the posts array
  const post = posts.find((p) => p.postId === postId);

  if (!post) {
    res.status(404).json({ message: 'Post not found' });
    return;
  }

  res.json({
    message: 'Post retrieved successfully',
    post,
  });
});

// Get all posts by userId
router.get('/posts/:userId', (req, res) => {
  const { userId } = req.params;

  // Find all posts with the given userId in the posts array
  const userPosts = posts.filter((p) => p.userId === userId);

  res.json({
    message: 'User posts retrieved successfully',
    posts: userPosts,
  });
});

// Get a specific post by userId and postId
router.get('/:userId/:postId', (req, res) => {
  const { userId, postId } = req.params;

  // Find the post by userId and postId in the posts array
  const post = posts.find((p) => p.userId === userId && p.postId === postId);

  if (!post) {
    res.status(404).json({ message: 'Post not found' });
    return;
  }

  res.json({
    message: 'Post retrieved successfully',
    post,
  });
});

// Update a post by postId
router.put('/:postId', (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  // Find the post by postId in the posts array
  const post = posts.find((p) => p.postId === postId);

  if (!post) {
    res.status(404).json({ message: 'Post not found' });
    return;
  }

  // Update the post content
  post.content = content;

  res.json({
    message: 'Post updated successfully',
    post,
  });
});

// Delete a post by postId
router.delete('/:postId', (req, res) => {
  const { postId } = req.params;

  // Find the index of the post by postId in the posts array
  const postIndex = posts.findIndex((p) => p.postId === postId);

  if (postIndex === -1) {
    res.status(404).json({ message: 'Post not found' });
    return;
  }

  // Remove the post from the posts array
  const deletedPost = posts.splice(postIndex, 1)[0];

  res.json({
    message: 'Post deleted successfully',
    post: deletedPost,
  });
});

export default router;

// -----------------




