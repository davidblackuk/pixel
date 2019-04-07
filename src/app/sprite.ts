export  class Sprite {
    words: number [];
    label: string;
    id: number;

    constructor() {

    }

    public toString() {
        var res = '';

        this.words.forEach(word => {

            // add the comment
            let hi = ((word >> 8) & 0xff).toString(2).padStart(8, '0');
            let lo = (word & 0xff).toString(2).padStart(8, '0');

            res += `    .byte %${hi}, %${lo}    `;

            const comment = word
                .toString(2)
                .padStart(16, '0')
                .replace(/0/g, '.')
                .replace(/1/g, '#');
            res = `${res} ; ${comment}`;
            res += '\n';
        });

        return res;
    }

    /*
     * This is the preview in the sprite picker window
    */
    public get preview() {
        const res: string [] = [];
        this.words.forEach(word => {
            const row = word
                .toString(2)
                .padStart(16, '0')
                .replace(/0/g, '\u2B1C')
                .replace(/1/g, '\u2B1B');
            res.push(row);
            });
        return res;
    }
}

