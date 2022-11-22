const router = require("express").Router();
const contacts = require("../public/contacts");

router.get("/", (req, res) => {
  res.status(200).json(contacts);
});
router.get("/:contactId", (req, res) => {
  const contact = contacts.find((c) => c.id === parseInt(req.params.contactId));
  if (contact) {
    res.status(200).json(contacts[req.params.contactId - 1]);
  }
  res.send("contact not found");
});
module.exports = router;
