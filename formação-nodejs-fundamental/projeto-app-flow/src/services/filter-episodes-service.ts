import { repositoryPodcasts } from "../repositories/podcasts-repository"


export const    serviceFilterEpisodes = async (podcastName: string) => {
    const data = await repositoryPodcasts(podcastName);

    return data;
}