const Device = require('../database/Device');

const getDevice = async (deviceId) => {
    const device = await Device.getDevice(deviceId);
    return device;
};

const registerDevice = (deviceId, changes) => {
    const registeredDevice = Device.registerDevice(
        deviceId,
        changes
    );
    return registeredDevice;
};

module.exports = {
    getDevice,
    registerDevice,
};
