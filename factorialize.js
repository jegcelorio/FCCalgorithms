// version using for loop

function factorialize(num){
  factorial = 1;

  if(num == 0){
    return 1;
  } else if (num == 1){
    return 1;
  }

  for (var i=num; i>=1; i-- ){
    factorial = factorial * i;
  }
  num = factorial;
  return num;
}

factorialize(5);

// version using recursion
function factorialize(num){

  if(num==0){
    return 1;
  }

  if(num == 1){
    return 1;
  }
  return num*factorialize(num-1);
}
