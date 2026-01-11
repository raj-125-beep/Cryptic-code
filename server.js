const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/score', (req, res) => {
  // Fake credit score generator
  const score = Math.floor(Math.random() * (850 - 300 + 1)) + 300;
  const tips = [
    "Pay bills on time",
    "Keep credit utilization below 30%",
    "Avoid opening too many accounts at once",
    "Regularly check your credit report for errors"
  ];
  res.json({ score, tips });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
