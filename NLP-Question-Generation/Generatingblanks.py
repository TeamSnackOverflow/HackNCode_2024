import yake
from summarizer import Summarizer
from keybert import KeyBERT
from nltk.tokenize import sent_tokenize
from flashtext import KeywordProcessor

def bert_summ(full_text) :
  model = Summarizer()
  result = model(full_text, min_length=60, max_length = 1000 , ratio = 0.4)
  summarized_text = ''.join(result)
  return summarized_text

def keyword_selection(text) :
  kw_extractor = yake.KeywordExtractor()
  keywords_yake = kw_extractor.extract_keywords(text)
  kw_model = KeyBERT()
  keywords_bert = kw_model.extract_keywords(text)
  keywords_yake_l = [i[0] for i in keywords_yake]
  keywords_bert_l = [i[0] for i in keywords_bert]
  keywords = keywords_yake_l + keywords_bert_l 
  return keywords

class SentenceMapping :
  def tokenize_sentences(text):
      sentences = [sent_tokenize(text)]
      sentences = [y for x in sentences for y in x]
      # Remove any short sentences less than 20 letters.
      sentences = [sentence.strip() for sentence in sentences if len(sentence) > 20]
      return sentences
      
  def get_sentences_for_keyword(keywords, sentences):
      keyword_processor = KeywordProcessor()
      keyword_sentences = {}
      for word in keywords:
          keyword_sentences[word] = []
          keyword_processor.add_keyword(word)
      for sentence in sentences:
          keywords_found = keyword_processor.extract_keywords(sentence)
          for key in keywords_found:
              keyword_sentences[key].append(sentence)
      for key in keyword_sentences.keys():
              values = keyword_sentences[key]
              values = sorted(values, key=len, reverse=True)
              keyword_sentences[key] = values
      a1 = []
      for x, y in keyword_sentences.items():
        if len(y) == 0 :
          a1.append(x)
        elif len(y) > 5 :
          a1.append(x)

      for i in a1 :
        del keyword_sentences[i]
      return keyword_sentences