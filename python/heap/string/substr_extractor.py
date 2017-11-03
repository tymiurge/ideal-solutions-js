    def extract_between(text, before, after):
        return text[text.find(before) + len(before):text.find(after)]
