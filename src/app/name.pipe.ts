import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(
    array: any,
    gender: string = '',
    minimumAge: number = 0,
    locationShouldBe: string = '',
  ) {

    let filteredArray = array
      .filter((item: any) => item.gender.toLowerCase() === gender.toLowerCase())
      .filter((item: any) => item.age <= minimumAge)
      .filter((item: any) => item.location.toLowerCase() === locationShouldBe.toLowerCase())
    return filteredArray;
  }

}
