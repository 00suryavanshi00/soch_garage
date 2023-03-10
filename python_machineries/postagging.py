import nltk
# from nltk.tokenize import PunktSentenceTokenizer
from nltk.corpus import state_union, stopwords
from nltk.stem import PorterStemmer

sentence = "This is an example showing runner off stop word filteration. This is another example2 showing off stop word filteration again."
# custom_tokenizer = PunktSentenceTokenizer()
# print(PunktSentenceTokenizer._tokenize_words(sentence))
sentence_token = nltk.sent_tokenize(sentence)
stop_words = stopwords.words("english")
# tokenized = nltk.word_tokenize(sentence)
ps = PorterStemmer()
poststemmed = []
# newtokens = [w for w in tokenized if w not in stop_words]

for sent in sentence_token:
    word_token = nltk.word_tokenize(sent)
    tagged = nltk.pos_tag(word_token)
    chunkgram = r"""Chunk: {<RB.?>*<VB.?>*<NNP><NN>?}"""
    chunkparser = nltk.RegexpParser(chunkgram)
    chunked = chunkparser.parse(tagged)
    chunked.draw()

# tagged = nltk.pos_tag(newtokens)
# anothertagged = nltk.pos_tag(poststemmed)
# print(tagged)
# print(anothertagged)



# chunk grammer here

# chunkgram = r"""Chunk: {<RB.?>*<VB.?>*<NNP><NN>?}"""
# chunkparser = nltk.RegexpParser(chunkgram)
# chunked = chunkparser.parse(tagged)
# print(chunked)

