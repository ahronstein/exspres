const express = require("express");
const app = express();
const port = 3000;
const pagesRoutes = require("./routes/pages");
const filesRoutes = require("./routes/files");
const contactsRoutes = require("./routes/contacts.js");

app.use("/pages", pagesRoutes);
app.use("/files", filesRoutes);
app.use("/contacts", contactsRoutes);
 
app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});

// /files
// /files/people
// /files/shops
// /contacts/
// /contacts
// /comps/fectorial/${num}
// /comps/primes/${num}
