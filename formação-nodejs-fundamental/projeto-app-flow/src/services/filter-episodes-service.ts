import { IncomingMessage } from "http";
import { repositoryPodcasts } from "../repositories/podcasts-repository"


export const    serviceFilterEpisodes = async (podcastName: string | undefined) => {

    const querryString = podcastName?.split("?")[1] ?? "";

    const data = await repositoryPodcasts(querryString);

    return data;
}