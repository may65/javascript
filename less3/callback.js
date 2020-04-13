function first(){setTimeout(function(){console.log(1)},500);}
function second(){console.log(2);}
first();
second();
function cb(f2){
    setTimeout(function(){console.log(1)},500);
    f2();
}
cb(second);