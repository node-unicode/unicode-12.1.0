module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,109,154,201,178,236,56,114,68,255,165,215,90,60,204,228,146,0,2,154,231,89,106,125,134,254,95,44,235,60,89,118,174,105,145,109,30,93,151,78,247,64,70,56,153,85,255,253,135,231,15,127,246,135,249,126,214,251,217,239,39,222,207,121,63,127,254,126,254,226,253,252,229,251,249,171,247,243,215,239,231,111,222,207,223,190,159,191,123,63,127,255,126,254,225,253,252,227,251,249,167,247,243,207,239,231,95,222,207,191,190,159,127,123,63,255,254,126,254,227,253,252,231,251,249,175,247,243,199,255,253,245,107,253,2,36,64,6,20,64,5,52,64,7,12,192,5,184,1,15,96,2,22,96,3,2,112,62,96,163,103,163,103,163,103,163,103,163,103,163,103,163,103,35,99,35,99,35,99,35,99,35,99,35,99,127,100,164,95,191,0,25,80,1,29,112,1,30,192,2,192,147,224,73,240,36,120,18,60,9,158,4,79,130,39,193,147,225,201,240,100,120,50,60,25,158,12,79,134,39,195,83,224,41,240,20,120,10,60,229,6,76,192,6,124,78,39,213,4,40,128,6,24,0,100,84,100,84,100,52,100,52,100,52,100,52,100,52,236,52,120,26,60,13,158,14,79,135,167,195,211,225,233,240,116,120,58,60,29,158,1,207,128,103,192,51,224,25,240,12,250,51,232,207,160,63,23,109,185,224,185,224,185,224,185,232,207,5,207,133,176,11,194,11,97,23,13,191,81,120,115,139,155,206,223,220,226,230,22,55,183,184,209,124,99,249,70,234,13,243,3,243,131,230,7,194,7,194,7,194,7,205,15,132,15,82,31,8,39,10,39,132,19,169,147,47,201,132,112,162,112,66,200,146,73,172,148,196,2,73,172,139,196,150,72,44,135,196,78,72,172,130,180,185,156,13,144,24,252,244,29,243,192,123,32,53,184,123,224,61,80,24,200,8,164,6,60,7,25,135,203,15,151,31,100,28,120,14,60,7,158,243,225,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,172,157,204,218,201,133,63,102,201,100,150,76,46,92,197,146,201,44,153,92,185,59,219,38,87,100,84,100,176,118,50,107,39,179,118,10,99,94,24,243,194,116,151,241,249,70,21,230,180,92,23,224,6,60,128,5,128,153,57,45,140,103,185,185,5,115,90,152,211,114,55,0,247,98,96,11,3,91,110,110,122,115,211,123,2,184,59,179,92,110,100,48,212,133,161,46,15,122,30,100,48,221,229,65,6,99,94,24,243,242,32,131,121,47,15,50,30,100,48,131,133,92,46,204,96,33,151,11,41,92,8,223,66,230,22,102,176,48,131,133,25,44,204,96,97,6,11,51,88,152,193,194,12,22,102,176,48,122,133,137,43,7,241,76,92,57,116,236,124,175,250,184,168,140,94,253,149,0,25,80,0,21,208,0,29,48,0,23,224,6,60,128,9,88,128,13,8,0,122,24,225,154,208,195,44,215,132,30,134,186,38,244,48,221,53,161,135,49,175,9,61,204,123,77,232,97,240,107,66,15,27,160,38,244,176,10,106,70,15,59,161,102,244,176,28,106,70,15,91,162,102,244,176,46,106,70,15,123,163,102,244,176,64,106,70,15,155,164,102,244,16,253,149,232,175,68,127,37,250,43,209,95,137,254,74,244,87,162,191,178,19,42,59,161,18,253,149,229,80,137,254,58,224,25,240,12,120,46,120,216,18,149,45,81,217,18,149,16,175,44,135,202,78,168,172,130,202,6,168,12,126,101,222,43,99,94,153,238,74,100,87,134,186,50,203,149,17,174,76,110,37,178,43,145,93,39,60,36,117,157,240,76,120,8,232,58,225,33,169,235,132,135,119,135,202,187,67,229,149,161,242,166,80,73,243,202,123,65,229,117,160,18,235,149,103,254,202,74,169,108,146,202,131,125,101,165,84,86,74,101,165,84,86,74,101,165,84,86,74,101,165,84,86,74,101,165,84,86,74,101,165,84,86,74,61,240,28,120,88,50,149,124,175,196,122,101,201,84,98,189,178,100,26,187,165,177,82,26,155,164,177,64,26,123,163,177,46,26,91,162,177,28,26,59,161,177,10,26,27,160,49,248,141,121,111,140,121,99,186,27,67,221,152,229,198,8,55,38,183,49,176,141,57,109,140,103,99,42,27,195,216,74,2,192,83,10,0,194,210,0,48,151,1,224,22,188,113,52,158,10,26,79,5,173,112,83,30,15,90,249,222,253,179,10,90,197,14,15,12,173,162,135,39,135,198,147,67,227,201,161,241,228,208,120,97,105,60,66,180,138,30,158,37,90,69,15,15,21,173,162,135,167,139,86,209,195,219,77,107,232,225,53,167,53,244,240,190,211,26,122,62,47,62,239,219,228,47,64,2,100,64,1,84,64,3,124,47,31,128,11,112,3,30,192,4,44,192,6,4,224,124,192,68,207,68,207,68,207,68,207,68,207,68,207,68,207,68,207,68,207,68,207,68,207,68,207,68,207,68,207,68,207,68,207,66,207,66,207,66,207,66,207,66,207,66,207,66,198,103,219,36,158,145,18,207,72,47,200,128,2,168,128,6,232,128,1,184,0,55,224,1,76,192,2,124,239,30,128,143,175,66,159,11,125,46,244,185,208,231,66,159,11,125,46,244,185,208,231,66,159,11,125,46,244,185,208,231,66,159,11,125,46,244,185,208,231,66,159,11,125,46,244,185,208,231,66,159,11,125,46,11,61,52,188,44,244,44,244,44,244,44,244,44,244,124,79,103,161,103,161,103,163,103,163,103,163,103,163,103,163,103,163,103,163,103,163,103,163,103,163,103,163,103,163,103,163,103,163,103,163,103,163,39,208,19,232,9,244,4,122,2,61,129,158,64,79,160,39,208,19,232,9,244,4,122,2,61,129,158,64,79,160,231,160,231,160,231,160,231,160,231,160,231,124,244,172,207,51,201,11,18,32,3,10,160,2,190,87,117,192,0,92,128,27,240,0,38,96,1,54,32,0,31,23,139,169,92,76,229,98,42,23,83,185,152,202,197,84,46,166,114,49,149,139,169,92,76,229,98,42,23,83,185,152,202,197,84,46,166,114,49,149,139,169,92,76,229,98,42,23,83,185,152,202,197,84,46,166,114,49,149,139,169,92,76,229,98,42,23,51,184,152,193,197,12,198,231,201,225,5,25,80,1,29,112,1,30,192,2,124,8,35,193,147,224,73,240,36,120,18,60,9,158,4,79,130,39,195,147,225,201,240,100,120,50,60,25,158,12,79,134,167,192,83,224,41,240,20,120,10,60,5,158,2,79,129,167,194,83,225,169,240,84,120,42,60,21,158,10,79,133,167,193,211,224,105,240,144,203,209,224,105,240,52,120,26,60,29,158,14,79,135,167,195,211,225,233,240,116,120,58,60,3,158,1,207,128,103,192,51,224,25,240,12,120,6,60,23,60,23,60,23,60,23,60,23,60,23,60,23,60,23,60,108,137,96,57,4,59,33,24,225,96,114,131,129,13,230,52,24,207,96,42,131,97,12,102,48,24,189,96,226,130,65,11,230,43,24,171,96,154,130,33,10,18,45,24,162,32,191,130,216,10,210,42,8,169,32,155,130,72,10,146,40,8,160,32,119,130,184,9,82,38,8,151,32,83,130,40,9,18,36,8,142,32,47,130,152,8,210,33,8,133,32,11,130,8,8,54,127,176,240,131,61,31,172,247,96,171,199,129,231,192,115,224,57,240,124,222,74,210,97,111,156,207,47,21,47,120,0,19,176,0,27,240,189,252,179,163,14,123,227,36,120,88,32,39,193,195,38,57,9,30,182,196,201,92,197,186,56,153,171,216,27,39,127,175,226,238,153,187,179,37,78,129,135,117,113,10,60,236,141,83,224,97,129,156,2,15,91,226,84,120,88,23,167,194,195,222,56,21,158,198,31,55,254,166,125,255,17,204,204,251,233,252,49,131,127,58,87,177,1,78,231,114,86,193,233,240,240,157,63,36,200,225,203,127,120,174,59,124,159,15,207,90,135,47,246,225,89,235,240,93,61,60,255,28,190,180,135,231,159,195,247,240,240,76,114,248,66,158,248,254,13,154,249,178,157,195,31,243,173,59,231,79,127,156,249,247,104,47,24,128,239,63,90,128,253,1,159,180,122,65,2,112,249,231,151,174,23,220,128,7,0,97,130,48,65,248,9,169,204,191,44,203,252,203,178,204,191,44,123,1,151,103,46,207,92,94,208,83,208,83,208,243,121,225,125,65,0,206,7,84,164,118,46,239,92,222,185,188,115,121,71,97,255,94,133,212,78,199,58,154,59,222,59,226,59,226,59,226,59,226,59,194,58,194,174,207,77,249,145,231,5,3,112,1,110,192,3,152,128,5,216,128,0,124,110,193,47,66,153,95,132,94,144,1,220,253,179,141,51,191,17,189,0,61,11,61,11,61,11,61,11,61,11,61,11,61,11,61,11,61,159,119,135,188,62,207,81,47,72,128,12,40,128,10,104,128,14,24,128,11,112,3,30,192,4,44,192,6,4,0,61,124,195,23,223,240,197,55,124,37,244,36,244,240,157,95,9,61,9,61,9,61,140,195,98,28,22,227,176,24,135,197,56,172,132,158,132,158,140,158,140,158,140,158,140,30,134,104,101,244,48,77,43,163,135,177,90,25,61,204,215,98,190,22,243,181,152,175,149,209,195,164,44,6,100,49,32,139,1,89,140,195,98,10,22,95,254,197,119,126,245,47,33,6,7,204,3,230,129,139,193,31,15,254,248,226,143,47,254,248,226,238,23,150,47,156,94,24,188,240,117,65,120,195,115,195,115,195,115,195,115,195,115,195,115,195,115,195,243,192,243,192,243,192,243,192,243,192,243,192,243,192,243,192,51,225,153,240,76,120,88,5,188,167,100,94,79,94,0,15,99,190,152,238,197,80,47,102,121,49,194,139,201,93,12,236,98,78,23,227,185,54,60,27,158,13,207,134,103,195,179,225,217,240,108,120,2,158,128,39,248,74,4,95,137,207,195,210,211,63,175,12,47,248,254,63,21,208,1,23,224,1,44,64,124,64,131,167,193,211,224,105,240,52,120,26,60,13,158,6,79,135,167,195,211,225,233,240,116,120,58,60,29,158,139,203,47,46,191,184,252,226,242,139,203,47,46,191,190,151,35,227,134,231,134,231,134,231,134,231,134,231,243,93,125,198,103,75,188,160,2,58,224,2,124,255,120,1,62,55,29,133,203,11,151,23,46,47,92,94,184,188,112,121,225,114,142,114,112,148,131,163,28,28,229,224,40,7,71,57,56,202,193,81,14,142,114,112,148,131,163,28,28,229,224,40,7,71,57,56,202,193,81,14,142,114,112,148,131,163,28,28,229,224,40,7,71,57,56,202,209,225,249,252,23,38,47,152,128,13,224,111,56,247,193,185,15,206,125,112,238,227,226,242,139,203,57,229,193,41,15,14,119,112,184,227,123,184,55,194,110,110,250,112,249,195,229,15,55,125,224,121,224,121,224,121,144,241,64,248,160,231,129,121,194,252,249,153,229,5,220,226,243,51,203,11,184,215,228,94,147,123,77,238,53,185,197,132,121,193,179,184,252,243,188,241,130,63,241,156,243,73,189,23,100,64,1,84,64,3,124,175,26,128,11,112,3,30,192,4,44,192,6,4,224,124,192,231,57,243,5,232,41,232,41,232,41,232,41,232,41,232,41,232,41,232,41,232,249,12,209,190,126,165,247,127,121,28,250,150,201,101,118,89,92,86,151,205,101,119,57,92,94,46,111,151,63,68,78,151,203,229,118,25,46,143,202,100,191,201,126,147,253,38,251,77,246,155,236,55,217,111,178,223,100,191,201,126,147,253,38,251,77,246,155,236,55,217,111,178,223,108,191,217,126,179,253,102,251,205,246,155,237,55,219,111,182,223,233,251,78,223,119,250,190,211,247,157,190,239,244,125,167,239,59,127,220,215,125,158,238,243,116,159,167,251,60,221,231,233,62,79,247,121,186,207,203,126,151,253,46,251,93,246,187,236,119,217,239,178,223,101,191,203,126,151,253,46,251,93,246,187,236,119,217,239,178,223,101,191,219,126,183,253,110,251,221,95,191,229,183,242,250,229,50,185,204,46,127,92,91,93,54,151,221,229,112,121,185,188,93,62,46,167,203,229,114,187,12,151,71,229,109,191,183,253,222,246,123,219,239,109,191,183,253,222,246,123,219,239,109,191,183,253,222,246,123,219,239,109,191,183,253,222,246,123,219,239,99,191,143,253,62,246,251,216,239,99,191,143,253,62,246,251,216,239,99,191,143,253,62,246,251,216,239,99,191,143,253,62,246,251,216,239,180,223,105,191,191,239,186,238,230,116,55,167,187,57,221,205,233,110,78,119,115,186,155,211,221,156,238,230,116,55,167,187,57,221,205,233,110,78,119,115,186,155,211,221,156,238,230,116,55,167,255,63,205,153,246,59,237,119,218,239,180,223,105,191,211,126,167,253,78,251,157,246,59,237,119,218,239,180,223,111,16,164,249,254,47,255,30,234,91,38,151,217,101,113,89,93,54,151,221,229,112,121,185,188,93,62,46,167,203,229,114,187,12,151,246,219,236,183,217,111,179,223,102,191,205,126,155,253,54,251,109,246,219,236,183,217,111,179,223,102,191,205,126,155,253,54,251,109,248,45,237,183,227,254,62,48,127,202,228,50,187,44,46,171,203,230,178,187,28,46,47,151,183,203,199,229,116,185,92,110,151,225,210,126,147,253,38,251,77,246,155,236,55,217,111,178,223,100,191,201,126,147,253,38,251,45,102,46,102,46,102,46,102,46,102,46,63,152,221,201,226,78,22,119,178,184,147,197,157,44,238,100,117,39,171,59,89,221,201,234,78,86,251,173,246,91,237,183,218,111,181,223,106,191,213,126,171,253,86,251,173,246,219,205,220,205,220,205,220,205,220,205,220,127,48,187,147,221,157,28,238,228,112,39,135,59,57,220,201,225,78,14,119,114,184,147,195,157,28,246,59,236,119,216,239,176,223,97,191,195,126,135,253,14,251,189,236,247,178,223,219,204,183,169,110,83,61,110,206,99,251,143,237,63,54,248,216,224,99,131,143,101,60,150,241,88,198,180,163,105,71,211,34,167,79,112,250,4,167,45,108,51,111,51,111,51,111,51,111,51,239,31,204,110,206,246,119,99,251,187,177,221,186,237,214,109,183,110,187,117,219,223,141,237,78,110,119,50,236,55,236,55,236,55,236,55,236,55,236,55,236,55,236,55,236,55,228,119,59,233,182,147,110,59,218,182,163,109,255,250,65,245,184,220,46,195,165,154,179,29,94,219,225,181,29,94,219,225,181,29,94,219,105,181,157,86,219,105,181,157,86,59,217,66,154,46,117,250,219,241,180,29,79,219,121,180,203,143,107,221,28,231,209,118,0,109,7,208,118,0,109,7,208,118,0,109,39,206,118,136,108,135,200,118,136,108,135,200,174,63,68,250,4,155,53,59,53,182,83,99,59,53,182,83,99,59,53,182,83,99,59,53,182,83,99,59,53,182,83,99,59,53,182,83,99,59,53,182,83,99,59,53,182,83,99,59,53,182,83,99,59,53,182,83,99,59,53,182,83,99,95,246,123,217,239,101,191,151,253,62,102,126,204,236,136,217,143,153,31,51,63,63,152,221,201,199,157,124,220,73,199,211,118,60,109,199,211,118,60,237,199,157,116,90,109,167,213,118,90,109,167,213,118,90,109,167,213,118,90,109,167,213,158,246,59,237,119,218,239,180,95,167,213,118,90,109,167,213,118,90,109,167,213,222,63,152,221,73,167,213,118,90,109,167,213,118,90,109,167,213,118,90,109,167,213,118,90,109,167,213,118,90,109,167,213,118,90,109,167,213,118,90,237,31,105,21,246,27,246,27,246,27,242,27,14,175,112,120,133,195,43,252,94,22,126,47,139,95,63,152,195,165,58,25,142,182,112,180,133,163,45,28,109,225,104,11,191,151,133,147,46,156,116,225,164,11,39,93,56,233,194,73,23,78,186,72,246,155,236,55,217,111,182,223,108,191,206,193,112,14,134,115,48,252,94,22,142,197,112,44,134,99,49,28,139,225,88,12,191,151,133,83,50,252,94,22,126,47,11,191,151,133,35,53,28,169,225,72,13,71,106,56,82,195,145,26,142,212,223,127,177,249,148,246,219,236,183,217,111,179,95,39,108,56,97,195,9,27,78,216,112,194,198,248,193,236,78,58,97,195,9,27,78,216,112,194,134,19,54,156,176,225,132,13,39,108,56,97,195,9,27,78,216,112,194,134,19,54,156,176,225,132,141,203,126,47,251,189,236,247,178,95,167,100,60,63,254,169,187,225,148,12,167,100,56,37,195,41,25,78,201,112,74,134,83,50,156,146,225,148,12,167,100,56,37,195,41,25,78,201,112,74,134,83,50,166,253,78,251,157,246,59,237,119,218,239,180,223,101,191,14,175,112,120,133,195,43,28,94,225,240,10,135,87,56,188,194,225,21,14,175,112,120,133,195,43,126,132,87,216,96,216,224,177,193,227,3,61,246,123,236,247,216,239,177,223,99,191,199,126,143,253,30,251,61,242,123,156,41,199,153,114,156,41,199,153,114,156,41,199,153,114,114,118,89,92,86,151,205,101,119,57,92,94,46,111,151,54,152,167,75,251,205,246,155,237,55,219,111,177,223,98,191,197,126,139,253,250,23,215,211,108,176,217,96,179,193,102,131,205,6,155,13,54,27,108,54,216,108,208,63,206,159,110,131,221,6,187,13,118,27,236,54,216,125,160,221,126,187,253,250,135,208,227,31,66,143,127,8,61,254,33,244,248,149,246,248,149,246,248,149,246,220,54,120,219,224,109,131,183,13,222,54,120,219,224,109,131,183,13,222,54,120,219,224,109,131,183,13,250,247,201,115,219,224,253,195,160,15,212,111,154,199,111,154,199,111,154,199,111,154,199,111,154,199,111,154,199,111,154,199,111,154,199,25,122,190,255,29,69,121,254,248,219,175,76,191,92,38,151,217,101,113,89,93,54,151,221,229,112,121,185,188,93,254,16,57,93,46,151,219,101,184,60,42,147,253,38,251,77,246,155,236,55,217,111,178,223,100,191,201,126,147,253,38,251,77,246,155,236,55,217,111,178,223,100,191,201,126,179,253,254,158,11,235,183,242,247,45,250,167,242,199,63,205,46,139,203,234,178,185,236,46,135,203,203,229,237,242,113,57,93,46,151,219,101,184,60,42,171,253,86,251,173,246,91,237,183,218,111,181,223,106,191,213,126,171,253,86,251,109,86,213,172,170,89,85,179,170,102,85,205,170,154,85,53,171,106,86,213,126,168,242,41,52,159,66,243,41,52,159,66,243,41,52,159,66,183,223,110,191,221,126,187,253,118,251,237,246,219,237,183,219,111,183,223,110,191,195,170,134,85,13,171,26,86,53,172,106,88,213,176,170,97,85,195,170,198,15,85,62,133,225,83,24,62,133,225,83,24,62,133,225,83,184,236,247,178,223,203,126,47,251,189,236,247,178,223,203,126,47,251,189,236,247,125,227,251,159,255,3,250,115,196,0,21,84,0,0])))