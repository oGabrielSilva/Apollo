const emailValidation = (email: string): boolean => {
  const size = email.length > 5;
  const at = email.includes('@');
  const dot = email.includes('.');
  if (!(size && at && dot)) return false;
  const afterAt = email.split('@')[1].length > 1;
  const afterDot = email.split('.')[1].length > 1;
  const dotAfterAt = email.split('@')[1].split('.')[1];
  if (!(dotAfterAt && dotAfterAt.length > 1)) return false;
  return afterAt && afterDot;
};

export default emailValidation;
