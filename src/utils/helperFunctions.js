export const getFieldLabel = fieldName => {
  let newStr = '';
  for (let i = 0; i < fieldName.length; i++) {
    if (fieldName.charAt(i) === fieldName.charAt(i).toUpperCase()) {
      newStr = newStr + ' ' + fieldName.charAt(i);
    } else {
      i === 0
        ? (newStr += fieldName.charAt(i).toUpperCase())
        : (newStr += fieldName.charAt(i));
    }
  }
  return newStr;
};

export const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};
