import { z } from 'zod';
import fs from 'fs/promises';

const citySchema = z.object({
  id: z.string(),
  name: z.string(),
  tags: z.array(z.string()),
  innCost: z.number().int(),
  tavernEntry: z.number().int()
});

async function main() {
  const raw = await fs.readFile('data/cities.json', 'utf-8');
  const cities = JSON.parse(raw);
  const parsed = z.array(citySchema).parse(cities);
  console.log(`✔ validated ${parsed.length} cities`);
}

main().catch((e) => {
  console.error('Validation failed', e);
  process.exit(1);
});
