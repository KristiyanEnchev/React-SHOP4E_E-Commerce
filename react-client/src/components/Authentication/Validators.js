export const emailValidator = (email) => {
  if (!email) {
    return 'Email is required';
  } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
    return 'Incorrect email format';
  }
  return '';
};

export const passwordValidator = (password) => {
  if (!password) {
    return 'Password is required';
  } else if (password.length < 6) {
    return 'Password must have a minimum 8 characters';
  }
  return '';
};

export const nameValidator = (name) => {
  if (!name) {
    return 'Name is required';
  } else if (name.length < 3) {
    return 'Name must have a minimum 3 characters';
  }
  return '';
};

export const confirmPasswordValidator = (confirmPassword, password) => {
  if (!confirmPassword) {
    return 'Confirm password is required';
  } else if (confirmPassword.length < 6) {
    return 'Confirm password must have a minimum 8 characters';
  } else if (confirmPassword !== password) {
    return 'Passwords do not match';
  }
  return '';
};

export const firstNameValidator = (firstName) => {
  if (!firstName) {
    return 'firstName is required';
  } else if (firstName.length < 3) {
    return 'Incorrect firstName format, must be more than 3';
  }
  return '';
};

export const lastNameValidator = (lastName) => {
  if (!lastName) {
    return 'lastName is required';
  } else if (lastName.length < 3) {
    return 'Incorrect lastName format, must be more than 3';
  }
  return '';
};

export const avatarValidator = (avatar) => {
  if (!avatar) {
    return 'avatar is required';
  }
  return '';
};
