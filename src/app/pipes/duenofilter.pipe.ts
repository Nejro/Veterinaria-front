import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duenofilter'
})
export class DuenofilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg == '' || arg.length < 1)
      return value;
    const resultPosts = [];
    for (const post of value) {
      if (post.nomD.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultPosts.push(post);
      }
    };
    return resultPosts;
  }

}
