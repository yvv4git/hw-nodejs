const crypto = require('crypto');

function generateEthereumAddress() {
    const id = crypto.randomBytes(32).toString('hex');
    const privateKey = new Buffer.from(id, 'hex');
    const address = "0x" + privateKey.toString('hex').slice(24);
    return address;
}

module.exports = generateEthereumAddress;