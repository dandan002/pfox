var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

let latlon = "";
			const successCallback = (position) => {
				console.log(position);
				latlon += position.coords.latitude + "," + position.coords.longitude;
				console.log(latlon);
			};
			const errorCallback = (error) => {
				console.error(error);
			};
			navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

const { MongoClient } = require("mongodb");
// Connection URI
const uri =
  "mongodb+srv://dandan010:dkssud010@cluster0.7c00ea1.mongodb.net/?retryWrites=true&w=majority";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("kaisMom").command({ ping: 1 });
    console.log("Connected successfully to server");

    const doc = { latlong: latlon };
    const collection = client.db("kaisMom").collection("userEntries");
    const result = await collection.insertOne(doc);
    console.log(
        `A document was inserted with the _id: ${result.insertedId}`,
        );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
