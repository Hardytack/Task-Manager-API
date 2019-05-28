//CRUD operations. Create, Read, Update and Delete.

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log("An error has occured");
    }

    const db = client.db(databaseName);

    // db.collection('users').updateOne({ 
    //     _id: new ObjectID("5cbe512f225f20f710fd03bd")
    // }, {
    //     $inc: {
    //         age: -1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').insertOne({
    //     name: 'Kairi',
    //     age: 3
    // }).then((result) => {
    //     console.log("user added successfully")
    // }).catch((error) => {
    //     console.log("an error occured")
    // })

    // db.collection('users').updateMany({
    //     age: 3
    // }, {
    //     $inc: {
    //         age: -1
    //     }
    // }).then((result) => {
    //     console.log("update success")
    // }).catch((error) => {
    //     console.log("an error has occured")
    // })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log("an error has occured")
    // })

    db.collection('tasks').deleteOne({
        description: 'Buy groceries'
    }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log("an error has occured")
    })

});

