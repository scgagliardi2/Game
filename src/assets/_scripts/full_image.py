from PIL import Image
import hashlib

from .utils import get_os_separator

def create_texture_image(path, filenames, data):
    # get all the pngs (we assume they are ordered)
    images = []

    for filename in filenames:
        if ".png" in filename and filename != "texture.png":
            images.append(Image.open(path + get_os_separator() + filename))

    # get the image size (assume they are all the same sized squares)
    size = images[0].size[0]

    # characters have the whole movement set
    # otherwise use the passed data values
    width = 4 if data['type'] == 'character' else data["width"]
    height = 4 if data['type'] == 'character' else data["height"]

    # create a new image
    new_im = Image.new('RGBA', (width * size, height * size))
    
    # insert 'empty' images in the correct location
    if data['type'] != 'character':
        if "empty" in data:
            emptys = data['empty']

            for x in range(len(emptys)):
                empty = emptys[x]

                images.insert(width * empty[0] + empty[1], Image.new("RGBA", (size, size)))

    x = 0
    y = 0

    # stitch the images together
    for image in images:
        new_im.paste(image, (x,y))

        x += size

        if x == width * size:
            x = 0
            y += size

    # save the result
    new_im.save(path + get_os_separator() + 'texture.png')

    return new_im

def hash_image(img) -> str:
    # resize for faster computation
    img.resize((10, 10), Image.ANTIALIAS)

    # just deal with black/white for consistent resutls
    img = img.convert("L")

    # list of all lighting values
    pixel_data = list(img.getdata())

    # get the average value
    avg_pixel = sum(pixel_data) / len(pixel_data)

    # convert lighting value to a 1 or 0 (again for consistency)
    bits = "".join(['1' if (px >= avg_pixel) else '0' for px in pixel_data])

    # hash the 'bits'
    m = hashlib.sha256()
    m.update(bits.encode('utf-8'))

    return m.hexdigest()