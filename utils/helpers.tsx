export const formatPrice = (number: any) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

export const getUniqueValues = (data: any, type: any) => {
  let unique = data.map((item: any) => item[type])
  if (type === 'colors') {
    unique = unique.flat()
  }
  return ['all', ...Array.from(new Set(unique))]
}
