const Device = require('../database/Device');

const getDevice = async (deviceId) => {
    const device = await Device.getDevice(deviceId);
    return device;
};

const registerDevice = async (deviceId, token) => {
    const registeredDevice = await Device.registerDevice(
        deviceId,
        token
    );
    return registeredDevice;
};

module.exports = {
    getDevice,
    registerDevice,
};
