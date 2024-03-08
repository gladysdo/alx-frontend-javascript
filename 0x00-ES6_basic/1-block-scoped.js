export default function taskBlock(trueOrFalse) {
  let task = false; // Use let instead of var for block-scoping
  let task2 = true;  // Use let instead of var for block-scoping

  if (trueOrFalse) {
    task = true;  // Assign to the existing variables, no need for var
    task2 = false; // Assign to the existing variables, no need for var
  }

  return [task, task2];
}
