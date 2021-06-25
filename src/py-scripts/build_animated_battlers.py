import os

import sys
sys.path.append("./")

from utils import (
    get_os_separator
)


def create_battler(dirpath, dirnames, filename):
    sub_folder = dirpath.split(get_os_separator())[-1]

    front = "front" in sub_folder
    shiny = "shiny" in sub_folder

    name = filename.replace('.png', "")

    name += "_front" if front else "_back"

    name += "_shiny" if shiny else ""

    return f"\t'{name}': require('./{sub_folder}/{filename}'),\n"

def main():

    dir = os.getcwd().replace("py-scripts", "") + "new-assets" + get_os_separator() + "animated-battlers"

    text = ""

    text += f"let images: any = {{\n"

    for (dirpath, dirnames, filenames) in os.walk(dir):
        for filename in filenames:
            if '.png' in filename:
                text += create_battler(dirpath, dirnames, filename)

    text += f"}}\n\n"

    text += f"export default function animatedImages() {{\n"
    text += f"\treturn images\n"
    text += f"}}\n\n"

    f = open("AnimatedBattlers.tsx", "w")
    f.write(text)
    f.close()

if __name__ == "__main__":
    main()