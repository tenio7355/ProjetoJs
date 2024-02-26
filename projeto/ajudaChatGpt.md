crie 10 professores baseados nas informações oferecidas pela tabela que você criou
professor {
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

type previousClasses = (faça no formato "nameCourse - periodClass"[buscar na tablea disciplinas] )
type shift = "Matutino" | "Vespertino" | "Noturno" | "Integral"
type specialization = "Segurança" | "Programação" | "Informática" | "Banco de Dados" | "Sistemas Operacionais" | "Redes" | "Ciência da Computação"

- se o professor for isCoordinator = true, então a carga horária máxima é 10h semanais, caso seja falso, a carga é 14h semanais
- um professor pdoe ter mais de um specializaitionm assim como shiftPreference
- o workLoad de cada professor deve ser de acordo com as disciplinas em que está inscrita inserida
- o quero que metade a maioria dos professores que você me der, tenham 2 previousClassses, outros só uma e outros nenhuma


quero 10 exemplos de disciplinas nesses padrões...
disciplinas {
  id: string,
  idProfessor: string[],
  nameCourse: nameCourses
  typeCourse: typeCourses
  periodCourse: periodCourse
  discipline: disciplines
  timePeriod: timePeriod
  specialization: specialization[]
  workLoad: number,
}

type disciplines = "Banco de Dados" | "Lógica de Programação" | "Programação Web" | "Desenvolvimento de Programação Web" | "Organização de Computadores" | "Segurança da Informação" | "Sistemas Operacionais" | "Informática Básica" | "Redes de Computadores" | "Programação Orientada a Objetos"
type specialization = "Segurança" | "Programação" | "Informática" | "Banco de Dados" | "Sistemas Operacionais" | "Redes" | "Ciência da Computação"
type nameCourses = "Ads" | "Informática" | "Msi" | "Engenharia Civíl" | "Informática A" | "Informática B"
type typeCourses = "Técnico" | "Gradução" | "Pós-Graduação"
type timePeriod = "Matutino" | "Vespertino" | "Noturno" | "Integral"

- o workload das disciplinas é em horas semanais
- dos exemplos que me der, quero que venham uns com 2 professores no idProfessor, outros com 1 e outros sem nenhum