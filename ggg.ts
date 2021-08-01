class Circle {
    radius : number = 1.0;
    color : string = "red";
    constructor(radius: number, color:string) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() : number {
        return this.radius;
    }

    setRadius(radius:number) : void {
        return this.radius;
    }

    getColor () : string {
        return this.color;
    }

    setColor(color:string) : void {
        return this.color;
    }

    toString() : string {
        this.radius
    }

    getArea() : number {
        return 3.14 * this.radius *this.radius;
    }

    getCircumference() : number {
        return 2* 3.14 * this.radius;
    }
}
