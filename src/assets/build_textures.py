import os

import sys
sys.path.append("./_scripts")

from _scripts import build_all_textures
from _scripts import write_tsx 
from _scripts import get_os_separator


def main():
    all_textures = []

    index = 0
    for (dirpath, dirnames, filenames) in os.walk(os.getcwd()):
        # remove old exporters
        for filename in filenames:
            if ".tsx" in filename and 'TextureModel' not in filename:
                os.remove(dirpath + get_os_separator() + filename)

        # only write exports for the image folders
        if "txt.json" in filenames:
            data, name, hash = write_tsx(dirpath, filenames)
            all_textures.append((index, dirpath, data, name, hash))
            index += 1

    build_all_textures(all_textures)


if __name__ == "__main__":
    main()