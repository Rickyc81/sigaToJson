const fs = require('fs')
const pdf2table = require('pdf2table');

const pdfFilePath = './List-Sigarette-25-03-21.pdf'
fs.readFile(pdfFilePath, function (err, buffer) {
    if (err) return console.log(err);
 
    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
        if(err) return console.log(err);
        fs.writeFileSync('./Siga.json', JSON.stringify(rows), () => {})
    });
});