import { Directive, Input } from "@angular/core";

@Directive({
  selector: 'img',
  host: {
    '(error)': 'onError()',
    '[src]': 'src'
  }
})
export class ImgDirective {
  @Input() src: string = '';

  private onError() {

  }
}
