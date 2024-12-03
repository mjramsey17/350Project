'use server';
import { z } from 'zod';
import {sql} from '@vercel/postgres';
import { revalidatePath} from 'next/cache';
import {redirect} from 'next/navigation';
const FormSchema = z.object({
  EventId: z.coerce.number(),
  GameId: z.coerce.numer(),
  Time: z.coerce.number(),
  Team:z.BinaryData,
  Type: z.string(),
  PlayerId: z.coerce.number()
});
 
const CreateEvent = FormSchema.omit({ EventId:true });
export async function createEvent(formData:FormData){
    const { GameId, Time, Type,Team,PlayerId} = CreateEvent.parse({
        EventId: formData.get('EventId'),
        GameId: formData.get('GameId'),
        Time: formData.get('Time'),
        Type: formData.get('Type'),
        Team: formData.get('Team'),
        PlayerId: formData.get('PlayerId')
    });
    
    await sql`
        INSERT INTO Events (GameId, Time, Type,Team,PlayerId)
        VALUES ( ${GameId}, ${Time}, ${Type},${Team},${PlayerId})
    `;
    revalidatePath('/app/events');
    redirect('/app/events');
}

