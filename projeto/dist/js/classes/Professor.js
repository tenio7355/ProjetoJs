export default class Professor {
    _id;
    _cpf;
    _name;
    _email;
    _password;
    _isCoodinator;
    _specialization;
    _shiftPreference;
    _previousClasses;
    _workLoad;
    _isLoggedIn;
    constructor({ id, cpf, name, email, password, specialization, shiftPreference, previousClasses, workLoad, isLoggedIn, isCoodinator }) {
        this._id = id;
        this._cpf = cpf;
        this._name = name;
        this._email = email;
        this._password = password;
        this._specialization = specialization;
        this._shiftPreference = shiftPreference;
        this._previousClasses = previousClasses;
        this._workLoad = workLoad;
        this._isLoggedIn = isLoggedIn;
        this._isCoodinator = isCoodinator;
    }
    informations() {
        return {
            cpf: this.cpf,
            email: this.email,
            id: this.id,
            isLoggedIn: this.isLoggedIn,
            name: this.name,
            password: this.password,
            previousClasses: this.previousClasses,
            shiftPreference: this.shiftPreference
        };
    }
    get name() {
        return this._name;
    }
    get password() {
        return this._password;
    }
    get specialization() {
        return this._specialization;
    }
    get shiftPreference() {
        return this._shiftPreference;
    }
    get previousClasses() {
        return this._previousClasses;
    }
    get workLoad() {
        return this._workLoad;
    }
    get isLoggedIn() {
        return this._isLoggedIn;
    }
    get id() {
        return this._id;
    }
    get cpf() {
        return this._cpf;
    }
    get email() {
        return this._email;
    }
    get isCoodinator() {
        return this._isCoodinator;
    }
    set isCoodinator(value) {
        this._isCoodinator = value;
    }
    set cpf(value) {
        this._cpf = value;
    }
    set email(value) {
        this._email = value;
    }
    set name(value) {
        this._name = value;
    }
    set password(value) {
        this._password = value;
    }
    set specialization(value) {
        this._specialization = value;
    }
    set shiftPreference(value) {
        this._shiftPreference = value;
    }
    set previousClasses(value) {
        this._previousClasses = value;
    }
    set workLoad(value) {
        this._workLoad = value;
    }
    set isLoggedIn(value) {
        this._isLoggedIn = value;
    }
}
