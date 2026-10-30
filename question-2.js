// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
userTaskList.push({id: 5, task: "Walk the dog"});
console.log(userTaskList)
userTaskList[4-1] = { id: 4, task: "Go to the gym" }
console.log(userTaskList);
userTaskList.pop();
console.log(userTaskList);

console.log(userTaskList[userTaskList.length-1]);