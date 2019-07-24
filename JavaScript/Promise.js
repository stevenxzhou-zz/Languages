// Promises Practice
// Get three files and return them in order.


// ES6 Promise
// var files = ["file1", "file2", "file3"];
// var responses = {};
// var getFile = function(name) {
//     var data = {
//         "file1": "file1",
//         "file2": "file2",
//         "file3": "file3"
//     }

//     var randSeconds = Math.floor(Math.random() * 4000) + 1000;
    
//     var promise = new Promise((resolve, reject) => {
//         setTimeout(function () {
//             // Let the conresponding response set to be false, this way we can initialize it and make it ready for the output.
//             if (!responses[name]) {
//                 responses[name] = false;
//             }
//             // Loop all the know files and see if we have a response already and didn't print yet. 
//             for (var i = 0 ; i < files.length; i++) {
//                 if (files[i] in responses) {
//                     if (responses[files[i]] !== true) {
//                         console.log(data[files[i]]);
//                         // Mark it as true to indicate it has printed. 
//                         responses[files[i]] = true;
//                     }
//                 } else {
//                     // If above fails, break, which indicates we are not ready to print the current file content as we are potentially missing some files prior to the file we received now.
//                     return;
//                 }
//             }
//             // console.log(data[name]);
//             resolve();
//         }, randSeconds);
//     });

//     return promise;
// }

// getFile("file1")
// .then(function(){ return getFile("file2"); })
// .then(function(){ return getFile("file3"); })
// .then(function(){ console.log("Completed"); });
// getFile("file1");
// getFile("file2");
// getFile("file3");

// jQuery
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);

// Main logic
var files = ["file1", "file2", "file3"];
var responses = {};
var getFile = function(name) {
    var data = {
        "file1": "file1",
        "file2": "file2",
        "file3": "file3"
    }

    var randSeconds = Math.floor(Math.random() * 4000) + 1000;
    var deferred = $.Deferred();
    setTimeout(function () {
        // Let the conresponding response set to be false, this way we can initialize it and make it ready for the output.
        if (!responses[name]) {
            responses[name] = false;
        }
        // Loop all the know files and see if we have a response already and didn't print yet. 
        for (var i = 0 ; i < files.length; i++) {
            if (files[i] in responses) {
                if (responses[files[i]] !== true) {
                    console.log(data[files[i]]);
                    // Mark it as true to indicate it has printed. 
                    responses[files[i]] = true;
                }
            } else {
                // If above fails, break, which indicates we are not ready to print the current file content as we are potentially missing some files prior to the file we received now.
                return;
            }
        }
        // console.log(data[name]);
        deferred.resolve();
    }, randSeconds);

    return deferred.promise();
}

getFile("file1");
getFile("file2");
getFile("file3");
