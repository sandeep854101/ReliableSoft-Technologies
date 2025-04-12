import { saveAs } from 'file-saver';

function TestCaseTable({ testCases }) {
  const exportToMarkdown = () => {
    let markdown = '| Scenario | Given | When | Then |\n';
    markdown += '|----------|-------|------|------|\n';
    testCases.forEach((tc) => {
      markdown += `| ${tc.scenario} | ${tc.given} | ${tc.when} | ${tc.then} |\n`;
    });
    const blob = new Blob([markdown], { type: 'text/markdown' });
    saveAs(blob, 'test_cases.md');
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Test Cases</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Scenario</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Given</th>
              <th className="border border-gray-300 px-4 py-2 text-left">When</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Then</th>
            </tr>
          </thead>
          <tbody>
            {testCases.map((tc, idx) => (
              <tr key={idx} className="even:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{tc.scenario}</td>
                <td className="border border-gray-300 px-4 py-2">{tc.given}</td>
                <td className="border border-gray-300 px-4 py-2">{tc.when}</td>
                <td className="border border-gray-300 px-4 py-2">{tc.then}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={exportToMarkdown}
        className="mt-4 inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
      >
        Export as Markdown
      </button>
    </div>
  );
}

export default TestCaseTable;