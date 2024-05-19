import { BinaryLike, KeyObject } from 'crypto';

export async function GET() {
    const API_SECRET:BinaryLike | KeyObject = process.env.COINBASE_API_SECRET as string;
    const BASE_URL = 'https://api.coinbase.com';
    //const privateKey = forge.pki.privateKeyFromPem(API_SECRET);

    try {
      console.log("starting API call...")
        const response = await fetch(`${BASE_URL}/checkouts`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'API-Key': process.env.NEXT_PUBLIC_COINBASE_API_KEY as string,
          },
        });
        console.log("..await")
        console.log(await response)
       //const data = await response.json()
    
        return Response.json({ message: "hello!" })
      } catch (error:any) {
        return Response.json({ error: error.message })
      }
}