export class FoodItem {

    public facts: {};

    constructor(
        public id: number,
        public name: string,
        public group?: string,
        public description?: string,
        public servingSize?: string,
        public unit?: string,
        public calories?: number,
        public fat?: number,
        public protein?: number,
        public carbs?: number
    ) {
        this.facts = {
            protein,
            fat,
            carbs,
            calories,
            servingSize
        }
     }
}
