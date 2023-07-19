import express from 'express';
const router = express.Router();

// Modify the routes as per your requirement
router.get('/:userId', (req, res) => {
  console.log('This is feed!', new Date());
  res.send('Feed created');
});

export default router;
