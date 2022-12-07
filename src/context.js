let variable;
export const useName = (initial) => {
  variable = initial;

  function changeName(newVar) {
    variable = newVar;
  }

  return [variable, changeName];
};
