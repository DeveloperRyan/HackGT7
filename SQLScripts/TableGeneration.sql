DROP TABLE IF EXISTS Student_Goal, Goal, Student_Task_Done, Course_Task, Task, Student_Course, Course, Student;

CREATE TABLE Student (
	Student_Id INT NOT NULL IDENTITY,
	Student_Email varchar(50) NOT NULL,
	First_Name varchar(50) NOT NULL,
	Last_Name varchar(50) NOT NULL,
	Student_Password varchar(50) NOT NULL,
	Image_Link VARCHAR(256) NOT NULL,
	Date_Created DATETIME NOT NULL DEFAULT GETDATE(),
	Grade_Level INT NOT NULL,
	Xp INT NOT NULL,
	Xp_To_Level_Up INT NOT NULL,
	PRIMARY KEY(Student_Id),
	UNIQUE (Student_Email),
);

CREATE TABLE Course (
	Course_Id INT NOT NULL IDENTITY,
	Course_Name varchar(50) NOT NULL,
	Course_Description varchar(50) NOT NULL,
	Level_Requirement INT NOT NULL,
	Course_Type varchar(50) NOT NULL,
	Image_Link VARCHAR(256) NOT NULL,
	Date_Created DATETIME NOT NULL DEFAULT GETDATE(),
	PRIMARY KEY(Course_Id),
);

CREATE TABLE Task (
	Task_Id INT NOT NULL IDENTITY,
	Task_Name varchar(50) NOT NULL,
	Task_Description varchar(50) NOT NULL,
	Task_Type VARCHAR(50),
	Image_Link VARCHAR(256) NOT NULL,
	Date_Created DATETIME NOT NULL DEFAULT GETDATE(),
	PRIMARY KEY(Task_Id),
);

CREATE TABLE Goal (
	Goal_Id INT NOT NULL IDENTITY,
	Goal_Description varchar(50) NOT NULL,
	Date_Created DATETIME NOT NULL DEFAULT GETDATE(),
	PRIMARY KEY(Goal_Id),
);

CREATE TABLE Student_Course (
	Student_Course_Id INT NOT NULL IDENTITY,
	Student_Id INT NOT NULL,
	Course_Id INT NOT NULL,
	Date_Created DATETIME NOT NULL DEFAULT GETDATE(),
	PRIMARY KEY(Student_Course_Id),
	FOREIGN KEY(Student_Id) REFERENCES Student(Student_Id),
	FOREIGN KEY(Course_Id) REFERENCES Course(Course_Id)
);

CREATE TABLE Course_Task (
	Course_Task_Id INT NOT NULL IDENTITY,
	Course_Id INT NOT NULL,
	Task_Id INT NOT NULL,
	Date_Created DATETIME NOT NULL DEFAULT GETDATE(),
	FOREIGN KEY(Course_Id) REFERENCES Course(Course_Id),
	FOREIGN KEY(Task_Id) REFERENCES Task(Task_Id),
	PRIMARY KEY(Course_Task_Id),
);

CREATE TABLE Student_Task_Done (
	Student_Task_Done_Id INT NOT NULL IDENTITY,
	Student_Id INT NOT NULL,
	Course_Task_Id INT NOT NULL,
	Is_Done BIT NOT NULL DEFAULT 0,
	Date_Created DATETIME NOT NULL DEFAULT GETDATE(),
	PRIMARY KEY(Student_Task_Done_Id),
	FOREIGN KEY(Student_Id) REFERENCES Student(Student_Id),
	FOREIGN KEY(Course_Task_Id) REFERENCES Course_Task(Course_Task_Id),
);

CREATE TABLE Student_Goal (
	Student_Goal_Id INT NOT NULL IDENTITY,
	Student_Id INT NOT NULL,
	Goal_Id INT NOT NULL,
	Student_Task_Done_Id INT NOT NULL,
	Date_Created DATETIME NOT NULL DEFAULT GETDATE(),
	PRIMARY KEY(Student_Goal_Id),
	FOREIGN KEY(Student_Id) REFERENCES Student(Student_Id),
	FOREIGN KEY(Goal_Id) REFERENCES Goal(Goal_Id),
	FOREIGN KEY(Student_Task_Done_Id) REFERENCES Student_Task_Done(Student_Task_Done_Id),
);