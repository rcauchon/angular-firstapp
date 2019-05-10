import { TestBed, async } from '@angular/core/testing';
import { StripVowelPipe } from './stripVowelPipe';

describe('StripVowelPipe', () => {
    it('create an instance', () => {
        const pipe = new StripVowelPipe();
        expect(pipe).toBeTruthy();
    });

    it('transforms "abcdefg" into "bcdfg', () => {
        const pipe = new StripVowelPipe();
        expect(pipe.transform('abcdefg')).toBe('bcdfg');
    });
});
