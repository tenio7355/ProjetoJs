/**
 *
 * @param nameCourse nome do curso
 * @param periodCourse período do curso
 * @returns retorna o padrão do previousClasses
 */
export default function constructPreviousClasses(nameCourse, periodCourse) {
    const constructed = `${nameCourse} - ${periodCourse}`;
    return constructed;
}
