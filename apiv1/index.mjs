/* import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const port = 3000;

import authRouter from './routes/auth.mjs';
import commentRouter from './routes/comment.mjs';
import feedRouter from './routes/feed.mjs';
import postRouter from './routes/post.mjs';

app.use(express.json());

// Middleware to check token validity
const checkTokenValidity = (req, res, next) => {
  const { token } = req.headers; // Assuming the token is passed in the request headers

  if (!token) {
    res.status(401).json({ message: 'Missing token' });
    return;
  }

  try {
    // Verify the token using the secret key
    const decodedToken = jwt.verify(token, 'your-secret-key');
    req.user = decodedToken; // Attach the decoded token to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Apply token validation middleware to all routes except signup
app.use((req, res, next) => {
  if (req.path === '/api/v1/auth/signup') {
    next();
  } else {
    checkTokenValidity(req, res, next);
  }
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/feed', feedRouter);
app.use('/api/v1/posts', postRouter);

app.post('/weather', (req, res) => {
  console.log('req.body:', req.body);
  res.json({
    message: 'Weather is normal',
    apiVersion: 'v1',
    temp: 32,
    min: 20,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/




/*import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const port = 3000;

import authRouter from './routes/auth.mjs';
import commentRouter from './routes/comment.mjs';
import feedRouter from './routes/feed.mjs';
import postRouter from './routes/post.mjs';

app.use(express.json());

// Middleware to check token validity
const checkTokenValidity = (req, res, next) => {
  const { token } = req.headers; // Assuming the token is passed in the request headers

  if (!token) {
    res.status(401).json({ message: 'Missing token' });
    return;
  }

  try {
    // Verify the token using the secret key
    const decodedToken = jwt.verify(token, 'your-secret-key');
    req.user = decodedToken; // Attach the decoded token to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Apply token validation middleware to all routes except signup and login
app.use((req, res, next) => {
  if (req.path === '/api/v1/auth/signup' || req.path === '/api/v1/auth/login') {
    next();
  } else {
    checkTokenValidity(req, res, next);
  }
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/feed', feedRouter);
app.use('/api/v1/posts', postRouter);

app.post('/weather', (req, res) => {
  console.log('req.body:', req.body);
  res.json({
    message: 'Weather is normal',
    apiVersion: 'v1',
    temp: 32,
    min: 20,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});*/


// import express from 'express';
// import jwt from 'jsonwebtoken';
// const app = express();
// const port = 3000;

// import authRouter from './routes/auth.mjs';
// import commentRouter from './routes/comments.mjs';
// import feedRouter from './routes/feed.mjs';
// import postRouter from './routes/post.mjs';

// app.use(express.json());

// // Middleware to check token validity
// const checkTokenValidity = (req, res, next) => {
//   const { token } = req.headers; // Assuming the token is passed in the request headers

//   if (!token) {
//     res.status(401).json({ message: 'Missing token' });
//     return;
//   }

//   try {
//     // Verify the token using the secret key
//     const decodedToken = jwt.verify(token, 'your-secret-key');
//     req.user = decodedToken; // Attach the decoded token to the request object
//     next();
//   } catch (error) {
//     res.status(401).json({ message: 'Invalid token' });
//   }
// };

// // Apply token validation middleware to all routes except signup, login, and comments
// app.use((req, res, next) => {
//   if (
//     req.path === '/api/v1/auth/signup' ||
//     req.path === '/api/v1/auth/login' ||
//     req.path === '/api/v1/comments'
//   ) {
//     next();
//   } else {
//     checkTokenValidity(req, res, next);
//   }
// });

// app.use('/api/v1/auth', authRouter);
// app.use('/api/v1/comments', commentRouter);
// app.use('/api/v1/feed', feedRouter);
// app.use('/api/v1/posts', postRouter);

// app.post('/weather', (req, res) => {
//   console.log('req.body:', req.body);
//   res.json({
//     message: 'Weather is normal',
//     apiVersion: 'v1',
//     temp: 32,
//     min: 20,
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// ---------------- lastest working one---------------
import express from 'express';
import jwt from 'jsonwebtoken';
const app = express();
const port = 3000;

import authRouter from './routes/auth.mjs';
import commentRouter from './routes/comment.mjs';
import feedRouter from './routes/feed.mjs';
import postRouter from './routes/post.mjs';

app.use(express.json());

// Middleware to check token validity
const checkTokenValidity = (req, res, next) => {
  const { token } = req.headers; // Assuming the token is passed in the request headers

  if (!token) {
    res.status(401).json({ message: 'Missing token' });
    return;
  }

  try {
    // Verify the token using the secret key
    const decodedToken = jwt.verify(token, 'your-secret-key');
    req.user = decodedToken; // Attach the decoded token to the request object
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// // Apply token validation middleware
// app.use((req, res, next) => {
//   // Exclude token validation for signup, login, and comment routes
//   if (
//     req.path.startsWith('/api/v1/auth/signup') ||
//     req.path.startsWith('/api/v1/auth/login') ||
//     req.path.startsWith('/api/v1/comments') ||
//     req.path.startsWith('/api/v1/posts')
//   ) {
//     next();
//   } else {
//     checkTokenValidity(req, res, next);
//   }
// });

// Apply token validation middleware
app.use((req, res, next) => {
    // Exclude token validation for signup, login, comment, and posts routes
    if (
      req.path.startsWith('/api/v1/auth/signup') ||
      req.path.startsWith('/api/v1/auth/login') ||
      req.path.startsWith('/api/v1/comments') ||
      req.path.startsWith('/api/v1/posts')
    ) {
      next();
    } else {
      checkTokenValidity(req, res, next);
    }
  });

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/feed', feedRouter);
app.use('/api/v1/posts', postRouter);

app.post('/weather', (req, res) => {
  console.log('req.body:', req.body);
  res.json({
    message: 'Weather is normal',
    apiVersion: 'v1',
    temp: 32,
    min: 20,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// ---------------- lastest working one---------------



