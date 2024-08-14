function countWordOccurrences(text) {
    const wordCounts = {};
    const words = text.split(' ');
  
    words.forEach(word => {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
    });
  
    return wordCounts;
  }
  