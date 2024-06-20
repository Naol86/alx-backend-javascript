export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true; // unused variable
    const task2 = false; // unused variable
    console.log('Inside block', task, task2);
  }

  return [task, task2];
}
