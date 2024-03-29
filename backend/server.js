
const express = require('express');
const mongoose = require('mongoose');

const {MongoClient, ServerApiVersion } = require('mongodb');

const cors = require('cors');

const URL = "mongodb+srv://Yashar:33456Yashar@cluster0.wcrhxar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URL, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);