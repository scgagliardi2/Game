import { Sprites } from "../State";
import { Sprite } from "./ISprite";

export const MAX_SPRITES = 64

export interface SpriteFrameImage
{
    data: any
    size: number
};

export function AnimateSprites() {
    let i;
    for (i = 0; i < MAX_SPRITES; i++) {
        var sprite: Sprite = Sprites[i];

        if (sprite.inUse)
        {
            sprite.callback(sprite);

            if (sprite.inUse)
                AnimateSprite(sprite);
        }
    }
}


export function AnimateSprite(sprite: Sprite) {
    // TODO - implement
}