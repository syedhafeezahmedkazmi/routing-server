/*import express from 'express';
const router = express.Router();

// Modify the routes as per your requirement
router.post('/', (req, res) => {
  console.log('This is comment!', new Date());
  res.send('Comment created');
});

export default router;*/



// import express from 'express';
// let router = express.Router();

// router.post('/', (req, res, next) => {
//   const { userId, commentText } = req.body;

//   // Generate a unique comment ID
//   const commentId = generateCommentId();

//   // Create a new comment object
//   const newComment = {
//     commentId,
//     userId,
//     commentText,
//   };

//   // Add the new comment to the comments array
//   comments.push(newComment);

//   res.json({
//     message: 'Comment created successfully',
//     comment: newComment,
//   });
// });

// // Utility function to generate a comment ID
// function generateCommentId() {
//   // Generate a random number or use a library like 'uuid' to generate a unique ID
//   return Math.floor(Math.random() * 1000000).toString();
// }

// export default router;


// import express from 'express';
// const router = express.Router();

// // Create an array to store comments
// const comments = [];

// router.post('/', (req, res, next) => {
//   const { userId, commentText } = req.body;

//   // Generate a unique comment ID
//   const commentId = generateCommentId();

//   // Create a new comment object
//   const newComment = {
//     commentId,
//     userId,
//     commentText,
//   };

//   // Add the new comment to the comments array
//   comments.push(newComment);

//   res.json({
//     message: 'Comment created successfully',
//     comment: newComment,
//   });
// });

// // Utility function to generate a comment ID
// function generateCommentId() {
//   // Generate a random number or use a library like 'uuid' to generate a unique ID
//   return Math.floor(Math.random() * 1000000).toString();
// }

// export default router;



/*import express from 'express';
const router = express.Router();

// Create an array to store comments
const comments = [];

router.post('/', (req, res, next) => {
  const { userId, commentText } = req.body;

  // Generate a unique comment ID
  const commentId = generateCommentId();

  // Create a new comment object
  const newComment = {
    commentId,
    userId,
    commentText,
  };

  // Add the new comment to the comments array
  comments.push(newComment);

  res.json({
    message: 'Comment created successfully',
    comment: newComment,
  });
});

router.get('/:commentId', (req, res, next) => {
  const { commentId } = req.params;

  // Find the comment by ID in the comments array
  const comment = comments.find((c) => c.commentId === commentId);

  if (!comment) {
    res.status(404).json({ message: 'Comment not found' });
    return;
  }

  res.json({
    message: 'Comment retrieved successfully',
    comment,
  });
});

// Utility function to generate a comment ID
function generateCommentId() {
  // Generate a random number or use a library like 'uuid' to generate a unique ID
  return Math.floor(Math.random() * 1000000).toString();
}

router.put('/:commentId', (req, res, next) => {
  const { commentId } = req.params;
  const { userId, commentText } = req.body;
  const updatedComment = updateCommentById(commentId, userId, commentText);

  if (!updatedComment) {
    res.status(404).json({ message: 'Comment not found' });
    return;
  }

  res.json({
    message: 'Comment updated successfully',
    comment: updatedComment,
  });
});

export function updateCommentById(commentId, userId, commentText) {
  const comment = getCommentById(commentId);

  if (!comment) {
    return null;
  }

  comment.userId = userId;
  comment.commentText = commentText;

  return comment;
}

export default router;*/

// ---------------- lastest working one---------------
import express from 'express';
const router = express.Router();

// Create an array to store comments
const comments = [];

// Utility function to generate a comment ID
function generateCommentId() {
  // Generate a random number or use a library like 'uuid' to generate a unique ID
  return Math.floor(Math.random() * 1000000).toString();
}

router.post('/', (req, res, next) => {
  const { userId, commentText } = req.body;

  // Generate a unique comment ID
  const commentId = generateCommentId();

  // Create a new comment object
  const newComment = {
    commentId,
    userId,
    commentText,
  };

  // Add the new comment to the comments array
  comments.push(newComment);

  res.json({
    message: 'Comment created successfully',
    comment: newComment,
  });
});

router.get('/:commentId', (req, res, next) => {
  const { commentId } = req.params;

  // Find the comment by ID in the comments array
  const comment = comments.find((c) => c.commentId === commentId);

  if (!comment) {
    res.status(404).json({ message: 'Comment not found' });
    return;
  }

  res.json({
    message: 'Comment retrieved successfully',
    comment,
  });
});

router.put('/:commentId', (req, res, next) => {
  const { commentId } = req.params;
  const { userId, commentText } = req.body;

  // Find the comment by ID in the comments array
  const comment = comments.find((c) => c.commentId === commentId);

  if (!comment) {
    res.status(404).json({ message: 'Comment not found' });
    return;
  }

  // Update the comment with the new values
  comment.userId = userId;
  comment.commentText = commentText;

  res.json({
    message: 'Comment updated successfully',
    comment,
  });
});

router.delete('/:commentId', (req, res, next) => {
  const { commentId } = req.params;

  // Find the index of the comment by ID in the comments array
  const commentIndex = comments.findIndex((c) => c.commentId === commentId);

  if (commentIndex === -1) {
    res.status(404).json({ message: 'Comment not found' });
    return;
  }

  // Remove the comment from the comments array
  const deletedComment = comments.splice(commentIndex, 1)[0];

  res.json({
    message: 'Comment deleted successfully',
    comment: deletedComment,
  });
});

export default router;
// ---------------- lastest working one---------------


