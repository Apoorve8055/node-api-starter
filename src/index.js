const app = require('./app');
const PORT = process.env.PORT_NUMBER || 5000;

app.listen(PORT,
    () =>
    console.log(`Server start visit http://127.0.0.1:${PORT}`)
);