

function receivesAFunction (callMe) {
  callMe();
}

function returnsANamedFunction (){
  return function mySecondFunction(){}
}

function returnsAnAnonymousFunction() {
  return function () {
    console.log('I am annonymous')
  }
}