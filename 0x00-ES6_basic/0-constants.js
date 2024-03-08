export function taskFirst() {
  const task = 'I prefer const when I can.'; // Modified: Using const
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Modified: Using let
  combination += getLast();

  return combination;
}
