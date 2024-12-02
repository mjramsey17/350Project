'use server';
import { z } from 'zod';
 
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
}
