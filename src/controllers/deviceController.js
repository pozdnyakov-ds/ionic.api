const deviceService = require('../services/deviceService');

const getDevice = async (req, res) => {
    const {
        params: { deviceId },
    } = req;
    if (!deviceId) {
        return;
    }
    
    const device = await deviceService.getDevice(deviceId);
    if (device && device.length) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send({ status: 'OK', code: 200, data: device });
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send({ status: 'No data', code: 204, data: [] });
    }    
};

const registerDevice = (req, res) => {
    const { device_id, token } = req.body;

    if (!device_id) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send({ status: 'Error', code: 204, data: JSON.stringify(req.body) });
        return;
    }

    const registeredDevice = deviceService.registerDevice(
        device_id,
        token
    );
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (registeredDevice) {
    	res.send({ status: 'OK', code: 200, data: registeredDevice });
    } else {
        res.send({ status: 'API register error', code: 204, data: 0 });
    }

};

module.exports = {
    getDevice,
    registerDevice,
};
