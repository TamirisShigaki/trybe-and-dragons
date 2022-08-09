import Race from './Race';

class Halfling extends Race {
  protected _maxLifePoints: number;
  private static _racesInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
    Halfling._racesInstancesCount += 1;
  }

  public get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._racesInstancesCount;
  }
}

export default Halfling;