USE [eBoletim]
GO
/****** Object:  StoredProcedure [dbo].[SP_eBoletim_GenerateResults]    Script Date: 29/09/2022 11:18:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER   procedure [dbo].[SP_eBoletim_GenerateResults] 
@Subject nvarchar(20), 
@StudentId int, 
@Year int
as
begin
select
grades.Id as GradeId,
student.Id as StudentId,
(student.Name + ' ' + student.Surname) as StudentName,
subjects.SubjectName, 
(teacher.Name + ' ' + teacher.Surname) as TeacherName,
grades.Quarter,
classes.Year, 
grades.Grade
from
[Classes] classes 
inner join 
[Grades] grades
on classes.id = grades.ClassId 
left outer join 
[Subjects] subjects 
on classes.SubjectId = subjects.Id
left outer join
[Person] teacher
on teacher.id = classes.TeacherId
left outer join
[Person] student
on student.id = grades.StudentId
where 
(@StudentId is null or grades.StudentId = @StudentId) and 
(@Subject is null or SubjectName = @Subject) and 
(@Year is null or Year = @Year)
end
