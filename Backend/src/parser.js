function parseDescription(description) {
    const lowerDesc = description.toLowerCase();
    if (lowerDesc.includes('phone')) {
      return {
        feature: 'Phone number',
        constraints: ['10 digits', 'required']
      };
    }
    if (lowerDesc.includes('email')) {
      return {
        feature: 'Email',
        constraints: ['valid format', 'required']
      };
    }
    return {
      feature: 'Unknown',
      constraints: []
    };
  }
  
  module.exports = { parseDescription };