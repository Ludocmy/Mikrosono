import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    // connect the client to the server
    await client.connect();
    // send a ping to confirm client connection 
    await client.db("admin").command({ping: 1});
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    );
} catch(err) {
    console.error(err);
}

let db = client.db("employees");

export default db;