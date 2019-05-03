export class FoodItem {
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    constructor(
        private _name: string,
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
