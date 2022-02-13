export interface MetronomeParams {
  tempo: number;
  bar: number;
  setBar: React.Dispatch<React.SetStateAction<number>>;
  beat: number;
  setBeat: React.Dispatch<React.SetStateAction<number>>;
}

export const metronome = (params: MetronomeParams, delayTime: number) => {
  const { tempo, bar, beat, setBar, setBeat } = params;
  const intervalTime = (60 / tempo) * 1000;
  let expectedTime = Date.now() + intervalTime;

  const Timer = setTimeout(() => {
    const nextParams: MetronomeParams = {
      ...params,
    };

    const nextDelayTime = Date.now() - expectedTime;

    //delay overFlow시 알림 (약 1시간까지는 뜨지않음)
    if (nextDelayTime > intervalTime) {
      console.log("에러 : 누적된 딜레이가 템포 이상입니다");
    }

    // (4/4)박자 기준으로 재생
    if (beat < 4) {
      nextParams.beat = beat + 1;
      setBeat(nextParams.beat);
    }
    if (beat >= 4) {
      nextParams.beat = 1;
      setBeat(nextParams.beat);

      //4beat시 1bar 올림
      if (bar < 4) {
        nextParams.bar = bar + 1;
        setBar(nextParams.bar);
      }
      if (bar >= 4) {
        nextParams.bar = 1;
        setBar(nextParams.bar);
      }
    }

    //다음 메트로눔 시작
    metronome(nextParams, Math.max(0, intervalTime - nextDelayTime));
  }, intervalTime);
};
