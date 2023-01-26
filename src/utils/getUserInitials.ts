export const getUserInitials = (userName: string): string => {
  const splitedName = userName.split(" ");
  return (
    splitedName[0].substring(0, 1).toLocaleUpperCase() +
    splitedName[1].substring(0, 1).toLocaleUpperCase()
  );
};
