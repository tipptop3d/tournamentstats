# TournamentStats

TournamentStats is a project designed to generate statistics for custom League of Legends tournaments, similar to [gol.gg](https://www.gol.gg). It allows users to track which champion performed the best and discover which player achieved the most pentakills. While the current version of the app is not fully functional, the planned workflow for the future is as follows:

## Getting Started

1. **Account Creation**: Tournament Owners or Admins will need to create an account. We are considering simplifying this process to make it accountless in the future.

2. **Creating a Tournament**: After logging in, users can create a tournament and provide a unique name for it. They also have the option to upload a tournament logo to personalize their event.

3. **Dashboard**: Once the tournament is created, users are redirected to the dashboard. From the dashboard, they can:

   - Create Teams: Users can set up teams, complete with a name and logo.

   - Add Matches: Users have the ability to add matches to the tournament.

   **Note**: Due to changes in the Riot API design, it is no longer possible to fetch data for custom games created by players. To work around this limitation, we are considering two potential solutions:

   - Creating Our Own Tournament Codes: This would provide a more user-friendly way to track custom games.

   - Data Scraping from Replay Files: Alternatively, we may scrape data from replay files as an alternative method of gathering match statistics.

4. **Public Stats Viewing Page**: Once the tournament data is collected and matches are added, users will have access to a public stats viewing page. This page will display detailed statistics, allowing everyone to analyze the tournament's performance data.
