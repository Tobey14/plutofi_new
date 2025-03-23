export const formatNumber = (value: string) => {
  if (!value) return '';
  return new Intl.NumberFormat().format(Number(value));
};

export function getInitials(name: string) {
  const [firstName, lastName] = name.split(" ")
  return firstName.charAt(0) + (lastName ? lastName.charAt(0) : "")
}

