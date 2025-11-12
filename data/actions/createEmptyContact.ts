'use server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/db';

export async function createEmptyContact() {
  await prisma.contact.create({
    data: {},
  });

  revalidatePath('/');
}
