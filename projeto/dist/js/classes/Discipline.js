export default class Discipline {
    _id;
    _idProfessor;
    _nameCourse;
    _typeCourse;
    _periodCourse;
    _discipline;
    _timePeriod;
    _workLoad;
    constructor({ id, idProfessor, nameCourse, typeCourse, periodCourse, discipline, timePeriod, workLoad }) {
        this._id = id;
        this._idProfessor = idProfessor;
        this._nameCourse = nameCourse;
        this._typeCourse = typeCourse;
        this._periodCourse = periodCourse;
        this._discipline = discipline;
        this._timePeriod = timePeriod;
        this._workLoad = workLoad;
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
            workLoad: this.workLoad
        };
        return teste;
    }
    get id() {
        return this._id;
    }
    get idProfessor() {
        return this._idProfessor;
    }
    get nameCourse() {
        return this._nameCourse;
    }
    get typeCourse() {
        return this._typeCourse;
    }
    get periodCourse() {
        return this._periodCourse;
    }
    get discipline() {
        return this._discipline;
    }
    get timePeriod() {
        return this._timePeriod;
    }
    get workLoad() {
        return this._workLoad;
    }
    set id(value) {
        this._id = value;
    }
    set idProfessor(value) {
        this._idProfessor = value;
    }
    set nameCourse(value) {
        this._nameCourse = value;
    }
    set typeCourse(value) {
        this._typeCourse = value;
    }
    set periodCourse(value) {
        this._periodCourse = value;
    }
    set discipline(value) {
        this._discipline = value;
    }
    set timePeriod(value) {
        this._timePeriod = value;
    }
    set workLoad(value) {
        this._workLoad = value;
    }
}
