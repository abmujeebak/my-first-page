let student = {
    name: "John",
    age: 20,
    marks: {
        science: 70,
        math: 75
    },

};

console.log(student.marks);
console.log(student.marks.science);


let students = {
    id: 101,
    name: "ahmad khan",
    age: 22,

    contact:{
        email: "ahamd@gmail.com",
        phone: "0701234567",

        address : {
            city: "kabul",
            district: "district 5",
            street: "street 12"
        }
    },

    enrolledcourse: {
        coursename: "full stact web development",
        duration: "4 months",
        fee: 10000,
        discount : {
            type : "scholarship",
            percentage: 90,
            finalfee: 4000
        }
    }
}


console.log(students)

console.log(students.contact)
console.log(students.contact.address)
console.log(students.enrolledcourse.discount)



for ( data in students) {
    console.log(students[data])
    
}



let dashboard = [
    {student: "said shah",
        course: "web development bootcamp",
        instructor: "ahmad rahimi",
        progress: 75

    },
    {student: "hamid jan",
        course: "micorsoft exel for professional",
        instructor: "fatima noori",
        progress: 100

    },

    {student: "laila khan",
        course: "microsoft word for professional",
        instructor: "samiullah",
        progress: 40

    }

];

for(let i=0; i < dashboard.length; i++){
    let data = dashboard[i]
    let courseinfo = `$(data.course) by $(data.instructor)` ;
    

    if(data.progress ===100)
    {
        console.log(`$(data.studnet) has completed the course: $(courseinfo)`);

    }else {
        console.log(
            `$(data.student) is currently at $(data.progress) progress in: $(courseinfo)`
        )
    }
}




let course = [
    {
        title: "grapic design basics",
        instructor: "samiullah ahmadzai",
        student: "laila khan",
        completed: false
    },
     {
        title: "grapic design basics",
        instructor: "ahmad",
        student: "ismat",
        completed: false
    },
     {
        title: "grapic design basics",
        instructor: "ali ",
        student: "mahmood",
        completed: false
    }
];

for(let i = 0; i< course.length; i++){
    let course = course[i];
    let courseinfo = `$(course.title) by $(course.instructor)`;
    if (course.completed){}
}