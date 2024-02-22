import typeCourses from "../types/typeCourses.js";
import timePeriod from "../types/timePeriod.js";
import periodCourse from "../types/periodClasses.js";

interface IDiscipline{
  id: string,
  idProfessor: string[],
  nameCourse: nameCourses
  typeCourse: typeCourses
  periodCourse: periodCourse
  discipline: disciplines
  timePeriod: timePeriod
  workLoad: number,
}

export default IDiscipline