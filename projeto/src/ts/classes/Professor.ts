import IProfessor from "../interface/IProfessor";
import previousClasses from "../types/previousClasses";
import shift from "../types/shifts";
import specialization from "../types/specialization";

export default class Professor implements IProfessor {
  private _id: string;
  private _cpf: string;
  private _name: string;
  private _email: string;
  private _password: string;
  private _isCoodinator: boolean;
  private _specialization: specialization[];
  private _shiftPreference: shift[];
  private _previousClasses: previousClasses[];
  private _workLoad: number;
  private _isLoggedIn: boolean;

  constructor({ id, cpf, name, email, password, specialization, shiftPreference, previousClasses, workLoad, isLoggedIn, isCoordinator: isCoodinator }: IProfessor) {
    this._id = id
    this._cpf = cpf
    this._name = name
    this._email = email
    this._password = password
    this._specialization = specialization
    this._shiftPreference = shiftPreference
    this._previousClasses = previousClasses
    this._workLoad = workLoad
    this._isLoggedIn = isLoggedIn
    this._isCoodinator = isCoodinator
  }

  informations() {
    const teste = {
      id: this.id,
      cpf: this.cpf,
      name: this.name,
      email: this.email,
      password: this.password,
      isCoordinator: this.isCoordinator,
      previousClasses: this.previousClasses,
      specialization: this.specialization,
      shiftPreference: this.shiftPreference,
      workLoad: this.workLoad,
      isLoggedIn: this.isLoggedIn
    } as IProfessor
    return teste
  }

  public get name(): string {
    return this._name;
  }
  public get password(): string {
    return this._password;
  }
  public get specialization(): specialization[] {
    return this._specialization;
  }
  public get shiftPreference(): shift[] {
    return this._shiftPreference;
  }
  public get previousClasses(): previousClasses[] {
    return this._previousClasses;
  }
  public get workLoad(): number {
    return this._workLoad;
  }
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }
  public get id(): string {
    return this._id;
  }
  public get cpf(): string {
    return this._cpf;
  }
  public get email(): string {
    return this._email;
  }
  public get isCoordinator(): boolean {
    return this._isCoodinator;
  }
  public set isCoordinator(value: boolean) {
    this._isCoodinator = value;
  }
  public set cpf(value: string) {
    this._cpf = value;
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
  public set specialization(value: specialization[]) {
    this._specialization = value;
  }
  public set shiftPreference(value: shift[]) {
    this._shiftPreference = value;
  }
  public set previousClasses(value: previousClasses[]) {
    this._previousClasses = value;
  }
  public set workLoad(value: number) {
    this._workLoad = value;
  }
  public set isLoggedIn(value: boolean) {
    this._isLoggedIn = value;
  }
}