 // Question-1 Fizz Buzz Problem

for(i=1; i<101; i++){
    x=i/3;
    y=i/5;
    z=i/15;
    if(Number.isInteger(x)){
      console.log("Fizz");
    }
    else if(Number.isInteger(y)){
      console.log("Buzz");
    }
    else if(Number.isInteger(z)){
      console.log("FizzBuzz");
    }else{
      console.log(i);
    }
  }
  
  //Question-2 palindrome  
s= "I met madam with my mom "
s1 = "" 
s2 = ""
  for (t of s) {
    if (t != " ") {
      s2 = s2 + t
      s1 = t + s1
    }
    else {
      if (s1 == s2) console.log(s1)
      s1 = ""
      s2 = ""
    }
  }