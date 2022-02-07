import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import { SoundSample } from "./types";

const LaunchPadButtonStyles = makeStyles({
  root: {},
  btn: {
    background: "blue",
    width: "100px",
    height: "100px",

    "&:active": {
      background: "skyblue",
    },
  },
});

export function LaunchPadButton({
  soundSampleURL,
  buttonType,
  soundType,
}: Omit<SoundSample, "location" | "soundSampleId">) {
  const [sound, setSound] = useState<HTMLAudioElement | "empty">("empty");

  useEffect(() => {
    if (soundSampleURL === null) {
      //URL없을경우 에러컨트롤
      setSound("empty");
    } else {
      const getSound = new Audio(soundSampleURL);
      setSound(getSound);
    }
  }, []);

  const handleSoundPlay = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (sound === "empty") {
      console.log("음악이 없음");
      return;
    }
    console.log(sound);
    sound.play();
  };

  const handleSoundStop = (
    evt: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (sound === "empty") {
      console.log("음악이 없음");
      return;
    }
    sound.pause();
    sound.currentTime = 0;
  };

  const classes = LaunchPadButtonStyles();

  return (
    <div className={classes.root}>
      <div
        className={classes.btn}
        onMouseDown={(evt) => handleSoundPlay(evt)}
        onMouseUp={(evt) => handleSoundStop(evt)}
      >
        {soundType}
        {buttonType === "ONESHOT" ? <ArrowRightAltIcon /> : <AutorenewIcon />}
      </div>
    </div>
  );
}

export default LaunchPadButton;
