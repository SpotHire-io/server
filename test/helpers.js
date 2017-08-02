export function getFilenameFromPath(path) {
  return path.split('/').slice(-1).join()
}

export function dbNameFromFile(filename) {
  return getFilenameFromPath(filename).replace(/\./g, '_') + '_' + Date.now()
}

