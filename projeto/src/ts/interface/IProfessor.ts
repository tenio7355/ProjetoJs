import shift from "../types/shifts";
import specialization from "../types/specialization";

interface IProfessor{
  id: string,
  cpf: string,
  name: string,
  email: string,
  password: string,
  isCoodinator: boolean
  specialization: specialization,
  shiftPreference: shift,
  previousClasses: string[],
  workLoad: number,
  isLoggedIn: boolean
}

export default IProfessor