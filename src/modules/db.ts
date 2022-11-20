import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({ datasources: {  db: { url: "postgres://changelog_api_user:hODYHBaMJHPt56EJdnJfRUjYsksJYPOj@dpg-cdrai92en0hgm2vafkf0-a.frankfurt-postgres.render.com/changelog_api" } } });

export default prisma;