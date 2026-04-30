/**
 * Returns the intermediate-language hops for a (source → target) pair.
 * Identical to `src/translate/utils/hop.ts` in the legacy repo.
 */
function hopsIterator(originalTextLang, target, hopsConfig) {
  if (!hopsConfig) return [];
  const match = hopsConfig.find(
    (element) => element.source === originalTextLang && element.target === target,
  );
  return (match && match.hops) || [];
}

module.exports = { hopsIterator };
