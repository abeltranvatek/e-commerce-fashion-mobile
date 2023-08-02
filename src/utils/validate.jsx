export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const isEditedField = (text, initialVal) =>
  text !== initialVal;

export const emailFormatValidate = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.test(
    email?.toLowerCase(),
);
