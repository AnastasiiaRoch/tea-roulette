import * as Yup from 'yup';

export const playerSchema = Yup.object().shape({
  player: Yup.string()
    .trim()
    .required('Name is required')
    .test('full-name', 'Provide a last name', (value) => value?.split(' ').length > 1),
});
