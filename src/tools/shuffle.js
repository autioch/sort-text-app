const HALF_OF_RANDOM_MAX = 0.5;

function randomizeOrder() {
  return Math.random() - HALF_OF_RANDOM_MAX;
}

export default function shuffleTool(lines) {
  const shuffledArray = lines.sort(randomizeOrder);

  return shuffledArray;
}
