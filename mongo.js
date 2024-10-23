// Display all of the contacts list.
// Display all the information about only one person using his ID.
// Display all the contacts with an age >18.
// Display all the contacts with an age>18 and name containing "ah".
// Change the contact's first name from"Kefi Seif" to "Kefi Anis".
// Delete the contacts that are aged under <5.
// Display all of the contacts list
 
 db.contactlist.insertMany([
    { lastName: "Ben", firstName: "Moris", email: "ben@gmail.com", age: 26 },
    { lastName: "Kefi", firstName: "Seif", email: "kefi@gmail.com", age: 15 },
    { lastName: "Emilie", firstName: "brouge", email: "emilie.b@gmail.com", age: 40 },
    { lastName: "Alex", firstName: "brown", age: 4 },
    { lastName: "Denzel", firstName: "Washington", age: 3 }
  ]);
  
  // Display all of the contacts list.
  db.contactlist.find()
  
  // Display all the information about only one person using his ID.
  db.contactlist.findOne({
    { _id: ObjectId("6718270b73e8a86f048685a6") }    
  })
  // Display all the contacts with an age >18.
  db.contactlist.find({"age": {$gt : 18}})

  // Change the contact's first name from"Kefi Seif" to "Kefi Anis".
  db.contactlist.updateOne({"firstname": "Seif"}, {
    
                           $set :{"firstname": "Anis"}})

  // Delete the contacts that are aged under <5.

  db.contactlist.deleteMany({"age": {$lt : 5}})

  // Display all of the contacts list
  db.contactlist.find()

  


  