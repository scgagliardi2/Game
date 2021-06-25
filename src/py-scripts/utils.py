import os
import platform

def get_os_separator() -> str:
    if (platform.system() == 'Windows'):
        return "\\"
    else:
        return "/"    

def get_depth(directory, parent) -> str :
    depth = len(directory.replace(parent, "").split(get_os_separator())) + 1

    depthString = ""
    for x in range(depth):
        depthString += "../"

    return depthString    
       