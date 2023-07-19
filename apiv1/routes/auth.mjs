// ---------------- lastest working one---------------
import express from 'express';
const router = express.Router();

router.post('/login', (req, res) => {
  // Your login logic here
  // Assuming the login is successful and a valid token is generated
  const token = 'valid-token';
  res.json({ message: 'Login successful', token });
});

router.post('/signup', (req, res) => {
  // Your signup logic here
  // Assuming the signup is successful and a valid token is generated
  const token = 'valid-token';
  res.json({ message: 'Signup successful', token });
});

export default router;
// ---------------- lastest working one---------------

