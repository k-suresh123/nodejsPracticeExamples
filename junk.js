const {promisify} = require('util');
const fs = require('fs');
const junk = require('junk');
 
const pReaddir = promisify(fs.readdir);
 
(async () => {
    const files = await pReaddir('D:\nodejs');
 
    console.log(files);
    //=> ['.DS_Store', 'test.jpg']
 
    console.log(files.filter(junk.not));
    //=> ['test.jpg']
})();