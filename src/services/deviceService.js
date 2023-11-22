const Device = require('../database/Device');

const getDevice = async (deviceId) => {
    const device = await Device.getDevice(deviceId);
    return device;
};

const registerDevice = (deviceId, token) => {
    const registeredDevice = Device.registerDevice(
        deviceId,
        token
    );
    return registeredDevice;
};

module.exports = {
    getDevice,
    registerDevice,
};
