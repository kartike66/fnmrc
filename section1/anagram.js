module.exports = { 
 //param A : array of strings
 //return a array of array of integers
	anagrams : function(A){
        function kvp(re){
            var key = 1;
            for(var i =0; i< re.length; i++){
                key *= ((re.charCodeAt(i) + 1) - "a".charCodeAt(0));
            }
            return key;
        }
        var re = {};
        var resultArray = [];
        for (var x = 0; x<A.length; x++){
            var key = kvp(A[x]);
            if(!re[key]) re[key] = [x+1];
            else{
                re[key].push(x+1);
            }
        }
        var keys = Object.keys(re);
        for(var m=0; m<keys.length; m++){
            resultArray.push(re[keys[m]]);
        }
        return resultArray;    
    
    }
    
    

};

