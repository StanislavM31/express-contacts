require('dotenv').config();

let app = require('./src/app');

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`SERVER RUN ON PORT = ${port}`);
});
