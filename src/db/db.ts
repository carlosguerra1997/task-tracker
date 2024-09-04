import { JSONFilePreset } from 'lowdb/node'

import { DbData } from '../types'

export async function initializeDb () {
    const DEFAULT_DATA: DbData = { tasks: [] }
    const db = await JSONFilePreset('./src/data/db.json', DEFAULT_DATA)

    return db
}