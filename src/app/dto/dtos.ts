import {Prefix, Type,} from "../model/person.model";

export interface PersonDTO {
  events: Array<PersonEventDTO>;
  familyId?: number;
  gender?: string;
  id?: number;
  name: PersonNamesDTO;
  note?: string;
  occupation?: string;
  parentFamilyId?: number;
  place?: string;
}

export interface PersonNamesDTO {
  first?: string;
  last?: string;
  maiden?: string;
  middle?: string;
}

export interface PersonEventDTO {
  date?: string;
  id: number;
  note?: string;
  place?: string;
  prefix?: Prefix;
  type?: Type;
}
