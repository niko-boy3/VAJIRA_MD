const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=8fcVkbjL#Py402Pk4SEAqHZ9z7a0KDXe10eKp0hPqkXNw0UGXI6k' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94704020146' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
MODE: process.env.MODE === undefined ? 'nonbutton' : process.env.MODE,
STATUS_REPLY_MESSAGE: '> STATUS SEEN NOW ♥️',    
ALIVE:  process.env.ALIVE  || '> NIKO PAMIYA'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
