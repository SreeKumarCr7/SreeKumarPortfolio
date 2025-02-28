import { google } from 'googleapis';

// Initialize the Google Sheets API
const initializeGoogleSheets = (credentials) => {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
};

// Append data to Google Sheet
export const appendToGoogleSheet = async (formData) => {
  try {
    // Read credentials from environment variables
    const credentials = {
      type: process.env.GOOGLE_TYPE,
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.GOOGLE_CLIENT_X509_CERT_URL
    };

    const sheets = initializeGoogleSheets(credentials);
    
    // Format the data for Google Sheets
    const values = [[
      new Date().toISOString(),
      formData.name,
      formData.email,
      formData.phone || '',
      formData.subject,
      formData.message
    ]];

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A:F', // Assumes headers are: Timestamp, Name, Email, Phone, Subject, Message
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    console.log('Data appended to Google Sheet:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    throw error;
  }
}; 