const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

console.log(`Part-Time Instructors: ${nashvilleSoftwareSchool.instructors.partTime}`);
console.log(`Full-Time Instructors: ${nashvilleSoftwareSchool.instructors.fullTime[4]}, ${nashvilleSoftwareSchool.instructors.partTime[0]}`);
