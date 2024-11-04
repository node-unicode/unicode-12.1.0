module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))