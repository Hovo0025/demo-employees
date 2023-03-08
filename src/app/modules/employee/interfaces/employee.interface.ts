export interface EmployeeItemI {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  registered: string;
}

export interface CreateEmployeeReqI {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  registered: string;
}
