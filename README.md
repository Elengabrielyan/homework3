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
  
  function str(one, three, thousand){
    
    if(one.length > three.length && one.length > thousand.length){
        return one;
     if(three.length > thousand.length && three.length > one.length){
        return three;
     if(thousand.length > one.length && thousand.length > three.length){
        return thousand;
     if(one.lenght === three.length || one.lenght === thousand.lenght || three.length === thousand.lenght){
        return "Two of strings have the same length";
     if(one.lenght === three.lenght === thousand.lenght){
        return "Strings are equal";
    }
    
  
  console.log(result.length('n', 'bb', 'ccc'));
    
    // A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
    
    const num = function(a, b){
      if(a === b) return 0;
      if(a > b) return 1;
      if(b > a) return -1;
     }
  const Result = num(2, 2);
  console.log(Result);
    
       //A function that takes three inputs and returns the first truethy value (example:  firstTruethy(0, '', 1); should return 1)
       
       const isTruethy  = function (a,b,c)
{
	return a || b || c || NuN;
}
       
  
  
</script> 
