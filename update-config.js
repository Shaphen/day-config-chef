const fs = require('fs');
const path = require('path');

// File to update
const filename = path.join(__dirname, 'daily_comment.txt');

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Read the file
let lines = fs.readFileSync(filename, 'utf-8').split('\n');

// Update the first line if it starts with the expected prefix
if (lines[0].startsWith('# Daily update:')) {
  lines[0] = `# Daily update: ${today}`;
}

// Write the updated content back to the file
fs.writeFileSync(filename, lines.join('\n'), 'utf-8');

console.log(`Updated comment date to ${today}`);
