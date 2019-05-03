export class FoodItem {


    constructor(
        public name: string,
        public group?: string,
        public description?: string,
        public servingSize?: string,
        public unit?: string,
        public calories?: number,
        public fat?: number,
        public protein?: number,
        public carbs?: number
    ) { }
}
