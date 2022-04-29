module.exports = {
 //param A : array of integers
 //param B : integer
 //return an integer
	threeSumClosest : function(A, B){
        A.sort(function(x,y){return x - y;});          //Sot the incoming array
        var i, pt1, pt2, sol;               //pointer and individual triplet variables
        var optimum = B - (A[0] + A[1] +A[2]); // anchor case
        if(optimum === 0)
            return B;
        for (i = 0; i < A.length -2; i++){ //iterating through array till secondlast element
            pt1 = i + 1; // first pointer, next to the first element
            pt2 = A.length -1;  // second pointer, pointing at the last element
        
            while(pt1 < pt2) {  
                sol = B - (A[i] + A[pt1] + A[pt2]);
                optimum = Math.abs(sol) < Math.abs(optimum) ? sol : optimum; // if case is true then optimum = sol else optimum = optimum 

                if (sol < 0) {
                    pt2--
                }
                else if (sol > 0){
                    pt1++
                } 
                else if (sol === 0) {
                    return B;
                }
            }
        }    
        return B - optimum;
	}
};

