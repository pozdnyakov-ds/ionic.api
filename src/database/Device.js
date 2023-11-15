const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createPool({
    host:     process.env.MYSQL_HOST,
    port:     process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user:     process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,

    connectionLimit: 5,
    waitForConnections: true,
    idleTimeout: 60000,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

const getDevice = async (deviceId) => {
    try {
        var device = await new Promise((resolve, reject) => {
            db.query(`SELECT displays.id AS display_id, displays.name AS display_name, displays.description AS display_description, displays.code AS display_code, 
                displays.layout AS display_layout, displays.display_group AS display_group_id, displays.token AS display_token, 
                displays_groups.name AS display_group_name, 
                displays.partner AS partner_id, 
                partners.name AS partner_name, partners.logo AS partner_logo, 
                layouts.name AS layout_name  
                
                FROM displays
                LEFT JOIN partners ON partners.id = displays.partner
                LEFT JOIN displays_groups ON displays_groups.id = displays.display_group
                LEFT JOIN layouts ON layouts.id = displays.layout 
                WHERE partners.status=1 AND displays.status=1 AND displays.code=?
                LIMIT 1`, [deviceId], (err, data) => {
                    if (err) { reject(err)} else {resolve(data) }
                });
        })

        console.log("data: ", device);

        if (!device) { 
            return;
        }
        return device;

    } catch (e) {
        return;
    }
};

const registerDevice = (deviceId, changes) => {
    // const indexForUpdate = DB.devices.findIndex(
    //     (device) => device.id === deviceId
    // );
    // if (indexForUpdate === -1) {
    //     return;
    // }
    // const registeredDevice = {
    //     ...DB.devices[indexForUpdate],
    //     ...changes,
    //     registeredAt: new Date().toLocaleString('ru-RU', {
    //         timeZone: 'UTC+3',
    //     }),
    // };
    // DB.devices[indexForUpdate] = registeredDevice;
    // saveToDatabase(DB);
    // return registeredDevice;
    return;
};

module.exports = {
    getDevice,
    registerDevice
};


