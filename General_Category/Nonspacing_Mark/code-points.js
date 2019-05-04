module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,45,154,91,182,228,172,14,131,39,212,15,5,38,190,140,229,95,103,254,211,56,254,164,253,80,162,118,98,41,14,8,48,213,253,95,101,255,171,156,127,85,191,253,156,253,220,253,196,126,222,126,190,253,228,126,106,63,27,87,27,215,27,215,27,215,27,215,27,215,27,215,27,215,27,215,27,215,27,215,27,55,27,55,27,55,27,55,27,55,27,55,27,55,27,55,27,55,27,55,243,175,127,191,253,156,253,220,253,196,126,222,126,190,253,228,126,106,63,189,159,141,59,27,119,54,238,108,220,217,184,179,113,103,227,206,198,157,141,59,27,119,54,238,110,220,221,184,187,113,119,227,238,198,221,141,187,27,119,55,238,110,220,221,184,216,184,216,184,216,184,216,184,216,184,216,184,216,184,216,184,216,184,216,184,183,113,111,227,222,198,189,141,123,27,247,54,238,109,220,219,184,183,113,111,227,190,141,251,54,238,219,184,111,227,190,141,251,54,238,219,184,111,227,190,141,251,54,46,55,46,55,46,55,46,55,46,55,46,55,46,55,46,55,110,199,163,119,60,122,199,163,119,60,122,199,163,119,60,122,199,163,119,60,122,199,163,119,60,122,199,163,119,60,206,217,135,44,36,80,64,3,123,227,237,91,47,36,80,64,3,220,216,87,95,56,192,5,2,120,0,140,128,17,48,2,70,192,120,48,30,140,7,227,193,120,48,30,140,7,227,193,120,48,30,140,15,198,7,227,131,241,193,248,96,144,238,35,221,71,186,143,116,159,210,77,24,9,35,97,36,140,132,145,48,18,70,194,72,24,9,163,8,46,226,138,184,34,164,8,161,95,62,158,251,241,220,143,231,126,60,247,227,185,31,207,253,120,238,199,115,63,158,251,241,220,143,231,230,122,108,65,223,2,120,192,7,36,80,64,3,203,205,53,219,2,140,11,227,194,184,48,232,251,164,239,147,190,79,250,62,233,251,164,239,147,190,79,250,170,232,166,162,155,138,116,139,116,139,116,139,116,139,116,139,36,139,36,139,36,139,36,139,206,41,58,167,232,18,230,240,97,2,31,102,240,97,10,31,230,240,97,226,28,28,124,176,240,193,195,7,19,31,92,124,176,241,193,199,7,35,31,156,124,176,242,193,203,7,51,31,220,124,176,243,193,207,7,67,31,28,125,176,244,193,211,7,83,31,92,125,176,245,193,215,7,99,31,156,125,176,246,193,219,103,8,30,130,135,224,33,120,8,30,130,135,224,33,120,20,204,107,205,190,214,253,109,255,45,232,219,44,108,255,45,28,224,2,1,60,224,91,120,64,17,82,132,20,33,69,72,233,70,2,232,21,122,133,94,19,220,4,55,193,77,112,19,220,4,55,193,77,220,16,55,196,13,113,187,162,221,179,147,100,161,129,13,185,31,176,239,182,112,128,11,4,240,128,15,72,160,128,6,96,144,238,37,221,75,186,151,116,47,233,94,210,189,164,123,73,247,146,238,37,221,75,186,151,116,47,233,222,70,158,156,47,57,95,114,190,13,131,196,47,137,95,18,191,36,126,73,252,14,140,129,49,48,6,198,192,216,5,249,198,174,200,11,7,184,64,0,15,248,128,101,4,239,22,188,86,240,10,193,43,4,175,16,188,66,240,10,81,220,229,61,130,247,8,114,14,146,140,214,159,5,52,128,0,73,6,73,62,30,249,120,36,203,210,125,228,252,200,239,145,223,35,191,143,252,190,31,223,48,195,135,25,152,206,151,73,124,153,196,151,121,121,153,131,151,57,120,153,111,11,220,192,37,25,186,182,162,249,184,65,206,73,206,73,103,39,9,37,9,213,78,136,203,148,188,76,201,203,148,188,76,201,133,2,54,142,121,185,192,13,94,139,13,240,178,83,93,182,170,203,94,117,217,172,46,187,213,101,187,186,236,85,151,69,252,178,122,239,56,17,199,88,54,99,217,140,101,51,70,67,71,12,180,129,54,59,77,119,96,122,97,151,155,192,217,129,159,227,172,249,23,62,128,63,119,138,47,4,192,141,167,107,5,52,48,11,31,127,126,252,185,227,182,176,122,247,7,236,203,4,142,13,60,25,248,47,240,95,224,141,192,27,17,59,17,23,248,182,175,26,140,96,196,166,187,240,128,15,88,218,91,171,4,123,79,176,247,4,3,181,208,192,114,191,199,159,100,154,59,200,193,120,4,227,177,208,192,134,36,33,12,207,2,113,219,247,11,196,145,125,146,125,126,196,145,115,38,113,59,240,193,18,25,44,140,193,160,44,36,80,64,3,203,96,157,12,214,201,96,157,12,234,151,160,128,9,70,48,24,193,160,134,9,138,152,96,13,11,214,176,96,80,22,244,109,67,102,109,177,240,128,15,72,64,55,26,88,46,203,92,176,204,5,203,92,176,204,5,203,92,176,204,5,203,92,176,194,45,16,76,86,67,86,67,86,83,196,21,113,205,181,230,90,35,64,186,211,186,129,0,233,14,233,14,233,206,160,50,48,72,119,24,148,33,231,97,80,70,137,51,150,179,99,249,126,59,143,22,14,112,129,0,30,240,1,9,20,208,0,140,3,227,192,56,48,14,140,3,227,192,56,48,14,140,3,227,192,184,48,46,140,11,227,194,184,48,46,140,11,227,194,184,48,118,244,223,217,49,127,184,248,225,226,135,139,31,46,126,184,248,225,226,135,139,223,217,61,106,129,224,143,184,143,184,143,144,143,144,230,207,237,166,119,134,184,33,110,215,146,119,121,143,203,123,92,222,227,242,30,151,52,118,237,91,8,110,172,19,183,118,90,81,6,244,49,160,143,1,253,102,187,100,161,128,94,8,1,55,214,172,31,35,248,49,130,73,119,38,221,153,191,29,223,133,89,208,141,226,70,113,99,199,55,217,148,146,73,156,108,74,201,142,147,108,54,201,102,147,108,54,201,102,147,108,54,11,48,6,198,16,55,48,6,249,29,203,60,63,96,157,152,84,130,73,71,36,83,55,217,58,118,249,91,1,106,189,100,81,77,106,189,164,174,75,234,186,164,84,75,138,177,164,24,75,138,177,204,2,118,179,89,88,70,237,120,44,60,224,3,18,40,160,129,13,166,146,73,138,152,100,177,76,150,200,5,238,162,199,58,153,76,206,164,126,73,234,151,100,154,38,19,49,153,136,73,193,146,156,58,146,99,71,114,238,72,14,30,201,201,35,57,122,36,103,143,228,208,145,84,237,73,217,158,212,237,73,225,158,84,238,73,233,158,212,238,73,241,158,212,62,73,237,147,212,62,73,237,147,212,62,73,237,147,179,163,191,16,192,3,184,70,86,76,206,164,6,73,102,104,50,67,147,241,77,38,231,194,30,93,176,119,97,239,194,222,133,189,11,123,23,246,46,236,93,216,187,176,119,253,30,113,143,56,142,85,12,124,49,240,197,192,23,53,72,81,131,20,229,199,2,33,28,169,152,6,197,12,88,208,159,251,72,44,191,192,141,181,104,97,224,5,125,123,192,7,36,80,64,3,75,187,228,119,201,143,237,120,161,128,189,27,60,156,221,121,225,2,132,144,1,155,117,177,89,23,75,125,177,212,23,155,117,177,89,23,155,245,2,12,14,118,172,252,197,202,191,64,48,135,187,93,101,254,213,46,28,192,222,125,100,250,72,237,145,26,229,116,165,191,113,2,37,73,182,237,162,156,46,202,233,162,156,46,202,233,98,43,47,182,242,162,156,46,202,233,162,156,46,202,233,98,123,47,182,247,98,59,89,128,17,48,2,70,192,8,24,1,131,161,96,99,41,54,150,5,24,116,113,210,197,249,96,60,24,15,6,61,158,31,12,186,61,233,246,164,219,243,131,241,193,248,96,124,48,62,24,31,140,132,145,48,18,70,194,72,24,9,35,97,36,12,157,189,57,124,39,167,239,228,248,77,53,82,84,35,11,4,51,90,212,37,11,4,151,78,164,28,73,57,51,83,45,53,213,210,2,199,82,206,205,143,131,243,227,228,252,56,58,63,206,206,239,232,16,11,131,227,51,3,176,243,65,135,90,254,228,152,252,56,39,115,100,108,182,237,102,219,110,142,140,205,145,177,57,50,54,71,198,214,145,113,23,223,16,62,33,7,80,58,237,28,214,8,240,19,166,208,215,91,200,121,85,103,30,31,122,124,234,241,177,199,231,30,31,124,124,242,57,165,3,109,233,68,171,99,144,207,65,62,8,249,36,228,163,144,207,66,135,61,31,20,55,197,77,113,83,220,18,183,196,45,113,75,220,18,119,123,251,220,224,120,182,120,132,87,184,49,87,103,223,203,225,119,123,135,77,241,166,118,14,206,136,224,19,126,194,20,58,166,133,236,44,120,27,100,211,193,61,32,241,21,41,220,248,208,254,26,218,81,67,219,103,112,160,1,55,102,107,180,39,228,202,221,220,192,16,234,122,248,186,34,165,118,217,78,23,209,217,146,90,120,132,226,62,113,159,184,122,202,245,83,158,184,79,220,39,110,18,201,89,0,244,247,39,252,132,41,44,97,11,97,133,242,9,229,19,202,39,148,79,40,159,80,62,161,124,66,249,132,242,9,229,19,202,135,213,229,169,186,124,42,47,119,219,82,204,83,158,79,121,62,229,249,148,39,63,52,128,138,17,139,3,1,120,133,190,242,132,159,48,133,112,191,250,9,21,83,138,105,244,191,33,38,149,85,250,251,180,16,86,81,65,45,134,144,152,210,8,22,165,197,162,174,127,41,68,13,103,62,151,87,174,170,84,66,237,58,196,206,255,177,113,128,159,208,87,74,216,194,1,215,159,224,17,94,97,8,197,13,113,67,220,16,55,196,13,113,63,93,255,116,253,211,245,79,215,83,154,41,205,148,102,74,51,165,153,210,76,113,83,220,20,55,197,45,113,217,196,19,175,238,122,199,14,153,172,43,96,8,159,240,19,178,71,171,120,105,85,47,173,242,101,143,76,71,120,133,45,212,245,243,19,234,238,167,187,95,8,159,112,84,10,104,243,151,242,252,126,194,35,188,66,182,119,60,3,150,176,133,236,233,170,125,134,223,169,192,43,84,60,250,195,111,85,160,138,1,250,121,171,1,149,3,20,105,195,25,17,60,194,43,84,204,168,130,24,21,19,35,238,168,146,24,151,18,174,37,84,76,144,231,162,106,138,79,215,83,215,25,139,225,8,9,94,97,8,159,176,132,168,117,27,225,182,242,25,60,179,216,66,174,79,232,58,158,89,12,225,19,126,194,20,138,21,98,133,88,42,89,168,98,23,217,171,127,148,246,139,165,235,108,85,63,234,89,80,49,42,108,92,217,184,180,113,109,243,83,177,68,89,187,56,226,142,184,212,14,191,163,239,231,239,123,8,83,232,18,203,53,22,87,130,13,243,23,122,110,232,185,161,231,134,158,27,122,174,74,155,159,106,155,159,138,155,159,202,143,31,123,229,34,91,243,143,159,25,65,88,59,169,132,33,244,149,79,152,194,18,162,243,29,69,30,69,30,69,30,69,170,103,74,119,75,119,75,119,75,119,235,239,110,9,91,72,14,165,98,177,84,45,150,202,197,82,169,200,206,72,13,248,9,83,168,250,144,234,229,71,65,75,113,168,24,106,151,31,63,219,129,186,107,174,170,67,245,243,81,63,31,245,243,225,8,177,171,18,189,113,152,107,160,175,80,92,30,106,167,69,174,168,90,60,151,74,108,241,8,175,80,119,201,118,241,19,166,80,241,161,72,233,176,194,47,82,98,157,80,241,26,170,94,131,218,106,177,132,45,84,164,114,102,222,149,126,34,46,253,70,92,250,105,184,244,219,112,233,199,225,210,175,195,165,95,134,75,63,13,151,126,27,46,253,56,92,250,117,120,251,250,26,91,8,183,168,17,23,143,240,10,67,248,132,159,80,172,80,185,252,140,163,114,250,39,60,66,23,216,174,176,117,125,84,119,143,174,143,174,143,74,239,81,237,61,46,190,85,125,211,243,151,95,89,64,149,226,20,158,151,253,23,252,132,41,44,33,220,171,231,222,79,241,170,246,175,114,96,71,46,253,82,8,234,74,73,161,164,80,82,40,41,180,20,90,10,148,246,170,112,74,21,78,169,194,41,85,56,224,19,126,194,20,150,176,133,188,5,187,54,40,238,19,87,249,107,124,111,41,207,82,158,165,60,235,243,245,20,150,16,181,82,239,177,202,129,98,233,141,168,226,74,63,167,129,196,203,213,87,174,190,45,253,150,126,75,191,165,223,210,239,207,241,45,36,219,214,83,90,79,105,61,165,245,148,214,83,90,79,225,151,105,80,220,20,55,197,45,113,75,92,245,112,171,135,91,61,220,234,225,86,15,243,43,222,98,43,94,253,220,234,231,110,197,235,252,196,143,39,165,234,14,60,194,43,12,225,19,114,100,210,129,82,63,241,129,186,123,117,151,25,23,58,80,134,78,148,65,85,0,74,153,209,12,205,229,197,79,200,245,163,103,105,6,5,51,104,247,131,125,46,24,194,39,252,132,9,150,177,132,45,28,176,197,93,47,129,171,240,120,226,226,122,30,76,97,9,169,183,131,127,128,83,67,149,61,252,144,163,230,185,249,212,164,47,166,47,230,223,197,116,83,110,218,205,168,81,249,190,141,121,101,94,153,87,230,149,121,101,158,254,117,108,248,177,71,205,113,115,221,72,37,116,132,216,230,239,175,213,188,90,179,212,124,110,210,77,185,105,55,163,134,147,204,213,2,166,230,186,9,55,86,249,172,242,89,229,179,202,103,149,207,42,105,149,180,74,90,37,173,242,151,82,90,37,173,146,86,73,171,164,85,202,42,101,149,178,74,89,165,172,82,86,41,171,148,85,202,42,101,149,182,74,91,165,173,210,86,105,171,180,85,218,42,109,149,182,74,91,101,172,50,86,25,171,140,85,198,42,99,149,177,202,88,101,164,194,129,86,205,115,243,185,73,55,229,230,47,82,207,227,120,171,230,184,185,110,172,114,172,114,172,114,172,114,172,114,172,114,172,114,173,114,173,114,173,114,173,114,173,114,173,114,173,114,173,114,173,114,173,18,86,9,171,132,85,194,42,97,149,176,74,88,37,172,18,86,9,171,60,171,60,171,60,171,60,171,216,159,207,254,124,246,231,179,63,159,253,249,236,207,103,127,62,251,243,217,159,207,62,123,118,1,255,162,114,216,230,126,110,142,155,235,38,220,124,110,210,77,185,105,55,166,123,0,62,15,192,231,1,248,60,0,159,7,224,243,0,124,30,128,207,3,240,121,0,62,13,128,22,81,53,199,205,117,19,110,158,155,207,77,186,105,55,166,143,233,99,250,152,62,166,143,233,99,250,152,46,215,109,99,21,245,196,29,245,196,29,245,132,254,21,70,77,184,121,110,202,77,187,49,239,152,119,204,59,230,29,243,244,238,90,100,213,152,231,151,158,107,222,53,79,174,139,163,183,141,163,183,221,38,221,148,155,118,51,106,244,210,161,127,96,166,209,197,244,175,24,250,103,230,173,33,228,179,239,200,103,223,145,207,190,35,159,237,216,252,220,56,82,62,251,238,247,215,132,155,231,230,115,147,110,202,205,110,18,187,234,178,183,208,28,55,215,77,184,121,110,62,55,233,166,220,252,209,71,77,89,165,172,82,86,41,171,148,85,202,42,101,149,178,74,89,165,172,210,86,105,171,180,85,218,42,109,149,182,74,91,165,173,210,86,105,171,140,85,198,42,99,149,177,202,88,101,172,50,86,25,171,140,85,70,42,252,223,22,53,199,205,117,19,110,158,155,207,77,186,41,55,237,198,42,199,42,199,42,199,42,199,42,199,42,199,42,199,42,199,42,199,42,199,42,215,42,215,42,215,42,215,42,215,42,215,42,215,42,215,42,215,42,215,42,97,149,176,74,88,37,172,18,86,9,171,132,85,194,42,97,149,176,202,179,202,179,202,179,202,179,202,179,202,179,202,179,202,179,202,179,202,179,202,103,149,207,42,159,85,62,171,124,86,249,172,242,89,229,179,138,77,75,145,72,99,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,109,239,182,189,219,246,110,219,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,216,187,99,239,142,189,59,246,238,204,252,239,255,243,24,237,9,210,40,0,0])))