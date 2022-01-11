function receivesAFunction(thing) {
  return thing();
}

const returnsANamedFunction = function () {
  return receivesAFunction;
};

function returnsAnAnonymousFunction() {
  return function () {
    return returnsANamedFunction;
  };
}
