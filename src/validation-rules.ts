import { ValidationRule } from 'quasar';

export const required: ValidationRule = (value: string) => (
  (value && value.length > 0) || 'Enter a value'
);

export const url: ValidationRule = (value: string) => {
  if (value.length === 0) return true;

  const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
    + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' // domain name
    + '((\\d{1,3}\\.){3}\\d{1,3}))' // OR ip (v4) address
    + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port and path
    + '(\\?[;&a-z\\d%_.~+=-]*)?' // query string
    + '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

  return !!pattern.test(value) || 'Enter a valid url';
};
