// src/inngest/helpers/db.ts
import type { DataSource } from 'typeorm';
import dataSourcePromise from '../../config/typeorm';

let initialized = false;
let initPromise: Promise<DataSource> | null = null;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getDataSource(): Promise<DataSource> {
    if (initialized && initPromise) {
        return initPromise;
    }

    if (initPromise) {
        return initPromise;
    }

    initPromise = (async () => {
        const ds = (await dataSourcePromise) as DataSource;

        if (ds.isInitialized) {
            initialized = true;
            return ds;
        }

        const maxAttempts = 20;
        const delayMs = 1000;
        let lastError: unknown;

        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                await ds.initialize();
                initialized = true;
                return ds;
            } catch (err) {
                lastError = err;
                console.error(
                    `[inngest-db] DataSource initialization failed (attempt ${attempt}/${maxAttempts})`,
                    err,
                );

                if (attempt < maxAttempts) {
                    await sleep(delayMs);
                }
            }
        }

        initialized = false;
        initPromise = null;
        throw lastError ?? new Error('[inngest-db] Failed to initialize DataSource after retries');
    })();

    return initPromise;
}