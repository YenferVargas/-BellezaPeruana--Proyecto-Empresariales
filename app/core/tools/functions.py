
def generate_token(length=225, exclude=[]):
    if type(exclude) == str:
        exclude = list(exclude)
    exclude += ['"', "'", '\\', '`', ';', ',', ' ', '']
    # Import lyrics, numbers and symbols
    from string import ascii_letters, digits, punctuation
    import random
    
    for e in exclude:
        ascii_letters = ascii_letters.replace(e, '')
        digits = digits.replace(e, '')
        punctuation = punctuation.replace(e, '')
    
    max_length = max(len(ascii_letters), len(digits), len(punctuation))
    ascii_letters = (ascii_letters * (int(max_length // len(ascii_letters) ) + 1))[0:max_length]
    digits = (digits * (int(max_length // len(digits) ) + 1))[0:max_length]
    punctuation = (punctuation * (int(max_length // len(punctuation) ) + 1))[0:max_length]
    
    options = ascii_letters + digits + punctuation
    options = options
    # pln(f'options: {options}')
    
    token = ''
    for _ in range(length):
        token += random.choice(options)
    # pln(token)
    return token
