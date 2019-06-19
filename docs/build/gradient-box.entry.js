import { r as registerInstance, h } from './chunk-2519a93c.js';

class GradientBox {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.copied = false;
    }
    componentWillLoad() {
        this.direction = this.getRandomInt();
    }
    componentDidLoad() {
        this.gradientBox.onmouseleave = () => {
            if (this.copied)
                this.copied = false;
        };
    }
    getRandomInt(min = -360, max = 360) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    copyCss() {
        this.inputEl.select();
        var result = document.execCommand("copy");
        console.log(result);
        this.copied = true;
    }
    render() {
        return (h("div", { class: "gradient-box", ref: el => (this.gradientBox = el), style: {
                "--from": this.from,
                "--to": this.to,
                "--deg": this.direction + "deg"
            } }, h("div", { class: "gradient" }), h("div", { class: "gradient-info" }, h("b", null, h("span", null, this.from), " ", h("span", null, this.to)), h("b", { onClick: () => (!this.copied ? this.copyCss() : null) }, this.copied ? "copied" : "copy css")), h("input", { ref: el => (this.inputEl = el), value: ` background-image: linear-gradient(${this.direction +
                "deg"},${this.from} 0%,${this.to} 100%);` })));
    }
    static get style() { return "div.gradient-box {\n  width: var(--width, 25em);\n  height: var(--height, 25em);\n  background-color: white;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: column;\n  flex-flow: column;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n  border-radius: 1em;\n  -webkit-box-shadow: 0px 0px 23px -8px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0px 0px 23px -8px rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 0px 23px -8px rgba(0, 0, 0, 0.2);\n  -webkit-transition: -webkit-box-shadow 100ms ease-in;\n  transition: -webkit-box-shadow 100ms ease-in;\n  transition: box-shadow 100ms ease-in;\n  transition: box-shadow 100ms ease-in, -webkit-box-shadow 100ms ease-in;\n}\ndiv.gradient-box div.gradient {\n  width: 80%;\n  height: 80%;\n  margin-top: 20px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(var(--deg)), color-stop(0%, var(--from)), to(var(--to)));\n  background-image: linear-gradient(var(--deg), var(--from) 0%, var(--to) 100%);\n  border-radius: 50%;\n}\ndiv.gradient-box div.gradient-info {\n  justify-self: flex-end;\n  margin: 10px auto auto;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  width: 100%;\n  -ms-flex-pack: distribute;\n  justify-content: space-around;\n}\ndiv.gradient-box div.gradient-info b:nth-child(1) {\n  font-family: sans-serif;\n  font-style: italic;\n}\ndiv.gradient-box div.gradient-info b:nth-child(2) {\n  background-color: var(--to);\n  padding: 2px 5px;\n  border-radius: 2px;\n  font-family: sans-serif;\n  font-style: italic;\n  color: white;\n  cursor: pointer;\n}\ndiv.gradient-box input {\n  width: 90%;\n  border: none !important;\n  font-size: 0.6rem;\n  letter-spacing: 0.04rem;\n  margin-bottom: 10px;\n}\n\ndiv.gradient-box:hover {\n  -webkit-box-shadow: 0px 0px 35px -15px #403f40;\n  -moz-box-shadow: 0px 0px 35px -15px #403f40;\n  box-shadow: 0px 0px 35px -15px #403f40;\n}"; }
}

export { GradientBox as gradient_box };
