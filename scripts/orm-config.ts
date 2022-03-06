import { writeFileSync } from 'fs';
import dbService from 'src/config/db.service';
writeFileSync('ormconfig.json', JSON.stringify(dbService.getConfig));
