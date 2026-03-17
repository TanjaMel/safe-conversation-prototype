import { intents } from "./intents.js";

export function detectIntent(input) {
  const text = input.toLowerCase().trim();

  if (text === "" || text === "..." || text === "öö" || text === "hmm") {
    return "silence";
  }

  const confusionPhrases = [
    "en ymmärrä",
    "en tiedä",
    "en tiedä mitä sanoa",
    "mistä on kyse",
    "voisitko toistaa",
  ];

  if (confusionPhrases.some((phrase) => text.includes(phrase))) {
    return "confusion";
  }

  if (intents.not_in_mood.some((word) => text.includes(word))) {
    return "not_in_mood";
  }

  if (intents.goodbye.some((word) => text.includes(word))) {
    return "goodbye";
  }

  if (intents.low_mood.some((word) => text.includes(word))) {
    return "low_mood";
  }

  if (intents.loneliness.some((word) => text.includes(word))) {
    return "loneliness";
  }

  if (intents.positive.some((word) => text.includes(word))) {
    return "positive";
  }

  if (intents.neutral.some((word) => text.includes(word))) {
    return "neutral";
  }

  if (intents.greeting.some((word) => text.includes(word))) {
    return "greeting";
  }

  return "neutral";
}