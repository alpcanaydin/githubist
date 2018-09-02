// @flow

const months = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık',
];

const toDateString = (dateString: string): string => {
  const date = new Date(dateString);

  return `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export default toDateString;
