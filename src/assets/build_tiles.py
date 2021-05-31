import os 
import platform
import json
from PIL import Image

def main():
    all_textures = []

    index = 0
    for (dirpath, dirnames, filenames) in os.walk(os.getcwd()):
        # remove old exporters
        for filename in filenames:
            if ".tsx" in filename:
                os.remove(dirpath + get_os_separator() + filename)

        # only write exports for the image folders
        if "txt.json" in filenames:
            data, name = write_exporter(dirpath, filenames)
            all_textures.append((index, dirpath, data, name))
            index += 1

    all_t_text = "import TextureModel from \"./TextureModel\"\n\n"

    all_t_text += "let textures = new Map<string, TextureModel>()\n\n"

    for index, path, data, name in all_textures:
        path = path.replace(os.getcwd(), ".").replace("\\", "/")

        if index != 0:
            all_t_text += "\n\n"

        all_t_text += f"textures.set('{name}', {{\n"

        all_t_text += f"\tname: '{name}',\n"
        all_t_text += f"\ttype: '{data['type']}',\n"
        all_t_text += f"\twidth: {data['width'] if 'width' in data else 1},\n"
        all_t_text += f"\theight: {data['height'] if 'width' in data else 1},\n"
        all_t_text += f"\tsource: require('{path}/texture.png')\n"

        all_t_text += "})"

    all_t_text += "\nexport default { textures: textures }"

    f = open(os.getcwd() + get_os_separator() + "textures.tsx", "w")
    f.write(all_t_text)
    f.close()

def write_exporter(directory, filenames):
    depth = len(directory.replace(os.getcwd(), "").split(get_os_separator()))

    filenames.sort()

    depthString = ""
    for x in range(depth):
        depthString += "../"

    name = os.path.basename(directory)

    data = json.load(open(directory + get_os_separator() + "txt.json"))
    type = data['type']

    tilePaths = []

    create_texture_image(directory, filenames, data)

    for filename in filenames:
        if ".png" in filename:
            tilePaths.append(f"./{filename}")

    text: str = ""

    text = build_header(
        depthString, 
        name, 
        type,
        data
    )

    text += build_constructor(
        data,
        tilePaths
    )

    text += "}\n"

    import_path = directory + get_os_separator() + name

    f = open(import_path + ".tsx", "w")
    f.write(text)
    f.close()

    return data, name

def create_texture_image(path, filenames, data):
    images = []

    for filename in filenames:
        if ".png" in filename and filename != "texture.png":
            images.append(Image.open(path + get_os_separator() + filename))


    size = images[0].size[0]

    width = 4 if data['type'] == 'character' else data["width"]
    height = 4 if data['type'] == 'character' else data["height"]

    new_im = Image.new('RGBA', (width * size, height * size))
    
    x = 0
    y = 0

    if data['type'] != 'character':
        if "empty" in data:
            emptys = data['empty']

            for x in range(len(emptys)):
                empty = emptys[x]

                images.insert(width * empty[0] + empty[1], Image.new("RGBA", (size, size)))

   
    for image in images:
        new_im.paste(image, (x,y))

        x += size

        if x == width * size:
            x = 0
            y += size

    new_im.save(path + get_os_separator() + 'texture.png')

def build_header(depthString, name, type, data):
    text = ""
    
    # imports
    if type == 'character':
        text += f"import Character from \"{depthString}game/world/textures/Character\"\n"
        text += f"import CharacterTile from \"{depthString}game/world/tiles/CharacterTile\"\n"
        text += f"import MoveSet from \"{depthString}game/inputs/MoveSet\"\n"
    elif "stretch" in data:
        text += f"import StretchTexture from \"{depthString}game/world/textures/StretchTexture\"\n"
        text += f"import {{ TextureLevel }} from \"{depthString}game/world/textures/Texture\"\n"
        text += f"import Tile from \"{depthString}game/world/tiles/Tile\"\n"
        text += f"import {{ MoveSetType }} from \"{depthString}game/inputs/MoveSet\"\n"

    else:
        text += f"import Texture, {{ TextureLevel }} from \"{depthString}game/world/textures/Texture\"\n"
        text += f"import Tile from \"{depthString}game/world/tiles/Tile\"\n"
        text += f"import {{ MoveSetType }} from \"{depthString}game/inputs/MoveSet\"\n"


    text += "\n"

    # class header
    if type == 'character':
        text += f"export default class {name} extends Character {{\n"
    elif "stretch" in data:
        text += f"export default class {name} extends StretchTexture {{\n"
    else:
        text += f"export default class {name} extends Texture {{\n"

    return text + "\n"

