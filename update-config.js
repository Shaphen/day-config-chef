const fs = require('fs');
const path = require('path');

// File to update
const filename = path.join(__dirname, 'day_config.txt');

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Read the file
let lines = fs.readFileSync(filename, 'utf-8').split('\n');

// Update the first line if it starts with the expected prefix
if (lines[0].startsWith('# updated:')) {
    console.log("Updated");
  lines[0] = `# updated: ${today}`;
}

// Write the updated content back to the file
fs.writeFileSync(filename, lines.join('\n'), 'utf-8');
