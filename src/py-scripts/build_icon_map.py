import os

import sys
sys.path.append("./")

from utils import (
    get_os_separator
)

def main():

    dir = os.getcwd().replace("py-scripts", "") + "new-code" + get_os_separator() + "graphics" + get_os_separator()

    a = 'items'

    dir += a

    text = ""

    text += f"export let {a}_icons = new Map<string, any>()\n\n"

    for (dirpath, dirnames, filenames) in os.walk(dir):

        for filename in filenames:
            if '.png' in filename:
                name = filename.replace('.png', '').replace(' ', '_')

                text += f"{a}_icons.set('{name}', require('./{a}/{name}.png'))\n"

    f = open(f"{a}_icons.tsx", "w")
    f.write(text)
    f.close()

if __name__ == "__main__":
    main()