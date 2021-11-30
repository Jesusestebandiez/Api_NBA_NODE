const dotenv = require ("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const mongoDb= process.env.MONGO_DB;

const connect = async () => {
    try {
        const db = await mongoose.connect(mongoDb,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        const{name, host} = db.connection;
        console.log(`Base de datos conectada ${name} en ${host}`)
    } catch (error) {
        console.error('Error de conexión Db', error);
    }
}
module.exports = { connect };