function findHighestMarks(marks) {
    let highestMarks = marks[0];
  
    for (let i = 1; i < marks.length; i++) {
      highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
    }
  
    console.log("Highest marks:", highestMarks);
  }
  
  // Example usage:
  const studentMarks = [85, 92, 78, 95, 88];
  findHighestMarks(studentMarks); // Output: Highest marks: 95
  