import Race from './Race';

class Orc extends Race {
  protected _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 74;
  }

  public get maxLifePoints():number {
    return this._maxLifePoints;
  }
}

export default Orc;