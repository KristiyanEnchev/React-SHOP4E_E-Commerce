export function printDate(isoDate) {
  const date = new Date(isoDate);
  let month = date.toLocaleString('en-EU', {
    month: 'long',
  });

  return `${month} ${date.getDate().toString()}, ${date
    .getFullYear()
    .toString()}`;
}
