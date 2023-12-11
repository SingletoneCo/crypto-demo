import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cryptocurrency-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgStyle
  ],
  templateUrl: './cryptocurrency-icon.component.html'
})
export class CryptocurrencyIconComponent {

  @Input()
  public set cryptocurrencySymbol(value: string) {
    this.iconSource = "/assets/icons/cryptoicons/" + value.toLowerCase() + ".svg";
  }

  @Input() sizeInRems: number = 1;

  public iconSource: string = '/assets/icons/cryptoicons/generic.svg';

  public fallbackToDefault() {
    this.iconSource = "/assets/icons/cryptoicons/generic.svg";
  }
}
