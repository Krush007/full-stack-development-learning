const employee = {
    id: 101,
    name: "Rahul",
    department: "IT",
    skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ],
    salaries: [30000, 45000, 50000, 55000]
};

// 1. Object Destructuring
const {
    id,
    name,
    department,
    skills,
    salaries
} = employee;

// 2. Array Destructuring
const [
    primarySkill,
    secondarySkill,
    ...otherSkills
] = skills;

// 3. Array Destructuring with Salaries
const [
    firstSalary,
    secondSalary,
    ...remainingSalaries
] = salaries;

// 4. Spread Operator
const updatedEmployee = {
    ...employee,
    city: "Ahmedabad",
    experience: "3 Years"
};

// 5. Rest Operator
function getEmployeeStats(...salaryList) {

    const totalSalary =
        salaryList.reduce(
            (sum, salary) => sum + salary,
            0
        );

    const averageSalary =
        totalSalary / salaryList.length;

    const highestSalary =
        Math.max(...salaryList);

    return {
        totalSalary,
        averageSalary,
        highestSalary
    };
}

const stats =
    getEmployeeStats(...salaries);

// Console Logs
console.log("ID:", id);
console.log("Name:", name);
console.log("Department:", department);

console.log("Primary Skill:", primarySkill);
console.log("Secondary Skill:", secondarySkill);
console.log("Other Skills:", otherSkills);

console.log("First Salary:", firstSalary);
console.log("Second Salary:", secondSalary);
console.log(
    "Remaining Salaries:",
    remainingSalaries
);

console.log(
    "Updated Employee:",
    updatedEmployee
);

console.log("Total Salary:",
    stats.totalSalary
);

console.log("Average Salary:",
    stats.averageSalary
);

console.log("Highest Salary:",
    stats.highestSalary
);