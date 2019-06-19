import { Component, h, State } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss",
  shadow: true
})
export class AppHome {
  @State() gradients: Array<any> = [];
  @State() pagination: number = 1000;

  componentWillLoad() {
    for (let index = 0; index < this.pagination; index++) {
      this.gradients = [
        ...this.gradients,
        { from: this.randomHex(), to: this.randomHex() }
      ];
    }
  }

  randomHex(): string {
    const hexMax = 256 * 256 * 256;
    return (
      "#" +
      Math.floor(Math.random() * hexMax)
        .toString(16)
        .toUpperCase()
        .padStart(6, "0")
    );
  }
  render() {
    return (
      <div class="app-home">
        {this.gradients.map(gradient => (
          <gradient-box from={gradient.from} to={gradient.to} />
        ))}
      </div>
    );
  }
}
