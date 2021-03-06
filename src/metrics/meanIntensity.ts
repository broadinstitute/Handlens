import * as tensorflow from "@tensorflow/tfjs";

export const meanIntensity = async (image: tensorflow.Tensor3D) => {
  return await tensorflow.mean(image).array() as number;
}
