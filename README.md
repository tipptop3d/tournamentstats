# TournamentStats

A website for gathering and analyzing League of Legends Statistics of custom tournaments written in Vue.

## Key Features

- Login/Signup
- Riot Games API integration
- Presenting stats in a modern way

### Planned

- Tournament Codes
- Option for bracket generation etc.? (No need for another tournament platform)
- much more

## Installation

Clone Project:

```bash
git clone https://github.com/tipptop3d/tournamentstats.git
```

Install dependencies:

```bash
cd tournamentstats
npm install
```

Create .env file for API Keys with the following content:

```file
VITE_SUPABASE_URL="YOUR_SUPABASE_BACKEND_URL"
VITE_SUPABASE_ANON_KEY="YOUR_ANON_KEY"
```

Start frontend server:

```bash
npm run dev
```
