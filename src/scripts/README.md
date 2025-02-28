# Google Apps Script Deployment Instructions

This document provides instructions on how to deploy the Google Apps Script for your contact form.

## Step 1: Create a New Google Apps Script Project

1. Go to [Google Apps Script](https://script.google.com/)
2. Click on "New Project"
3. Delete any code in the editor
4. Copy and paste the entire code from `appscript.js` into the editor
5. Rename the project to something like "Portfolio Contact Form Handler"

## Step 2: Deploy the Web App

1. Click on "Deploy" > "New deployment"
2. For "Select type", choose "Web app"
3. Fill in the following details:
   - Description: "Portfolio Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (This allows your form to submit data without authentication)
4. Click "Deploy"
5. Copy the Web App URL that is provided after deployment

## Step 3: Update Your React Application

1. In your `Contact.tsx` file, replace the `scriptURL` value with your new Web App URL:

```typescript
const scriptURL = 'YOUR_NEW_DEPLOYMENT_URL_HERE';
```

## Step 4: Test the Form

1. Fill out the contact form on your portfolio website
2. Submit the form
3. Check your Google Sheet to verify that the data was correctly added

## Troubleshooting

If your form submissions are not appearing in your Google Sheet:

1. Check the browser console for any errors
2. Verify that your Google Sheet has the correct column headers:
   - Timestamp
   - Name
   - Email
   - Phone
   - Subject
   - Message
3. Make sure your Apps Script has the correct Google Sheet ID
4. Try running the `testAppendRow` function in the Apps Script editor to verify the script can write to your sheet

## CORS Issues

If you encounter CORS issues:

1. Make sure you're using `mode: 'no-cors'` in your fetch request
2. Ensure your Apps Script is deployed as a web app with "Anyone" access
3. Consider adding CORS headers to your Apps Script response:

```javascript
// Add these lines before returning the response in doPost function
const output = ContentService.createTextOutput(JSON.stringify({
  'status': 'success',
  'message': 'Data successfully saved'
})).setMimeType(ContentService.MimeType.JSON);

// Add CORS headers
output.setHeader('Access-Control-Allow-Origin', '*');
return output;
``` 