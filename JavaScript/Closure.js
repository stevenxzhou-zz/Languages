
// Print all 5s.
for (var i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 1000)
}

// Print 0 to 5
for (var i = 0; i < 5; i++) {
    (function(i){
        setTimeout(function(){
            console.log(i);
        }, 1000)
    })(i)
}

// Print 0 to 5 with "let"
for (let i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 1000)
}

// api example
// var api = (function() {
//     var val = 6;

//     var _print = function(str) {
//         console.log(str);
//     }

//     var _setValue = function(v) {
//         val = v;
//     }

//     var _getValue = function() {
//         return val;
//     }

//     return {
//         print: _print,
//         setValue: _setValue,
//         getValue: _getValue
//     }
// })()

// api.setValue(7);
// api.print(api.val);