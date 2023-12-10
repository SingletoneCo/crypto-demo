import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe, LowerCasePipe, NgIf, NgOptimizedImage, NgStyle } from '@angular/common';
import { catchError, map, Observable, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cryptocurrency-icon',
  standalone: true,
  imports: [
    LowerCasePipe,
    NgStyle,
    NgIf,
    NgOptimizedImage,
    AsyncPipe
  ],
  templateUrl: './cryptocurrency-icon.component.html',
  styleUrl: './cryptocurrency-icon.component.scss'
})
export class CryptocurrencyIconComponent implements OnInit {

  @Input() cryptocurrencySymbol: string = 'generic';
  @Input() sizeInRems: number = 1;

  public iconPath$: Observable<string> = of('');

  constructor(
      private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.iconPath$ = this.getIconPath(this.cryptocurrencySymbol);
  }

  private getIconPath(symbol: string): Observable<string> {
    const iconsFolderPath = 'assets/icons/cryptoicons';
    return this.httpClient.get(`${ iconsFolderPath }/${ symbol.toLocaleLowerCase() }.svg`, { observe: 'response', responseType: 'blob' }).pipe(
        take(1),
        map(_ => {
          return `${ iconsFolderPath }/${ symbol.toLocaleLowerCase() }.svg`
        }),
        catchError(_ => of(`${ iconsFolderPath }/generic.svg`))
    )
  }
}
