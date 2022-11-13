const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static("images"));
app.get('/style.css', function(req, res) {
  res.sendFile(__dirname + "/" + "style.css");
});
const path = require('path');

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/upload.html',function(req,res){
  res.sendFile(path.join(__dirname+'/upload.html'));
});

app.listen(process.env.port || 3000);
console.log('Running at Port 3000');

app.post('/example', (req, res) => {
  let image = req.body.foxPhoto;
  fetch('https://upload.estuary.tech/content/add', {
					method: "POST",
					headers: {
						Authorization: 'Bearer EST630a2c84-4998-4f69-b6a6-ca1f5d166f8aARY',
					},
					body: image
				}).then((response) => {
					console.log(response);
				});
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});






/*let latlon = "";
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
run().catch(console.dir);*/
