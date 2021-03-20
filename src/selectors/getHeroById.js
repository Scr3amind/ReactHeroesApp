import { heroes } from "../data/heroes";

export const getHeroById = (publisher) => {
    return heroes.filter(hero => hero.id === publisher);
}