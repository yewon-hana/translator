from transformers import pipeline

# facebook/m2m100_418M2
translator = pipeline("translation", model = "facebook/m2m100_418M")

sentimental = pipeline(
    "sentiment-analysis", model= "nlptown/bert-base-multilingual-uncased-sentiment"
)

@staticmethod
def translator_v1(input):
    translated = translator(input, src_lang="en", tgt_lang="ko")
    return translated

@staticmethod
def evaluate_v1(input):
    result = sentimental(input)
    return result
