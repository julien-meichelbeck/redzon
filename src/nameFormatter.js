export default (name) => {
  const cleanedUpName = name
    .trim()
    .replace('[Blu-ray]', '')
  return encodeURIComponent(cleanedUpName)
}
