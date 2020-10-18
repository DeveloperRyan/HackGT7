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

function getProfileInfo(student_id) {
    let json = {};
    let query = `SELECT Student.First_Name, Student.Last_Name, Student.Level, Student.Xp, Student.Xp_To_Level_Up, Student.Profile_Picture_Link
    FROM Student
    WHERE Student.Student_Id = ${student_id};`;

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
}

function getSkillTree(student_id) {
  let json = {};
  let query = `SELECT * 
  FROM Student_Course;`;

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
}

/*
.___                          __                           
|   | __  _  _______    _____/  |_                         
|   | \ \/ \/ /\__  \  /    \   __\                        
|   |  \     /  / __ \|   |  \  |                          
|___|   \/\_/  (____  /___|  /__|                          
                    \/     \/                              
  __                                                       
_/  |_  ____                                               
\   __\/  _ \                                              
 |  | (  <_> )                                             
 |__|  \____/                                              
                                                           
  _________ .__                                     ___    
 /   _____/ |  |     ____     ____   ______    /\   \  \   
 \_____  \  |  |   _/ __ \  _/ __ \  \____ \   \/    \  \  
 /        \ |  |__ \  ___/  \  ___/  |  |_> >  /\     )  ) 
/_______  / |____/  \___  >  \___  > |   __/   \/    /  /  
        \/              \/       \/  |__|           /__/   */

function getCurrentCourses(student_id) {
  let json = {};
  let query = `SELECT * 
  FROM Course
  WHERE Course.Student_Id = ${student_id};`;

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
}

function getCourseContent(course_id, curr_lesson) {
    let json = {};
    let query = `SELECT * 
    FROM Course
    WHERE Course.Course_Id = ${course_id};`;

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
}

function getPeers() {

}