module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64')))