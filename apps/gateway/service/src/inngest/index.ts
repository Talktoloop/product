import { transcribeCall } from "./functions/transcribe";
import { translateAndSave } from "./functions/translate-and-save";

export const functions = [translateAndSave, transcribeCall];