import { PodcastModel } from "./podcast-model";

export interface PodCastTransferModel {
    statusCode: number,
    body: PodcastModel[]
}