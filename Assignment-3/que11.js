const students = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },
    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

// Calculate the average for each student
const result = Object.keys(students).map(student => {
    const scores = Object.values(students[student]);  // Get the array of scores for each student
    const average = scores.reduce((sum, score) => sum + score, 0) / scores.length; // Calculate average
    return {
        [student]: { average: average.toFixed(2) }  // Return an object with the student name and average
    };
});

// Convert the result into an object for easier access (optional)
const finalResult = Object.assign({}, ...result);

console.log(finalResult);
