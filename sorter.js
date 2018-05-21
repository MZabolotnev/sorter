const fs = require('fs');

function alertPath() {
    const path = document.getElementById("directoryInput").files[0].path;
    alert(path);
}

function submit() {
    const path = document.getElementById("directoryInput").files[0].path;
    const text = document.getElementById("numbersString").value;

    const fileNames = text.split(' ');
    fs.mkdir(path + '/sorted',function(err){
        if (err) {
            return console.error(err);
        }
    });
    fileNames.map( name => {
        console.log('name: ', name);
        fs.readdir(path, function (err, items) {
            for (let i=0; i<items.length; i++) {
                if (items[i].substr(4, 4) === name) {
                    fs.copyFile( path + '/' + items[i], path + '/sorted' + '/' + items[i], (err) => {
                        if (err) throw err;

                    });
                }
            }
        });
        alert('file was copied!');
    });
}

