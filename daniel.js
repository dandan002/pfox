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
    dbo = client.db("kaisMom");
    console.log("Connected successfully to server");

    const doc = { name: "Neapolitan pizza", shape: "round" };
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
