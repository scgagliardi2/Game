import platform

def get_os_separator() -> str:
    if (platform.system() == 'Windows'):
        return "\\"
    else:
        return "/"    
