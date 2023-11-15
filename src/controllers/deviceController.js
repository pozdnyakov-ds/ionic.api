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
    const {
        body,
        params: { deviceId },
    } = req;
    if (!deviceId) {
        return;
    }
    const registeredDevice = deviceService.registeredDevice(
        deviceId,
        body
    );
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send({ status: 'OK', data: registeredDevice });
};

module.exports = {
    getDevice,
    registerDevice,
};
