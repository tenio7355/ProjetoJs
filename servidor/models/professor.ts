import { Model, Optional } from 'sequelize';
import specialization from '../types/specialization';
import shifts from '../types/shifts';
type ProfessorAttributes = {
  id: string,
  name: string,
  email: string
  password: string
  specialization: specialization
  shiftPreference: shifts
  previousClasses: string[]
  hourlyLoad: number

  // other attributes...
};

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type ProfessorCreationAttributes = Optional<ProfessorAttributes, 'id'>;

class Professor extends Model<ProfessorAttributes, ProfessorCreationAttributes> {
  declare id: string;
  declare name: string;
  // other attributes...
}
export default Professor