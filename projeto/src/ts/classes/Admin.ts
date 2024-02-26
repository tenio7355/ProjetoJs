import IAdmin from "../interface/IAdmin";

export default class Admin implements IAdmin {
  private _name: string;
  private _email: string;
  private _password: string;
  private _isLoggedIn: boolean;

  constructor({ name, email, password, isLoggedIn }: IAdmin) {
    this._name = name
    this._email = email
    this._password = password
    this._isLoggedIn = isLoggedIn
  }

  informations() {
    const teste = {
      name: this.name,
      email: this.email,
      password: this.password,
      isLoggedIn: this.isLoggedIn
    } as IAdmin
    return teste
  }

  public get name(): string {
    return this._name;
  }
  public get password(): string {
    return this._password;
  }
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }
  public set name(value: string) {
    this._name = value;
  }
  public set password(value: string) {
    this._password = value;
  }
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}