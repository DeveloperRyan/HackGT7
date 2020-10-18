const { Connection, Request } = require("tedious");
require('dotenv').config();

// will be used for connecting to database
const config = {
    authentication: {
      options: {
        userName: process.env.username,
        password: process.env.password
      },
      type: "default"
    },
    server: process.env.server,
    options: {
      database: process.env.database,
      encrypt: true
    }
};

const connection = new Connection(config);

let pfp_link = "https://static.scientificamerican.com/blogs/cache/file/7069F0BB-A9AB-4932-84F508BBC0136458_source.jpg";
let course_pfp_link = "https://www.nps.gov/subjects/geology/images/rock-colors-Noatak-National-Preserve.jpg";
let rock_vid = "https://texasgardenmaterials.com/wp-content/uploads/2018/08/bull-rock-landscaping-rocks-gravel-houston-tx-77099.jpeg";
let v_vid = "https://images.theconversation.com/files/109822/original/image-20160201-32240-8oqf5e.jpg";
let v_book = "https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/ca_1016NID_Volcano_online.jpg";

// change task to have Task_Type and link to Place_Holder_Image

let query = `INSERT INTO Student (Student_Email, First_Name, Last_Name, Grade_Level, Xp, Xp_To_Level_Up, Student_Password, Image_Link)
VALUES ('hehe@ung.edu', 'Hedon', 'He', 2, 0, 180, 'hehe0nline', '${pfp_link}');

INSERT INTO Course (Course_Name, Course_Description, Level_Requirement, Course_Type, Image_Link)
VALUES ('Geology', "Rocks are important, let's take a look", 2, 'Sciences', '${course_pfp_link}');

INSERT INTO Task (Task_Name, Task_Description, Task_Type, Image_Link)
VALUES ('What kinda rock is that?', 'Classifying different rocks.', 'Video', '${rock_vid}');
INSERT INTO Task (Task_Name, Task_Description, Task_Type, Image_Link)
VALUES ('What kinda Volcano is that?', 'Classifying Volcanos', 'Video', '${v_vid}');
INSERT INTO Task (Task_Name, Task_Description, Task_Type, Image_Link)
VALUES ('Volcano!', 'unknown', 'Book', '${v_book}');

INSERT INTO Goal (Goal_Description)
VALUES ('Watch "What kinda rock is that?"');

INSERT INTO Student_Course
VALUES (1, 1);

INSERT INTO Course_Task
VALUES (1, 1);
INSERT INTO Course_Task
VALUES (1, 2);
INSERT INTO Course_Task
VALUES (1, 3);

INSERT INTO Student_Task_Done
VALUES (1, 1, 1);
INSERT INTO Student_Task_Done
VALUES (1, 2);
INSERT INTO Student_Task_Done
VALUES (1, 3);

INSERT INTO Student_Goal
VALUES (1, 1, 1);
`;

connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Reading rows from the Table...");

        // Read all rows from table
        const request = new Request(
            query,
            (err, rowCount) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log(`${rowCount} row(s) returned`);
            }
            }
        );
        
        request.on("row", columns => {
            console.log(columns)
        });
        
        connection.execSql(request);
    }
});