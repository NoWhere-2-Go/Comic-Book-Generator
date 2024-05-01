import { PrismaClient } from '@prisma/client'
import exp from 'constants';

const prisma = new PrismaClient()

export async function getSpiders() {
    const allSpiders = await prisma.spider_People.findMany()
    let temp:string[] = []
    allSpiders.forEach(el => {
      temp.push(el.Alias)
    });
    return temp
  }

export async function getVillains() {
  const allVillains = await prisma.villain.findMany()
  let temp:string[] = []
  allVillains.forEach(el => {
    temp.push(el.Cname)
  });
  return temp
}

export async function getNPCs() {
  const allNPCs = await prisma.loved_One.findMany()
  let temp:string[] = []
  allNPCs.forEach(el => {
    temp.push(el.Cname)
  });
  return temp
}