function compareLines(lineA, lineB) {
  return lineA.localeCompare(lineB);
}

export default function sortTool(lines) {
  const sortedArray = lines.sort(compareLines);

  return sortedArray;
}
