import Race from './Race';

class Orc extends Race {
  protected _maxLifePoints: number;
  private static _racesInstancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 74;
    Orc._racesInstancesCount += 1;
  }

  public get maxLifePoints():number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Orc._racesInstancesCount;
  }
}

export default Orc;