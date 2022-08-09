import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Mage._archetypeInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._archetypeInstances;
  }
}

export default Mage;