export class SpriteShifter {

    public up(words: number[]): number[] {
        const res: number [] = [];
        for (let i = 1; i < 16; i++) {
            res.push(words[i]);
        }
        res.push(0);
        return res;
    }

    public down(words: number[]): number[] {
        const res = [];
        res.push(0);
        for (let i = 0; i < 15; i++) {
            res.push(words[i]);
        }
        return res;
    }

    public left(words: number[]): number[] {
        const res = [];
        for (let i = 0; i < 16; i++) {
            let row = words[i];
            row = (row << 1) & 0xffff;
            res.push(row);
        }
        return res;
    }

    public right(words: number[]): number[] {
        const res = [];
        for (let i = 0; i < 16; i++) {
            let row = words[i];
            row = (row >> 1) & 0xffff;
            res.push(row);
        }
        return res;
    }

}
