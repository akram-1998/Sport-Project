import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch): any {


    let V = ["a", "y", "e", "o", "u", "i"];
    let x;

    let result = "";


    for (let i = 0; i < ch.length; i++) {

      x = ch[i];

      for (let j = 0; j < V.length; j++) {

        if (ch[i] == V[j]) {

          x = "*";

          break;
        }

      }


      result = result + x;
    }

    return(result);
  }
}


