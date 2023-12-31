# gcal-to-sheet

## Description

This is a simple script to export Google Calendar events to a Google Sheet.

## Usage

### Pre-requisites

1. Install dependencies

```shell
pnpm install
```

2. Login to Google Account

```shell
pnpm exec clasp login
```

## Setup Project

Create a new Google Apps Script project

```shell
pnpm exec clasp create
```

Or use another existing project

```shell
pnpm exec clasp setting scriptId <your-script-id>
pnpm exec clasp setting parentId <your-parent-id>
```

Push the code to the project

```shell
pnpm run clasp:push
```

## Export Calendar Events

Open the Google Spreadsheet

```shell
pnpm exec clasp open
```

Set the start date in the cell `A1`, e.g. `2023-01-01`

Set the end date in the cell `A2`, e.g. `2023-12-31`

Run the script on the Apps Script editor
