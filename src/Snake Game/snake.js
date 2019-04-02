function Snake() {
    this.x = 300;
    this.y = 300;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.update = function() {
        if (this.total == this.tail.length) {
            for (var i = 0; i < this.tail.length - 3; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 3] = createVector(this.x, this.y);
        this.tail[this.total - 2] = createVector(this.x, this.y);
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x += this.xspeed * grid;
        this.y += this.yspeed * grid;

        if (this.x == -grid) {
            this.x = 600;
        } else if (this.y == -grid) {
            this.y = 600;
        } else if (this.x == 600) {
            this.x = 0;
        } else if (this.y == 600) {
            this.y = 0;
        }
    }

    this.show = function() {
        fill('#daaeea');
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, grid, grid);
        }
        rect(this.x, this.y, grid, grid);
    }

    this.dir = function(x, y){

        if (x == -(this.xspeed) || y == -(this.yspeed)) {
            this.xspeed = this.xspeed;
            this.yspeed = this.yspeed;
        } else {
            this.xspeed = x;
            this.yspeed = y;
        }
    }

    this.eat = function(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 5) {
            this.total += 3;
            return true;
        } else {
            return false;
        }
    }

    this.dead = function() {
        var dsq1 = (this.x >= 60 && this.y >= 60 && this.x < 210 && this.y < 210);
        var dsq2 = (this.x >= 390 && this.y > 60 && this.x < 540 && this.y < 210);
        var dsq3 = (this.x >= 60 && this.y >= 390 && this.x < 210 && this.y < 540);
        var dsq4 = (this.x >= 390 && this.y > 390 && this.x < 540 && this.y < 540);
        for (var i = 0; i < this.tail.length; i++){
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1 || dsq1 || dsq2 || dsq3 || dsq4){
                this.total = 0;
                this.tail = [];
                this.x = 300;
                this.y = 300;
            }
        }
    }

}
