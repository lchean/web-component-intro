import { Component, Host, h, Prop, State, Listen } from '@stencil/core';

export type verticalAlign = 'top' | 'bottom' | 'center'; 
export type horizontalAlign = 'left' | 'right' | 'center'; 

@Component({
  tag: 'my-modal',
  styleUrl: 'my-modal.css',
  shadow: true,
})
export class MyModal {
  @Prop() vAlign: verticalAlign = 'center'; 
  @Prop() hAlign: horizontalAlign = 'center'; 
  @Prop() hasOverlay: boolean = false;
  @Prop() isVisible: boolean = false;

  @State() modalVisible: boolean = this.isVisible;

  @Listen('modalToggled', { target: 'document' })
  modalToggleHandler() {
    this.modalVisible = !this.modalVisible;
  }

  handleClass() {
    let classArr = [`v-${this.vAlign}`, `h-${this.hAlign}`];

    if (this.hasOverlay) {
      classArr = [...classArr, 'has-overlay'];
    }

    if (this.modalVisible) {
      classArr = [...classArr, 'is-visible'];
    }

    return classArr.join(' ');
  } 

  closeModal = () => {
    this.modalVisible = false;
  }

  render() {
    return (
      <Host class={this.handleClass()}>
        <div class="wrapper">
          <my-button type="button" class="close-btn" onClick={this.closeModal}>Close</my-button>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
