import { getFormValidation } from "./getFormValidation";
import { checkIsFavorite } from "./checkIsFavorite";
import { getRandomRating } from "./getRandomRating";
import { getRandomMovieKeyWord } from "./getRandomMovieKeyWord";
import { getUserInitials } from "./getUserInitials";
import { getFirebaseErrorMessage } from "./getFirebaseError";
import { FirebaseErrorCode } from "./getFirebaseError";
import { FirebaseErrorMessage } from "./getFirebaseError";

export {
  FirebaseErrorMessage,
  getUserInitials,
  getFormValidation,
  checkIsFavorite,
  getRandomRating,
  getRandomMovieKeyWord,
  getFirebaseErrorMessage,
};
export type { FirebaseErrorCode };
