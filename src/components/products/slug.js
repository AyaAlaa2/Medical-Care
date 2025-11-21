export const slugify = (str = "") =>
  str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-"); // e.g. "Plavix (Clopidogrel)" → "plavix-clopidogrel"