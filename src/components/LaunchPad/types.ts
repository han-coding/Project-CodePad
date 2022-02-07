export enum LaunchPadScale {
  DEFAULT = 64,
  MINI = 16,
}

export type OneShotSoundType = "FX" | "DRUM" | "PERC" | "VOCAL";
export type LoopSoundType = "SYNTH" | "DRUMS" | "MELODIC" | "VOCAL" | "CHORD";
export type SoundSampleLocation = {
  x: number;
  y: number;
};

export interface SoundSample {
  location: SoundSampleLocation;
  soundSampleId: string | null;
  soundSampleURL: string | null;
  buttonType: "ONESHOT" | "LOOP" | null;
  soundType: OneShotSoundType | LoopSoundType | null;
}
export interface Preset {
  presetTitle: string | null;
  presetId: string | null;
  areaSize: LaunchPadScale;
  soundSamples: Array<SoundSample>;
}
