export interface IUsers {
  uuid: string | null,
  firstname: string,
  lastname: string,
  username: string,
  email: string,
  password: string | null,
  status: string | null,
  is_active: boolean | null
}
