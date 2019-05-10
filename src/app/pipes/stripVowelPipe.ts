import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'stripVowel'
})
export class StripVowelPipe implements PipeTransform{

    transform(value: string) : string {
        if (!value){
            return '';
        }

        var stripped = "";
        for (let i = 0; i< value.length; ++i){
            let chr = value.charAt(i).toLowerCase();
            if (chr === 'a' || chr === 'e' || chr === 'i' || chr === 'o' || chr === 'u'){
                continue;
            }
            else {
                stripped = stripped.concat(chr);
            }
        }
        return stripped;
    }
}
