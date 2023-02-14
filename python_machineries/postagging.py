import nltk
from nltk.tokenize import PunktSentenceTokenizer
from nltk.corpus import state_union, stopwords
from nltk.stem import PorterStemmer

sentence = "This is an example showing off stop word filteration."
custom_tokenizer = PunktSentenceTokenizer()
# print(PunktSentenceTokenizer._tokenize_words(sentence))
stop_words = stopwords.words("english")
tokenized = nltk.word_tokenize(sentence)
ps = PorterStemmer()
poststemmed = []
newtokens = [w for w in tokenized if w not in stop_words]

for i in newtokens:
    poststemmed.append(ps.stem(i))

tagged = nltk.pos_tag(newtokens)
anothertagged = nltk.pos_tag(poststemmed)
print(tagged)
print(anothertagged)