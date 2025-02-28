/**
 * Handles POST requests to the web app.
 * This function can process both JSON data and URL parameters.
 */
function doPost(e) {
  try {
    let formData;
    
    // Check if we have JSON data
    if (e.postData && e.postData.contents) {
      try {
        // Try to parse as JSON
        formData = JSON.parse(e.postData.contents);
      } catch (jsonError) {
        // If JSON parsing fails, log the error but continue
        console.error('JSON parsing error:', jsonError);
      }
    }
    
    // If JSON parsing failed or wasn't available, try URL parameters
    if (!formData && e.parameter) {
      formData = e.parameter;
    }
    
    // If we still don't have data, return an error
    if (!formData) {
      throw new Error('No form data received');
    }
    
    // Get the spreadsheet and sheet
    const ss = SpreadsheetApp.openById('1QLb0CsGBJuLp-tQcUt-n0biGG6DTs1qvXS19kPzco_4');
    const sheet = ss.getSheetByName('Sheet1');
    
    // Prepare the data row
    const row = [
      new Date(), // Timestamp
      formData.name || '',
      formData.email || '',
      formData.phone || '',
      formData.subject || '',
      formData.message || ''
    ];
    
    // Append the row
    sheet.appendRow(row);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data successfully saved'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch(error) {
    // Log the error for debugging
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Test function to verify the script is working
 */
function testAppendRow() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '1234567890',
    subject: 'Test Subject',
    message: 'This is a test message'
  };
  
  const ss = SpreadsheetApp.openById('1QLb0CsGBJuLp-tQcUt-n0biGG6DTs1qvXS19kPzco_4');
  const sheet = ss.getSheetByName('Sheet1');
  
  const row = [
    new Date(),
    testData.name,
    testData.email,
    testData.phone,
    testData.subject,
    testData.message
  ];
  
  sheet.appendRow(row);
  
  return 'Test row added successfully';
} 