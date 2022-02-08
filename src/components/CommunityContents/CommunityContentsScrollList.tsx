import React from "react";
import { makeStyles } from "@mui/styles";
import PresetContent from "./PresetContent";

import { useDispatch } from "react-redux";
import { useAppSelector } from "../../modules/hooks";
import { actions as getPresetContentDataActions } from "../../modules/actions/presetContentSlice";
import { useEffect, useState } from "react";

export interface PresetContentData {
  presetId: string;
  thumbnailURL: string;
  title: string;
  author: string;
  userId: string;
}

export default function CommunityContentsScrollList(props: { title: string }) {
  const classes = ScrollListStyles();

  const dispatch = useDispatch();
  const state = useAppSelector((state) => state.exampleSlice);

  const [inputData, setInputData] = useState<PresetContentData>({
    presetId: "",
    thumbnailURL: "",
    title: "",
    author: "",
    userId: "",
  });

  const loadTimer = 3000;
  const { presetId, thumbnailURL, title, author, userId } = inputData;

  const handleChangeInputValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  //새 인적사항을 보내기 시작하는 액션. api를 보내는 함수라고 생각하면 된다.
  const getReadyToChangeData = (inputData: PresetContentData) => {
    dispatch(getPresetContentDataActions.getPersonalDataPending(inputData));
  };

  //등록한 인적사항을 반영하는 액션. api 요청에 대한 응답을 여기서 배정한다고 생각하면 된다.
  const loadSuccess = (loadTimer: number) => {
    setTimeout(() => {
      dispatch(getPresetContentDataActions.getPersonalDataFulFilled(inputData));
    }, loadTimer);
  };

  const buttonText = (isLoading: boolean) => {
    switch (isLoading) {
      case true:
        return "로딩중...";

      default:
        return "더 보기";
    }
  };

  return (
    <>
      <header>{props.title}</header>
      <div className={classes.ScrollListContainer}>
        <PresetContent src="" title="test" />
        <PresetContent src="" title="test" />
        <PresetContent src="" title="test" />
        <PresetContent src="" title="test" />
        <PresetContent src="" title="test" />
        <PresetContent src="" title="test" />
        <PresetContent src="" title="test" />
        {buttonText(state.isLoading)}
      </div>
    </>
  );
}

const ScrollListStyles = makeStyles({
  ScrollListContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    PaddingTop: "42px",
    PaddingBottom: "42px",
    textAlign: "center",
    height: `calc(100vh - 176px)`,
    overflow: "auto",

    "&::-webkit-scrollbar": {
      display: "none",
    },
    // "&::-webkit-scrollbar": {
    //   width: "10px",
    // },

    // "&::-webkit-scrollbar-thumb": {
    //   backgroundColor: "#2f3542",
    //   borderRadius: "10px",
    //   backgroundClip: "padding-box",
    //   border: `2px solid transparent`,
    // },
    // "&::-webkit-scrollbar-track": {
    //   backgroundColor: "grey",
    //   borderRadius: "10px",
    //   boxshadow: `inset 0px 0px 5px white`,
    // },
  },
});
