// retrieve person documents
db.people.find({
  height: {
    $lt: 60, // `lt` means less than
  }
}).count();
