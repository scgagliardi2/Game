import os 
import platform
import json

def main():
    for (dirpath, dirnames, filenames) in os.walk(os.getcwd()):
        # remove old exporters
        for filename in filenames:
            if ".tsx" in filename:
                os.remove(dirpath + get_os_separator() + filename)

        # only write exports for the image folders
        if "txt.json" in filenames:
            write_exporter(dirpath, filenames)  


def write_exporter(directory, filenames):
    depth = len(directory.replace(os.getcwd(), "").split(get_os_separator()))

    depthString = ""
    for x in range(depth):
        depthString += "../"

    name = os.path.basename(directory)

    data = json.load(open(directory + get_os_separator() + "txt.json"))
    type = data['type']
    hasTransitions = 'transitions' in data and len(data['transitions']) > 0

    tilePaths = []

    for filename in filenames:
        if ".png" in filename:
            tilePaths.append(f"./{filename}")

    text: str = ""

    text = build_header(
        depthString, 
        name, 
        type,
        hasTransitions
    )

    text += build_constructor(
        hasTransitions,
        data,
        tilePaths
    )

    text += "}\n"

    f = open(directory + get_os_separator() + name + ".tsx", "w")
    f.write(text)
    f.close()


def build_header(depthString, name, type, hasTransitions):
    text = ""
    
    # imports
    if type == 'character':
        text += f"import Character from \"{depthString}components/world/textures/Character\"\n"
        text += f"import CharacterTile from \"{depthString}components/world/tiles/CharacterTile\"\n"
        text += f"import MoveSet from \"{depthString}components/world/textures/MoveSet\"\n"
    else:
        text += f"import Texture, {{ TextureLevel }} from \"{depthString}components/world/textures/Texture\"\n"
        text += f"import Tile from \"{depthString}components/world/tiles/Tile\"\n"

    if (hasTransitions):
        text += f"import TransitionTile from \"{depthString}components/world/tiles/TransitionTile\"\n"

    text += "\n"

    # class header
    if type == 'character':
        text += f"export default class {name} extends Character {{\n"
    else:
        text += f"export default class {name} extends Texture {{\n"

    return text + "\n"


def build_constructor(hasTransitions, data, tilePaths):
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

        transitionArgs = ""
        transitionIndexes = []

        if hasTransitions:
            transitions = data['transitions']

            for x in range(len(transitions)):
                transitionArgs += f", transition_{x + 1}: () => any"

                transition = transitions[x]

                transitionIndexes.append(transition[0] * width + transition[1])

        walkableIndexes = []

        if "walkable" in data:
            walkables = data['walkable']

            for x in range(len(walkables)):
                walkable = walkables[x]

                walkableIndexes.append(walkable[0] * width + walkable[1])

        text += f"\tconstructor(xpos: number, ypos: number, level: TextureLevel{transitionArgs}) {{\n"

        tiles = "[\n"

        index = 0
        transitionIndex = 0

        for r in range(height):
            tiles += "\t\t\t[\n"

            for c in range(width):
                if index in transitionIndexes:
                    tiles += f"\t\t\t\tnew TransitionTile(require('{tilePaths[index]}'), transition_{transitionIndex + 1})"

                    transitionIndex += 1
                else:
                    canWalkOn = 'true' if index in walkableIndexes else 'false'
                    tiles += f"\t\t\t\tnew Tile(require('{tilePaths[index]}'), {canWalkOn})"

                if c != width - 1:
                    tiles += ","

                tiles += "\n"

                index += 1

            tiles += "\t\t\t]"

            if r != height - 1:
                tiles += ","

            tiles += "\n"

        tiles += "\t\t]"

        text += f"\t\tsuper(xpos, ypos, level, {tiles})\n"   


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