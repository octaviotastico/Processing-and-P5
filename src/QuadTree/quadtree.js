class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle {
    constructor (x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    contains(point) {
        let nw = point.x > this.x - this.w;
        let ne = point.x < this.x + this.w;
        let sw = point.y > this.y - this.h;
        let se = point.y < this.y + this.h;
        return (nw && ne && sw && se);
    }
}

class QuadTree {

    constructor(boundary, n) {
        this.boundary = boundary;
        this.capacity = n;
        this.points = [];
        this.divided = false;
    }

    insert(point) {
        // If this section doesn't contains the point.
        if (!this.boundary.contains(point)) {
            return false;
        }
        // If the point is on this section, then...
        // or we add it, or we subdivide the section.
        if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
        } else {
            if (!this.divided) {
                this.subdivide();
            }
            if (this.northeast.insert(point)) return true;
            else if (this.northwest.insert(point)) return true;
            else if (this.southeast.insert(point)) return true;
            else if (this.southwest.insert(point)) return true;
        }
    }

    subdivide() {
        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.w;
        let h = this.boundary.h;
        let nw = new Rectangle(x - w / 2, y - h / 2, w / 2, h / 2);
        this.northwest = new QuadTree(nw, this.capacity);
        let ne = new Rectangle(x + w / 2, y - h / 2, w / 2, h / 2);
        this.northeast = new QuadTree(ne, this.capacity);
        let sw = new Rectangle(x - w / 2, y + h / 2, w / 2, h / 2);
        this.southwest = new QuadTree(sw, this.capacity);
        let se = new Rectangle(x + w / 2, y + h / 2, w / 2, h / 2);
        this.southeast = new QuadTree(se, this.capacity);
        this.divided = true;
    }

    show() {
        stroke(50);
        strokeWeight(1);
        noFill();
        rectMode(CENTER);
        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.w;
        let h = this.boundary.h;
        rect(x, y, 2*w, 2*h);
        if(this.divided) {
            this.northeast.show();
            this.northwest.show();
            this.southeast.show();
            this.southwest.show();
        }
        for (let p of this.points) {
            stroke(0);
            strokeWeight(5);
            point(p.x, p.y);
            stroke(255, 150, 255);
            strokeWeight(3.5);
            point(p.x, p.y);
        }
    }
}
