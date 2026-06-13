export function getHeaders(carsViewModel) {
  return Object.keys(carsViewModel?.[0] || {});
}
