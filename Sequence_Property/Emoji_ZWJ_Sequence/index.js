module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,197,157,75,118,227,70,16,4,239,50,107,47,36,138,162,200,165,128,6,47,225,241,49,230,254,150,69,75,67,176,42,51,170,72,248,121,163,231,55,14,134,26,141,76,176,209,226,231,207,31,63,127,141,227,203,248,248,57,31,142,63,127,237,158,158,62,254,123,247,118,216,255,252,117,94,158,206,95,255,242,155,249,241,71,243,33,199,169,44,249,254,151,3,2,253,135,188,33,112,135,179,255,91,238,56,216,77,14,255,142,9,217,100,138,54,153,180,83,255,247,38,15,217,66,114,199,80,239,152,180,138,36,142,228,227,191,231,143,159,231,243,124,5,47,31,63,199,243,200,206,203,55,63,105,213,248,255,84,179,86,45,219,141,170,171,218,112,84,67,171,206,219,29,96,87,101,14,176,171,218,240,0,151,181,234,187,32,245,167,170,202,67,78,237,135,240,179,219,125,18,53,18,117,13,185,227,114,135,23,183,59,46,101,119,92,184,226,67,238,56,216,77,14,255,142,9,217,100,138,238,155,180,223,221,127,172,224,143,168,198,118,170,88,240,187,85,103,173,122,240,153,241,17,149,153,171,174,202,204,85,87,245,224,92,173,78,147,86,141,237,166,189,171,50,105,239,170,204,180,119,85,102,218,43,170,13,167,125,117,198,181,234,193,21,215,35,170,13,71,101,58,216,85,153,51,88,81,21,207,96,87,245,224,92,173,194,163,85,15,174,78,31,81,153,3,124,112,117,250,136,202,92,25,42,170,98,24,186,170,7,231,106,195,48,172,114,248,165,250,132,199,179,125,248,191,76,120,200,239,233,170,60,60,155,222,248,191,252,243,221,127,170,154,181,202,95,195,91,163,234,170,54,28,213,208,42,127,93,106,29,96,87,101,14,176,171,218,240,0,99,65,138,93,107,205,85,87,101,230,170,171,50,115,213,85,109,56,87,55,79,232,191,119,182,15,167,215,203,109,187,6,14,30,120,123,58,90,224,107,12,47,11,0,111,47,0,156,8,120,223,19,96,54,231,63,129,37,238,53,221,0,113,219,103,253,116,48,25,195,5,136,123,80,43,96,236,96,27,118,236,192,176,28,159,0,56,237,52,240,25,158,119,115,54,63,1,119,20,23,192,236,143,77,133,248,165,176,138,98,2,235,88,166,79,175,42,162,26,78,226,170,225,36,186,26,78,98,108,224,24,105,13,39,241,54,112,229,12,154,216,27,216,108,195,222,194,89,29,12,220,48,103,53,209,112,82,153,20,86,245,209,112,117,54,176,86,115,167,86,115,167,86,115,167,86,115,167,86,1,118,181,10,176,171,85,128,93,173,34,108,106,21,96,87,171,8,87,206,96,165,86,17,54,65,186,133,109,173,34,220,48,219,90,5,216,213,42,220,104,184,90,5,184,58,27,88,171,209,169,213,232,212,106,116,106,53,58,181,10,176,171,85,128,93,173,2,236,106,21,97,83,171,0,187,90,69,184,114,6,43,181,138,176,9,210,45,108,107,21,225,134,217,214,42,192,174,86,163,83,171,0,87,103,3,107,181,116,106,181,116,106,181,116,106,181,116,106,21,96,87,171,0,187,90,5,216,213,42,194,166,86,1,118,181,138,112,229,12,86,106,21,225,226,139,13,176,86,17,110,152,109,173,2,236,106,21,118,66,92,173,2,92,157,13,172,213,185,83,171,115,167,86,231,78,173,206,157,90,5,216,213,42,192,174,86,1,118,181,138,176,169,85,128,93,173,34,92,124,245,8,214,42,194,197,151,184,96,173,34,220,48,219,90,5,216,213,42,236,116,185,90,5,184,58,27,105,173,78,84,165,19,213,231,68,149,57,81,77,2,112,91,141,0,220,214,33,0,183,21,136,128,122,145,143,138,122,4,212,76,170,72,71,32,254,125,199,71,55,2,96,8,17,13,192,109,44,79,20,197,0,184,163,80,145,251,206,231,84,136,95,10,171,40,38,176,142,101,132,77,68,53,156,196,85,195,73,116,53,156,196,216,192,49,210,26,78,226,109,224,226,203,132,84,236,13,92,124,45,147,170,131,129,27,230,172,38,26,78,42,147,194,170,62,26,174,206,6,214,106,238,212,106,238,212,106,238,212,106,238,212,42,192,174,86,1,118,181,10,176,171,85,132,77,173,2,236,106,21,225,226,43,202,176,86,17,54,65,186,133,109,173,34,220,48,219,90,5,216,213,106,238,212,42,192,213,217,192,90,141,78,173,70,167,86,163,83,171,209,169,85,128,93,173,2,236,106,21,96,87,171,8,155,90,5,216,213,42,194,149,51,88,169,85,132,139,175,69,196,90,69,184,97,182,181,10,176,171,213,232,212,42,192,213,217,192,90,225,46,153,130,177,86,184,75,166,94,95,135,181,194,93,50,11,187,90,225,46,153,135,77,173,112,151,204,195,197,215,94,98,173,112,151,204,193,182,86,184,75,230,96,91,43,220,37,179,47,212,116,181,194,93,50,15,87,94,215,87,169,21,238,146,229,112,161,86,184,75,102,97,87,43,220,37,179,176,171,21,238,146,89,216,213,10,119,201,20,140,181,194,93,50,7,219,90,225,46,153,131,109,173,112,151,204,190,78,213,213,10,119,201,60,124,57,41,187,195,89,236,63,236,159,174,98,111,176,157,198,230,154,109,174,217,70,205,54,106,182,165,102,91,106,182,115,205,118,182,182,235,183,221,165,158,27,96,183,190,46,125,254,138,249,69,24,82,64,25,48,15,8,163,89,101,3,97,52,171,156,32,140,102,149,25,132,209,172,206,59,194,169,121,79,182,125,193,80,207,128,130,209,140,25,80,48,154,49,3,10,70,51,102,64,193,104,198,12,40,56,53,191,147,237,189,96,168,103,64,193,104,198,12,40,24,205,152,1,5,163,25,51,160,96,52,99,6,20,156,154,167,206,25,84,48,154,241,12,42,24,205,120,6,21,140,102,60,131,10,70,51,158,65,5,43,179,89,21,24,44,181,205,157,60,40,24,205,152,7,5,163,25,243,160,96,52,99,30,20,140,102,60,119,10,86,230,74,30,34,118,99,187,220,32,152,163,142,128,50,84,18,229,97,52,155,68,121,24,205,38,81,30,70,115,101,110,43,137,138,176,57,251,30,78,205,104,35,195,219,51,24,86,128,50,148,83,36,97,52,83,138,36,140,102,74,145,132,209,76,41,146,48,154,233,188,75,56,53,155,187,206,8,40,67,61,3,197,187,206,8,99,6,138,119,157,17,198,12,20,239,58,35,140,25,40,222,117,70,24,51,80,188,235,188,192,111,100,123,43,24,234,25,80,48,154,49,3,10,70,51,102,64,193,104,198,12,40,24,205,152,1,5,103,230,35,61,23,28,233,185,224,216,121,46,144,48,154,41,3,18,70,51,101,64,194,104,166,12,72,24,205,148,1,9,167,230,29,217,118,5,67,61,3,10,70,51,102,64,193,104,198,12,40,24,205,152,1,5,163,25,51,160,224,212,124,32,219,161,96,168,103,64,193,104,198,12,40,24,205,152,1,5,163,25,51,160,96,52,99,6,20,156,154,105,61,112,164,245,192,177,179,30,144,48,154,49,3,157,245,192,177,179,30,144,48,154,49,3,157,245,192,177,179,30,144,112,98,30,111,175,245,51,168,97,52,195,25,212,48,154,225,12,106,24,205,112,6,53,140,102,56,131,26,86,102,191,227,164,176,196,182,236,95,189,103,13,40,67,53,81,26,70,51,36,74,195,104,134,68,105,24,205,144,40,13,163,25,206,190,134,83,51,172,13,214,128,50,212,51,208,88,27,172,97,204,64,99,109,176,134,49,3,141,181,193,26,198,12,52,214,6,107,24,51,208,88,27,44,123,88,27,172,1,101,168,103,160,177,54,88,195,152,129,198,218,96,13,99,6,26,107,131,53,140,25,104,172,13,214,48,102,160,177,54,88,246,120,214,240,76,77,157,12,40,24,205,152,1,5,163,25,51,160,96,52,99,6,20,140,102,204,128,130,83,51,206,0,30,245,232,100,64,193,104,198,12,40,24,205,149,25,168,103,224,26,198,12,40,24,205,152,1,5,167,102,28,39,142,173,241,87,72,13,163,25,51,208,248,43,228,26,198,12,52,254,10,185,134,43,115,91,207,64,227,175,144,26,206,204,239,240,247,163,53,160,12,229,12,72,24,205,148,1,9,163,153,50,32,97,52,83,6,36,140,102,202,128,132,51,243,100,94,181,24,1,101,40,103,64,194,104,166,12,72,24,205,148,1,9,163,153,50,32,97,52,83,6,36,156,154,105,127,96,162,253,129,169,179,63,32,97,52,99,6,58,251,3,83,103,127,64,194,104,198,12,116,246,7,166,206,254,128,132,83,51,237,15,76,180,63,48,117,246,7,36,140,102,204,64,103,127,96,234,236,15,72,24,205,152,129,206,254,192,212,217,31,144,240,141,249,243,205,41,59,147,129,8,40,67,37,3,30,70,179,201,128,135,209,108,50,224,97,52,155,12,120,24,205,38,3,30,206,204,47,102,143,40,2,202,80,206,128,132,209,76,25,144,48,154,41,3,18,70,51,101,64,194,104,166,12,72,56,53,31,201,118,44,24,234,25,80,48,154,49,3,10,70,51,102,64,193,104,198,12,40,24,205,152,1,5,167,230,19,217,78,5,67,61,3,149,247,57,166,48,102,160,242,158,199,20,198,12,84,222,255,152,194,152,129,202,123,33,83,24,51,80,121,95,228,55,140,115,139,243,137,115,136,243,54,58,41,82,48,154,241,72,21,140,230,202,12,212,83,116,13,99,138,20,140,102,76,145,130,83,51,142,19,199,86,220,105,244,48,154,49,3,197,157,198,8,99,6,138,59,141,17,174,204,109,61,3,197,157,70,15,103,230,137,86,20,19,173,40,166,206,138,66,194,104,166,12,72,24,205,148,1,9,163,153,50,32,97,52,83,6,36,156,154,105,69,49,209,138,98,234,172,40,36,140,102,204,64,103,69,49,117,86,20,18,70,51,102,160,179,162,152,58,43,10,9,103,230,153,102,96,166,163,158,59,235,1,9,163,153,50,32,97,52,87,102,160,156,129,21,76,25,144,48,154,41,3,18,78,205,56,78,28,91,103,61,32,97,52,99,6,58,235,129,21,140,25,232,172,7,86,112,101,110,235,25,232,172,7,36,156,154,209,86,49,212,51,160,96,52,99,6,20,140,102,204,128,130,209,140,25,80,48,154,43,103,173,156,129,65,187,205,131,118,155,71,103,183,89,194,104,166,12,72,24,205,148,1,9,163,153,50,32,97,52,83,6,36,156,154,105,183,121,208,110,243,232,236,54,75,24,205,152,129,206,110,243,232,236,54,75,24,205,152,129,206,110,243,232,236,54,75,56,53,211,189,225,160,123,195,209,185,55,148,48,154,49,3,157,123,195,209,185,55,148,48,154,49,3,157,123,195,209,185,55,148,112,106,166,123,195,65,247,134,163,115,111,40,97,52,99,6,58,247,134,163,115,111,40,97,52,99,6,58,247,134,163,115,111,40,225,212,108,62,59,43,2,202,80,207,64,241,179,179,34,140,25,40,126,118,86,132,49,3,197,207,206,138,48,102,160,248,217,89,17,198,12,20,63,59,235,2,227,89,195,51,53,117,50,160,96,52,99,6,20,140,102,204,128,130,209,140,25,80,48,154,49,3,10,78,205,56,183,56,159,115,39,3,10,70,115,101,156,245,12,92,195,152,1,5,163,25,51,160,96,52,99,6,20,156,154,113,6,240,168,71,39,3,10,70,51,102,64,193,104,174,204,64,61,3,215,48,102,64,193,104,198,12,40,56,53,227,56,113,108,56,30,252,156,174,239,91,143,175,135,76,230,219,225,47,192,51,1,244,245,241,83,241,235,206,213,120,12,28,199,102,224,206,119,118,187,49,207,157,49,71,216,140,57,194,157,47,68,118,99,30,157,49,71,216,140,57,194,157,111,155,117,99,94,58,99,142,176,25,115,132,59,95,229,233,198,28,63,32,189,248,213,135,56,230,8,119,190,39,241,118,204,39,26,103,4,158,9,160,47,200,75,198,80,191,14,120,56,142,173,126,29,240,112,241,219,178,112,204,120,29,240,112,231,43,159,220,152,241,58,224,97,51,102,188,14,120,184,248,61,47,56,102,188,14,120,184,243,101,37,110,204,120,29,240,176,25,51,94,7,60,252,61,230,11,240,114,89,36,92,97,159,255,254,116,92,99,87,239,153,218,37,47,203,159,159,95,195,47,122,95,1,251,231,240,139,254,249,57,150,175,111,69,249,235,111,180,207,220,208,160,159,0,0])))