import os 

from .utils import get_os_separator

def build_all_textures(all_textures):

    all_t_text = "import TextureModel from \"./TextureModel\"\n"

    for index, path, data, name, hash in all_textures:
        path = path.replace(os.getcwd(), ".").replace("\\", "/")

        all_t_text += f"import {name} from '{path}/{name}'\n"

    all_t_text += "\nexport let textures = new Map<string, TextureModel>()\n\n"
    all_t_text += "\nexport let names = new Map<string, string>()\n\n"

    for index, path, data, name, hash in all_textures:
        path = path.replace(os.getcwd(), ".").replace("\\", "/")

        if index != 0:
            all_t_text += "\n\n"

        all_t_text += f"textures.set('{hash}', {{\n"

        all_t_text += f"\tid: '{hash}',\n"
        all_t_text += f"\ttype: '{data['type']}',\n"
        all_t_text += f"\twidth: {data['width'] if 'width' in data else 1},\n"
        all_t_text += f"\theight: {data['height'] if 'width' in data else 1},\n"
        all_t_text += f"\tsource: require('{path}/texture.png'),\n"
        all_t_text += f"\tclass: {name}\n"

        all_t_text += "})\n"

        all_t_text += f"names.set('{name}', '{hash}')"

    all_t_text += "\nexport default { textures: textures }"

    f = open(os.getcwd() + get_os_separator() + "textures.tsx", "w")
    f.write(all_t_text)
    f.close()

