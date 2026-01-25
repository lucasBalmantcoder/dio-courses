
import { repositoryPodcasts } from "../repositories/podcasts-repository";

export const servieListEpisodes = async () => {
    const data = await repositoryPodcasts();

    
    return data
}