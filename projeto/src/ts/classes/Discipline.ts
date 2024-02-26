import IDiscipline from "../interface/IDiscipline";
import periodCourse from "../types/periodClasses";
import specialization from "../types/specialization";
import timePeriod from "../types/timePeriod";
import typeCourses from "../types/typeCourses";

export default class Discipline implements IDiscipline {
  private _id: string;
  private _idProfessor: string[];
  private _nameCourse: nameCourses;
  private _typeCourse: typeCourses;
  private _periodCourse: periodCourse;
  private _discipline: disciplines;
  private _timePeriod: timePeriod;
  private _workLoad: number;
  private _specialization: specialization[];

  constructor({ id, idProfessor, nameCourse, typeCourse, periodCourse, discipline, timePeriod, workLoad, specialization }: IDiscipline) {
    this._id = id
    this._idProfessor = idProfessor
    this._nameCourse = nameCourse
    this._typeCourse = typeCourse
    this._periodCourse = periodCourse
    this._discipline = discipline
    this._timePeriod = timePeriod
    this._workLoad = workLoad
    this._specialization = specialization
  }

  informations() {
    const teste = {
      id: this.id,
      idProfessor: this.idProfessor,
      nameCourse: this.nameCourse,
      typeCourse: this.typeCourse,
      periodCourse: this.periodCourse,
      discipline: this.discipline,
      timePeriod: this.timePeriod,
      workLoad: this.workLoad,
      specialization: this.specialization
    } as IDiscipline
    return teste
  }

  public get id(): string {
    return this._id;
  }
  public get idProfessor(): string[] {
    return this._idProfessor;
  }
  public get nameCourse(): nameCourses {
    return this._nameCourse;
  }
  public get typeCourse(): typeCourses {
    return this._typeCourse;
  }
  public get periodCourse(): periodCourse {
    return this._periodCourse;
  }
  public get discipline(): disciplines {
    return this._discipline;
  }
  public get timePeriod(): timePeriod {
    return this._timePeriod;
  }
  public get workLoad(): number {
    return this._workLoad;
  }
  public get specialization(): specialization[] {
    return this._specialization;
  }

  public set idProfessor(value: string[]) {
    this._idProfessor = value;
  }
  public set nameCourse(value: nameCourses) {
    this._nameCourse = value;
  }
  public set typeCourse(value: typeCourses) {
    this._typeCourse = value;
  }
  public set periodCourse(value: periodCourse) {
    this._periodCourse = value;
  }
  public set discipline(value: disciplines) {
    this._discipline = value;
  }
  public set timePeriod(value: timePeriod) {
    this._timePeriod = value;
  }
  public set workLoad(value: number) {
    this._workLoad = value;
  }
  public set specialization(value: specialization[]) {
    this._specialization = value;
  }
}