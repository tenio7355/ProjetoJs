{
  id: string,
  cpf: string,
  name: string,
  email: string,
  password: string,
  isCoodinator: boolean
  specialization: specialization,
  shiftPreference: shift,
  workLoad: number,
  isLoggedIn: boolean
}

type specialization = "Segurança" | "Programação" | "Informática" | "Banco de Dados" | "Sistemas Operacionais" | "Redes" 
type shift = "Manhã" | "Tarde" | "Noite" | "Integral"


disciplinas {
  id: string,
  idProfessor: string,
  periodClass: periodCourse
  discipline: disciplines
  nameCourse: nameCourses
  typeCourse: typeCourses
  timePeriod: timePeriod
  workLoad: number,
}

type disciplines = "Banco de Dados" | "Lógica de Programação" | "Programação Web" | "Desenvolvimento de Programação Web" | "Organização de Computadores" | "Segurança da 
Informação" | "Sistemas Operacionais" | "Informática Básica" | "Redes de Computadores" | "Programação Orientada a Objetos"


type nameCourses = "Ads" | "Informática" | "Msi" | "Engenharia Civil" | "Informática A" | "Informática B"

type typeCourses = "Técnico" | "Gradução" | "Pós-Graduação"

type timePeriod = "Matutino" | "Vespertino" | "Noturno" | "Integral"