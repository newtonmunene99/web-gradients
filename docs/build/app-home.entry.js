import { r as registerInstance, h } from './chunk-2519a93c.js';

class AppHome {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.gradients = [];
        this.pagination = 1000;
    }
    componentWillLoad() {
        for (let index = 0; index < this.pagination; index++) {
            this.gradients = [
                ...this.gradients,
                { from: this.randomHex(), to: this.randomHex() }
            ];
        }
    }
    randomHex() {
        const hexMax = 256 * 256 * 256;
        return ("#" +
            Math.floor(Math.random() * hexMax)
                .toString(16)
                .toUpperCase()
                .padStart(6, "0"));
    }
    render() {
        return (h("div", { class: "app-home" }, this.gradients.map(gradient => (h("gradient-box", { from: gradient.from, to: gradient.to })))));
    }
    static get style() { return ".app-home {\n  padding: 10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-flow: row wrap;\n  flex-flow: row wrap;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  background-color: #f6f6f6;\n}\n.app-home gradient-box {\n  margin: 20px;\n}\n\nbutton {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  -webkit-box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  outline: 0;\n  letter-spacing: 0.04em;\n  -webkit-transition: all 0.15s ease;\n  transition: all 0.15s ease;\n  cursor: pointer;\n}\n\nbutton:hover {\n  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-transform: translateY(1px);\n  transform: translateY(1px);\n}"; }
}

export { AppHome as app_home };
