export interface UserResponse {
  data:User[];
}

export interface User {
  attributes: UserAttributes;
  id:string;
  type:string;
  relationships: unknown;
}

export interface UserAttributes {
  name:string;
  hypoallergenic:boolean;
}
