import typeCourses from "../types/typeCourses.js";
import timePeriod from "../types/timePeriod.js";
import periodCourse from "../types/periodClasses.js";
import specialization from "../types/specialization.js";

interface IDiscipline{
  id: string,
  idProfessor: string[],
  nameCourse: nameCourses
  typeCourse: typeCourses
  periodCourse: periodCourse
  discipline: disciplines
  timePeriod: timePeriod
  specialization: specialization
  workLoad: number,
}

export default IDiscipline