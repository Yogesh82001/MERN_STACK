function add(){
    //console.log(arguments.length);
    var sum = 0;
    for(var i= 0 ; i<arguments.length; i++){
        if(arguments[i] instanceof Array){
            for(var j = 0; j<arguments[i].length; j++){
                sum = sum + (isNaN(parseInt(arguments[i][j]))?0:parseInt(arguments[i][j]) );
            }
        } else if (typeof arguments[i]==='function'){
        arguments[i] = arguments[i]();
            sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
        }
        else {
            sum = sum + (isNaN(parseInt(arguments[i]))?0:parseInt(arguments[i]));
        }
        
    }
    return sum;
}
function one(){
    return 1;
}
function two(){
    return 2;
}
add(1,"2",["3",4, "panchal"], one, two);