import Race from './Race';

class Elf extends Race {
  protected _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 99;
  }

  public get maxLifePoints():number {
    return this._maxLifePoints;
  }
}

export default Elf;