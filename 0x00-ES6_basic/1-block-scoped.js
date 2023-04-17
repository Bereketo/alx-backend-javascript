export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let tempTask = true;
    let tempTask2 = false;
    task = tempTask;
    task2 = tempTask2;
  }

  return [task, task2];
}

