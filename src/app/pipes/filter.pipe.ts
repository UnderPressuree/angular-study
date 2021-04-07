import { Pipe, PipeTransform } from '@angular/core';
import {Post} from '../app.component'
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(sportPosts: Post[],search: string = '', field: string = 'title'): Post[] {
    if (!search.trim()) {
      return sportPosts
    }
    return sportPosts.filter(posterinho => {
      // @ts-ignore
      return posterinho[field].toLowerCase().includes(search.toLowerCase())
    })
  }

}
