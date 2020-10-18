INSERT INTO Student (Student_Email, First_Name, Last_Name, Grade_Level, Xp, Xp_To_Level_Up, Student_Password, Image_Link)
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
