import { Sprite } from './sprite';

export class SpriteImporter {
    sprites: Sprite [] = [];
    private nextLabel = '';
    private spriteTextValues: string [] = [];

    public import(text: string): Sprite [] {
        const lines = text.split(/\n/);

        lines.forEach(element => {
            this.parse(element);
        });
        return this.sprites;
    }

    private parse(line: string): Sprite [] {
        line = line.toLocaleLowerCase();
        if (line.trim().length === 0) {
            return;
        }
        if (line.indexOf('.byte') === -1) {
            this.nextLabel = line;
        } else {
            this.spriteTextValues.push(line);
            if (this.spriteTextValues.length == 16) {
                this.addProcessedSprite();
            }
        }
        return this.sprites;
    }

    /**
     * Takes the optional label and the 16 string rows and parses them into sprites
     */
    private addProcessedSprite() {
        const res = new Sprite();
        res.label = this.nextLabel;
        res.words = [];
        for (let i = 0; i < 16; i++) {
            res.words.push(this.processByteRow(this.spriteTextValues[i]));
        }
        this.sprites.push(res);

        // reset for the next sprite
        this.nextLabel = '';
        this.spriteTextValues = [];
    }

    private processByteRow(line: string) {
        line = line.replace('.byte', '').trim();
        const indexOfComment = line.indexOf(';');
        if (indexOfComment !== -1) {
            line = line.substring(0, indexOfComment);
        }
        line = line.replace(/%/g, '').trim();
        const parts = line.split(/,/);
        const highByte = parseInt(parts[0].trim(), 2);
        const lowByte = parseInt(parts[1].trim(), 2);
        return (highByte & 0xff) << 8 | (lowByte & 0xff);
    }

}