import { memo } from "react";
import { makeStyles } from "@mui/styles";
import { PresetData } from "../../utils/CommonInterface";
import { Fonts } from "../../utils/CommonStyle";

const PresetContent = (props: { presetData: PresetData }) => {
  const classes = PresetContentStyles();

  return (
    <div className={`${classes.albumCoverContainer}`}>
      <div className={classes.albumCoverImg}>
        <img src={props.presetData.thumbnailURL} alt="preset-img"></img>
      </div>
      <p className={classes.albumCoverTitle}>{props.presetData.title}</p>
    </div>
  );
};

const PresetContentStyles = makeStyles({
  albumCoverContainer: {
    marginBottom: "42px",
  },
  albumCoverImg: {
    width: "200px",
    height: "200px",
    backgroundColor: "red",
    marginBottom: "8px",
  },

  albumCoverTitle: {
    fontSize: "20px",
    fontFamily: `${Fonts.DEFAULT}`,
  },
});

export default memo(PresetContent);
