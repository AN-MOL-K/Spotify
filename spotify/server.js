// const express = require('express');
// const app = express();
// const path = require('path');

// // Serve static files from current directory (everything)
// app.use(express.static(path.join(__dirname)));

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });

const fs = require('fs');
console.log("Checking songs folder...");
console.log(fs.readdirSync("./songs"));
console.log("NCS folder:");
console.log(fs.readdirSync("./songs/ncs"));
