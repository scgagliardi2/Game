export default class TextureLoc {
    X: number
    Y: number
    Height: number
    Width: number
    Source: any

    constructor(x: number, y: number, width: number, height: number, source: any) {
        this.X = x
        this.Y = y
        this.Width = width
        this.Height = height
        this.Source = source
    }
}