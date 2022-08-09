import Race from './Race';

class Halfling extends Race {
  protected _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;
  }

  public get maxLifePoints():number {
    return this._maxLifePoints;
  }
}

export default Halfling;