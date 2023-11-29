# Structure of TournamentStats

## Routes

- Home
- Login
- Signup
- tournament (redirect)
  - create
  - :tournamentId
    - Dashboard
      - Overview
      - Teams
      - Matches
        - :matchId
      - Stats (coming soon)
      - Settings

## Components

### Input

- BaseButton
  - ButtonCTA
  - ButtonIconRound
  - ButtonFilled
  - ButtonFilledIcon
  - ButtonText
  - ButtonDiscordLogin
- UploadFile
  - InputFileButton
  - InputFileImagePreview
- Checkbox
- Switch
- InputText
- InputTextInline
- DropdownMenu

### Global Components

- Logo
- HeaderNavigationEntry
- Header
- Footer

### Dashboard Components

- ShortHeader
- SideNavigation
- SideNavigationLogo
- SideNavigationEntry

#### Teams

- TeamCard
- TeamDetailsOverlay
- TeamDetailsPlayer

#### Matches

- MatchCard
- GameCard

### Icons

- RocketIcon
- TeamIcon
- PlayerIcon
- MatchIcon
- StatsIcon
- SettingsIcon

- RoleTopIcon
- RoleJungleIcon
- RoleMidIcon
- RoleBotIcon
- RoleSuppIcon

### Sonstige

- ImportantText
