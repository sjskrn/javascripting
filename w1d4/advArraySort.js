var students = [
  { name: "bruce", age: 40 },
  { name: "zoidberg", age: 22 },
  { name: "alex", age: 22 },
  { name: "alex", age: 30 },
];

// sort by age
students.sort(function (a, b) {
  return b.age - a.age;
});

// sort by name
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});

console.log(students);