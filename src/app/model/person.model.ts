export class Person {
  public events?: Array<PersonEvent> = undefined;
  public familyId?: number = undefined;
  public gender?: string = undefined;
  public id?: number = undefined;
  public name?: PersonNames = undefined;
  public note?: string = undefined;
  public occupation?: string = undefined;
  public parentFamilyId?: number = undefined;
  public place?: string = undefined;
}

export class PersonNames {
  public first?: string = undefined;
  public last?: string = undefined;
  public maiden?: string = undefined;
  public middle?: string = undefined;

}

export class PersonEvent {
  public date?: string = undefined;
  public id?: number = undefined;
  public note?: string = undefined;
  public place?: string = undefined;
  public prefix?: Prefix = undefined;
  public type?: Type = undefined;
}

export enum Prefix {
  About,
  After,
  Before,
  None
}

export enum Type {
  Adoption,
  Birth,
  Christening,
  Death,
  Divorce,
  Education,
  Emigration,
  Engagement,
  GetJob,
  Graduation,
  Immigration,
  Marriage,
  Relocation,
  Retirement
}
