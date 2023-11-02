var isValid = function (s) {

  let Parenthesis = {
    "(":")",
    "{":"}",
    "[":"]"
  }

  const stack = [];

  for(let char of s){
    if(Parenthesis[char]){
      stack.push(char)
    }
    else{
      const top = stack.pop();
      if(char !== Parenthesis[top]){
        return 0;
      }
    }
  }
  return stack.length === 0;
};