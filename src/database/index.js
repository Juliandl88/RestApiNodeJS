const { MongoClient } = require("mongodb");
const debug = require("debug")("app:module-database");
const Config = require("./config");

var connection = null;
module.exports.Database = (collection) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!collection) {
        const clien = new MongoClient();
        connection = await client.connect(Config.mongoUri);
        debug("Nueva conexión realizada con MongoDB Atlas");
      }
      debug("Reutilizando conexión");
      const db = connection.db(Config.mongoDBname);
      resolve(db.collection(collection));
    } catch (error) {
      reject(error);
    }
  });