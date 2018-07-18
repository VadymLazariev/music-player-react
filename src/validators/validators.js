export const required = value => (value ? undefined : 'Reuquired');
export const email = (value) => {
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
  return undefined;
};

export const minLength = (value) => {
  if (value.length < 5) {
    return 'Must be more then 5 characters ';
  }
  return undefined;
};
