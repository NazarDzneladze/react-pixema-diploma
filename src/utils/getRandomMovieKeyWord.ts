export const getRandomMovieKeyWord = (): string => {
  const keyWordMovieList = [
    "knight",
    "kidnapping",
    "book",
    "fun",
    "death",
    "harry potter",
    "indiana jones",
    "dream",
    "forest",
    "animal",
    "gun",
    "heist",
    "jazz",
    "lie",
    "magic",
    "noir",
    "race",
  ];

  return keyWordMovieList[Math.floor(Math.random() * keyWordMovieList.length)];
};
