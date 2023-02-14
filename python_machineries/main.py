from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
sentence = "This is an example showing off stop word filteration."
# print(word_tokenize(sentence))
# print("----------------------------------")
# print(sent_tokenize(sentence))

stop_words = set(stopwords.words("english"))
filtered_bunch = []
arr = word_tokenize(sentence)
# for i in arr:
#     if i not in stop_words:
#         filtered_bunch.append(i)
#
filtered_bunch = [w for w in arr if w not in stop_words]
print(filtered_bunch)
