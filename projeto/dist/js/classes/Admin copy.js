export default class Admin {
    _name;
    _email;
    _password;
    _isLoggedIn;
    constructor({ name, email, password, isLoggedIn }) {
        this._name = name;
        this._email = email;
        this._password = password;
        this._isLoggedIn = isLoggedIn;
    }
    informations() {
        const teste = {
            name: this.name,
            email: this.email,
            password: this.password,
            isLoggedIn: this.isLoggedIn
        };
        return teste;
    }
    get name() {
        return this._name;
    }
    get password() {
        return this._password;
    }
    get isLoggedIn() {
        return this._isLoggedIn;
    }
    get email() {
        return this._email;
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
    set isLoggedIn(value) {
        this._isLoggedIn = value;
    }
}
