import { Component, h, Prop, Host } from '@stencil/core';

export type ButtonType = 'submit' | 'button';
export type ButtonShape = 'rounded' | 'squared';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() type: ButtonType = 'submit';
  @Prop() shape: ButtonShape = 'squared';

  render() {
    return (
      <Host class={this.shape}>
        <button type={this.type}>
          <slot></slot>
        </button>
      </Host>
    );
  }

}
