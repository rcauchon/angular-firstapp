import { FoodItem } from './food-item';

describe('FoodItems', () => {
  it('should create an instance', () => {
    expect(new FoodItem(1, '', '', '', '' , '', 0, 0, 0, 0)).toBeTruthy();
  });
});
