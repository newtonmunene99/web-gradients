import { Component, h, Prop, State } from "@stencil/core";

@Component({
  tag: "gradient-box",
  styleUrl: "gradient-box.scss",
  shadow: true
})
export class GradientBox {
  @Prop() from: string;
  @Prop() to: string;
  direction: number;
  gradientBox!: HTMLDivElement;
  inputEl!: HTMLInputElement;
  @State() copied: boolean = false;
  componentWillLoad() {
    this.direction = this.getRandomInt();
  }
  componentDidLoad() {
    this.gradientBox.onmouseleave = () => {
      if (this.copied) this.copied = false;
    };
  }
  getRandomInt(min: number = -360, max: number = 360): number {
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
    return (
      <div
        class="gradient-box"
        ref={el => (this.gradientBox = el as HTMLDivElement)}
        style={{
          "--from": this.from,
          "--to": this.to,
          "--deg": this.direction + "deg"
        }}
      >
        <div class="gradient" />
        <div class="gradient-info">
          <b>
            <span>{this.from}</span> <span>{this.to}</span>
          </b>
          <b onClick={() => (!this.copied ? this.copyCss() : null)}>
            {this.copied ? "copied" : "copy css"}
          </b>
        </div>
        <input
          ref={el => (this.inputEl = el as HTMLInputElement)}
          value={` background-image: linear-gradient(${this.direction +
            "deg"},${this.from} 0%,${this.to} 100%);`}
        />
      </div>
    );
  }
}
