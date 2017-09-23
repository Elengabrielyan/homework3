<script>
   
      const multiply = function(a,b,c){
       return(a*b*c)
      };
   
      const rslt = multiply(9,10,13);
      
      console.log(rslt);
      console.log("hmm")
      
      //A function that takes arguments, does something but does not return anything 
      //is " " nothing?
      function power(base, exponent) {
      if (exponent == 0)
      return " ";
      else
        return (base * exponent);
      }

     console.log(power(2, 0));
  //if not, then look at this one
  
 const noReturn = function(a, b);{
 const power = a * b;
};
  //A function called fullName that takes as argument first name and last name and returns the full name of the person (first name concatenated with last name with a space in between)
  
  const fullName=function(name, surname){
    return (name+surname)
    };
  const result = fullName("Elen", "\ \Gabrielyan");
    
    
  console.log(result);
  
  const longestString = function(str1, str2, str3) {
    
    if(str1.length > str2.length && str1.length > str3.length){
        return str1;
    } else if(str2.length > str3.length && str2.length > str1.length){
        return str2;
     }else if(str3.length > str1.length && str3.length > str2.length){
        return str3;
     }else if(str1.lenght === str2.length || str1.lenght === str3.lenght || str2.length === str3.lenght){
        return "Two of strings have the same length";
     }else if(str1.lenght === str2.lenght === str3.lenght){
        return "Strings are equal";
    }
}
  
 console.log(longestString("a","bb","abc"))
       
    // A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
    
    const num = function(a, b){
      if(a === b) {return 0;
      }else if (a > b) {return 1;
      }else if (b > a) return -1;
     }
     
  const Result = num(2, 2);
  console.log(Result);
  
    
       //A function that takes three inputs and returns the first truethy value (example:  firstTruethy(0, '', 1); should return 1)
       
       const isTruethy  = function (a,b,c)
{
	return a || b || c || NuN;
}
       
 
  
</script> 
