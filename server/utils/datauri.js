const DataUriParser = require('datauri/parser.js');

const path = require('path');

const getDataUri = (file) => {
    const parser = new DataUriParser();
    const extName = parser.extName(file.originalname).toString();
    return parser.format(extName, file.buffer);
}

module.exports = { getDataUri };