import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value:any, colors: any): any {

    return colors;
    // if (cityCode  != 'NY')
    // {
    //   return 'Apple City';
    // }
    // else
    // {
    //   return 'Garden City';
    // }
    // return 'City Name:' + city 

    // if(colors)
    // {


    // }    
  }
  
}
