const oracledb = require('oracledb');

const connString = process.env.ORACLE_CONN_STRING || '';

if (!connString) {
    console.error('ORACLE_CONN_STRING is not defined');
    process.exit(1);
}

const connectDB = async () => {
    try {
        const conn = await oracledb.getConnection({
            user: 'sys',
            password: 'inaki',
            connectString: connString,
            privilege: oracledb.SYSDBA,
        });

        console.log('Oracle DB is connected');

        return conn;
    } catch(err) {
        console.error('ERROR trying to connect with DB');
        process.exit(1);
    }
}

module.exports = connectDB;