import type { PageServerLoad } from './$types';
import { getNPCs, getSpiders, getVillains } from "../queries";

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async () => {
    const spiders = await getSpiders();
    const villains = await getVillains();
    const npcs = await getNPCs();
  
    // Return the data object with the spiders
    return {
      spiders: spiders,
      villains: villains,
      NPCs: npcs
    };
  };