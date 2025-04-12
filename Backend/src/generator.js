function generateTestCases(requirements) {
    const testCases = [];
    const { feature, constraints } = requirements;

    if (feature === 'Phone number') {
        testCases.push({
            scenario: 'Valid input',
            given: 'User enters 1234567890',
            when: 'Form is submitted',
            then: 'Form accepts it'
        });
        testCases.push({
            scenario: 'Invalid input',
            given: 'User enters 123456789',
            when: 'Form is submitted',
            then: 'Form shows error'
        });
        testCases.push({
            scenario: 'Boundary case',
            given: 'User enters 12345678901',
            when: 'Form is submitted',
            then: 'Form shows error'
        });
        testCases.push({
            scenario: 'Edge case',
            given: 'User enters abc',
            when: 'Form is submitted',
            then: 'Form shows error'
        });
        if (constraints.includes('required')) {
            testCases.push({
                scenario: 'Required field',
                given: 'User leaves it empty',
                when: 'Form is submitted',
                then: 'Form shows error'
            });
        }
    }

    if (feature === 'Email') {
        testCases.push({
            scenario: 'Valid input',
            given: 'User enters user@example.com',
            when: 'Form is submitted',
            then: 'Form accepts it'
        });
        testCases.push({
            scenario: 'Invalid input',
            given: 'User enters user@',
            when: 'Form is submitted',
            then: 'Form shows error'
        });
        testCases.push({
            scenario: 'Edge case',
            given: 'User enters <script>',
            when: 'Form is submitted',
            then: 'Form shows error'
        });
        if (constraints.includes('required')) {
            testCases.push({
                scenario: 'Required field',
                given: 'User leaves it empty',
                when: 'Form is submitted',
                then: 'Form shows error'
            });
        }

    }
   

    return testCases;
}

module.exports = { generateTestCases };