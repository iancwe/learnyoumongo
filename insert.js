var mongo = require('mongodb').MongoClient
var argv = process.argv
var firstName = argv[2]
var lastName = argv[3]
var doc = {
  firstName: firstName,
  lastName: lastName
}

mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db) {
      // db gives access to the database
  if (err) return console.error(err)
  var collection = db.collection('docs')

  collection.insert(doc, function (err, documents) {
    if (err) return console.error(err)
    console.log(JSON.stringify(doc))
    db.close()
  })
})
