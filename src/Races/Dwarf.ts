import Race from './Race';

class Dwarf extends Race {
  protected _maxLifePoints: number;
  private static _racesInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 80;
    Dwarf._racesInstancesCount += 1;
  }

  public get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._racesInstancesCount;
  }
}

export default Dwarf;