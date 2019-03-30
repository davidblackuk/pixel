export  class Sprite {
    words: number [];
    label: string;    

    constructor() {

    }

    public toString() {
        var res = '';
        if (this.label.length > 0) {
            res = `${this.label} \n`;
        }

        this.words.forEach(word => {

            // add the comment

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
}

