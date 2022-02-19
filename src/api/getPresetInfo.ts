import { AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axiosInstance";

export interface PresetParams {
  userId: string;
  presetId?: string;
}

export async function getPresetInfo(presetId: any) {
  const config: AxiosRequestConfig = {
  };
  // const response = await axiosInstance(config).get(
  //   `/launchPad?userId=${params.userId}&PresetId=${params.presetId}`
  // );

  const response = await axiosInstance(config).get(`/presets/${presetId}`)
  console.log(response.data)
  return response.data;
}
