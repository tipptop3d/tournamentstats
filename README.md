# TournamentStats

A project to generate stats for a custom League of Legends tournament, similar like (gol.gg)[https://www.gol.gg], to see which champion performed best or find out which player had the most pentakills! Currently the app is far from being usable, but in the future the flow should be like this:

- Tournament Owner / Admin creates an account (maybe will simplify this process to accountless?)
- Creates a Tournament, names it, uploads Tournament Logo
- Redirected to Dashboard, is able to:
  - Create Teams with Name and Logo
  - Add matches
    - By Riot API design, it is not longer possible to fetch data for custom games created by players. To bypass it the will either have to create its own tournament codes (more user friendly) or scrap data from Replay Files
- Public Stats viewing page
