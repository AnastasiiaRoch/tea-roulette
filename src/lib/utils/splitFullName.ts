export const splitFullName = (name: string) => {
  if (!name.trim()) return { firstName: '', lastName: '' };

  const [firstName, ...lastNameArray] = name.split(' ');
  const lastName = lastNameArray.join(' ').trim();

  return { firstName, lastName };
};
