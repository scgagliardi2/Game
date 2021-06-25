import os

import sys
sys.path.append("./")

from utils import (
    get_os_separator
)

def main():

    dir = os.getcwd().replace("py-scripts", "") + "new-code" + get_os_separator() + "graphics" + get_os_separator()

    a = 'pokemon'

    dir += pokemon

    for (dirpath, dirnames, filenames) in os.walk(dir):

        for filename in filenames:
            if '.png' not in filename:
                print(dirpath + filename)
                os.remove(dirpath + get_os_separator() + filename)

if __name__ == "__main__":
    main()