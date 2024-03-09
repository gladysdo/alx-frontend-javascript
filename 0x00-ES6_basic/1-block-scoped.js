export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // This creates a new variable in the block scope
    let task2 = false; // This creates a new variable in the block scope
  }

  return [task, task2];
}
