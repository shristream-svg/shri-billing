# SHRI BILLING 1.7.1 source snapshot

Private source backup of the Windows Electron billing application. Contains app code, synthetic unit tests, required branding/fonts, lockfile, and build/dev/isolated smoke scripts. No customer database, invoices, backups, operational credentials, installer, or production-maintenance script is included. No new license or ownership claim is granted; review original asset and component licensing before public redistribution.

## Build and run

Use Node.js 24 and pnpm. From this directory:

```powershell
pnpm install --frozen-lockfile
pnpm test
pnpm run build
pnpm start
```

`pnpm run dist` builds an unsigned Windows installer. Build requires the local Windows toolchain supported by Electron Builder. `pnpm run test:desktop` is an optional isolated Electron smoke test and does not prove physical paper printing.

Normal startup opens or creates the operator's Documents/SHRI BILLING Data store. Back up business data before replacing an installed version. To evaluate without using normal data, set `SHRI_BILLING_DATA_DIR` to a new temporary folder and `SHRI_DISABLE_STARTUP=1` before `pnpm start`.

## Export scope

Historical release verification documents and one-off owner balance clearing / production inspection scripts are excluded because they contain live business totals or operate on production data. The live source and installed app were not modified by this export. Fresh automated result is recorded in the publication audit outside this source snapshot.

Export-only adjustment: the synthetic billing test now creates its temporary work parent directory, so a fresh checkout can run tests without pre-existing workspace folders. No application logic was changed.
