import shift from "../types/shifts";
import specialization from "../types/specialization";

interface IProfessor{
  id: 1,
  name: string,
  email: string,
  senha: string,
  especializacao: specialization,
  preferenciaHorario: shift,
  turmasAnteriores: string[],
  cargaHoraria: number
}

export default IProfessor