new Vue({
    el: '#vue-app',
    data: {
        load: true,
        health: 100,
        restart: false,
        wash_a: false,
        steps: "Wet your hands with clean, running water (warm or cold)",
        wash_b: false,
        wash_c: false,
        wash_d: false,
        wash_e: false,
        ended: false,
        next: false,
        virus: "./img/virus.gif"
    },
    mounted() {
        this.loading()
      },
    methods: {
        kills: function () {
            this.health -= 20;
            if (this.health == 80) {
                this.wash_a = true;
                this.steps ="Turn off the tap, and apply soap.";
            } else if(this.health == 60){
                this.wash_b = true;
                this.steps = "Lather your hands by rubbing them together with the soap. Lather the backs of your hands, between your fingers, and under your nails.";
            }else if(this.health == 40){
                this.wash_c = true;
                this.steps = "Scrub your hands for at least 20 seconds.";
            }else if(this.health == 20){
                this.wash_d = true;
                this.steps ="Need a timer? Hum the “Happy Birthday” song from beginning to end twice.";
            }else if(this.health <= 0){
                this.wash_e = true;
                this.next = true;
                this.steps = "Rinse your hands well under clean, running water.";
                setTimeout(() => {
                    this.ended = true;
                    this.wash_e = false;
                    this.virus = "./img/icon.jpg";
                    this.steps = " ";
                    }, 2000);    
            }
        },
        reset: function () {
            this.health=  100;
            this.wash_a = false;
            this.wash_b = false;
            this.wash_c = false;
            this.wash_d = false;
            this.wash_e = false;
            this.restart = true;
            this.ended = false;
            this.next = false;
            this.steps = "Wet your hands with clean, running water (warm or cold).";
            this.virus = "./img/virus.gif";
        },
        loading: function () {
            setTimeout(() => {
                this.load = false;
                }, 2000);    
        }
    }
})