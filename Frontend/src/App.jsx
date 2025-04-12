import { useState } from 'react';
import axios from 'axios';
import TestCaseTable from './TestCaseTable';

function App() {
  const [description, setDescription] = useState('');
  const [testCases, setTestCases] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/generate', {
        description
      });
      setTestCases(response.data.testCases);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
      setTestCases([]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Test Case Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Feature Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="e.g., Phone number, 10 digits, required"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
            rows="4"
          />
        </div>
        <button
          type="submit"
          disabled={!description}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Generate Test Cases
        </button>
      </form>
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      {testCases.length > 0 && <TestCaseTable testCases={testCases} />}
    </div>
  );
}

export default App;