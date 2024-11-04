module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))