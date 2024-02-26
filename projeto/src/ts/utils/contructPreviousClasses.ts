import previousClasses from "../types/previousClasses"

/**
 * 
 * @param nameCourse nome do curso
 * @param periodCourse período do curso
 * @returns retorna o padrão do previousClasses
 */
export default function constructPreviousClasses(nameCourse: string, periodCourse: string) {
  const constructed = `${nameCourse} - ${periodCourse}`
  return constructed as previousClasses
}