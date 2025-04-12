const express = require('express');
const { parseDescription } = require('./parser');
const { generateTestCases } = require('./generator');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.post('/api/generate', (req, res) => {
  const { description } = req.body;
  if (!description) {
    return res.status(400).json({ error: 'Description is required' });
  }
  try {
    const requirements = parseDescription(description);
    const testCases = generateTestCases(requirements);
    res.json({ testCases });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate test cases' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});