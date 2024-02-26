import previousClasses from "../types/previousClasses";
import shift from "../types/shifts";
import specialization from "../types/specialization";

interface IProfessor{
  id: string,
  cpf: string,
  name: string,
  email: string,
  password: string,
  isCoordinator: boolean
  specialization: specialization[],
  shiftPreference: shift[],
  previousClasses: previousClasses[],
  workLoad: number,
  isLoggedIn: boolean
}

export default IProfessor