def build_constructor(data, tilePaths):
    text = ""

    if data['type'] == 'character':
        text += f"\tconstructor(xpos: number, ypos: number) {{\n"

        dms = build_moveset(0, tilePaths)
        lms = build_moveset(4, tilePaths)
        rms = build_moveset(8, tilePaths)
        ums = build_moveset(12, tilePaths)

        text += f"\t\tsuper(xpos, ypos,\n{dms} {lms} {rms} {ums}\t\t)\n"   
    else:
        width = data["width"]
        height = data["height"]

        walkOn = {}
        walkOff = {}
        walkDefault = []

        if "walkable" in data:
            walkables = data['walkable']

            walkDefaultBool = walkables["default"]

            if not walkDefaultBool: 
                walkDefault = ["MoveSetType.DOWN", "MoveSetType.LEFT", "MoveSetType.RIGHT", "MoveSetType.UP"]

            if "onChanges" in walkables:
                for walkable in walkables["onChanges"]:
                    index = width * walkable[0] + walkable[1]

                    if len(walkable) < 3:
                        if walkDefaultBool:
                            walkOn[index] = ["MoveSetType.DOWN", "MoveSetType.LEFT", "MoveSetType.RIGHT", "MoveSetType.UP"]
                        else:
                            walkOn[index] = []
                    else:
                        flips = walkable[2]

                        temp = walkDefault.copy()

                        for flip in flips:
                            if walkDefaultBool:
                                temp.append(f"MoveSetType.{flip}")
                            else:
                                temp.remove(f"MoveSetType.{flip}")  

                        walkOn[index] = temp
            
            if "offChanges" in walkables:
                for walkable in walkables["offChanges"]:
                    index = width * walkable[0] + walkable[1]

                    if len(walkable) < 3:
                        if walkDefaultBool:
                            walkOff[index] = ["MoveSetType.DOWN", "MoveSetType.LEFT", "MoveSetType.RIGHT", "MoveSetType.UP"]
                        else:
                            walkOff[index] = []
                    else:
                        flips = walkable[2]

                        temp = walkDefault.copy()

                        for flip in flips:
                            if walkDefaultBool:
                                temp.append(f"MoveSetType.{flip}")
                            else:
                                temp.remove(f"MoveSetType.{flip}")  

                        walkOff[index] = temp

        emptyIndexes = []

        if "empty" in data:
            emptys = data['empty']

            for x in range(len(emptys)):
                empty = emptys[x]

                emptyIndexes.append(f"{empty[0]}, {empty[1]}")

        text += "\tconstructor(xpos: number, ypos: number, level: TextureLevel"

        if "stretch" in data:
            text += ", length: number" 

        text += ") {\n"

        tiles = "[\n"

        index = 0

        for r in range(height):
            tiles += "\t\t\t[\n"

            for c in range(width): 
                key = width * r + c
                on = walkOn[key] if key in walkOn else walkDefault if len(walkDefault) >= 0 else None
                off = walkOff[key] if key in walkOff else walkDefault if len(walkDefault) >= 0 else None

                on_str = ""

                if on is not None:
                    if len(on) == 4:
                        on_str += ", undefined"
                    elif len(on) > 0:
                        on_str += ", ["

                        for i, o in enumerate(on):
                            on_str += o

                            if i < len(on) - 1:
                                on_str += ", "
                        on_str += "]"
                    else:
                        on_str = ", []"
                        
                off_str = ""

                if off is not None:
                    if len(off) == 4:
                        off_str += ", undefined"
                    elif len(off) > 0:
                        off_str += ", ["
            
                        for i, o in enumerate(off):
                            off_str += o

                            if i < len(on) - 1:
                                off_str += ", "
                        off_str += "]"
                    else:
                        off_str = ", []"

                if f"{r}, {c}" not in emptyIndexes:
                    tiles += f"\t\t\t\tnew Tile(require('{tilePaths[index]}'){on_str}{off_str})"

                    index += 1
                else:
                    tiles += f"\t\t\t\tnew Tile(undefined{on_str}{off_str})"

                if c != width - 1:
                    tiles += ","

                tiles += "\n"

            tiles += "\t\t\t]"

            if r != height - 1:
                tiles += ","

            tiles += "\n"

        tiles += "\t\t]"

        text += f"\t\tsuper(xpos, ypos, level, {tiles}"

        if "stretch" in data:
            horizontal = "true" if data["stretch"]["horizontal"] else "false"
            repeatIndex = data["stretch"]["repeatIndex"]

            text += f", {horizontal}, length, {repeatIndex}" 

        text += ")\n"   


    return text + "\t}\n"

def build_moveset(start_index, tilePaths):
    ms = "\t\t\tnew MoveSet([\n"
    ms += f"\t\t\t\tnew CharacterTile(require('{tilePaths[start_index]}')),\n"
    ms += f"\t\t\t\tnew CharacterTile(require('{tilePaths[start_index + 1]}')),\n"
    ms += f"\t\t\t\tnew CharacterTile(require('{tilePaths[start_index + 2]}')),\n"
    ms += f"\t\t\t\tnew CharacterTile(require('{tilePaths[start_index + 3]}'))\n"
    ms += "\t\t\t]),\n"

    return ms

def get_os_separator():
    if (platform.system() == 'Windows'):
        return "\\"
    else:
        return "/"    


if __name__ == "__main__":
    main()