# TFT Neon Nights API

Data for Teamfight Tactics Set 6.5

#### Todo:

- [x] Add champion data.
- [x] Add origin data.
- [x] Add class data.
- [x] Add item data.
- [x] Add icons.
- [x] Build web service to serve data and assets.
- [x] Serve icons in the backend.
- [ ] Add queries to other routes.

Hopefully it helps someone looking for this until Riot updates their TFT data from Set 5

## Self hosted

#### Usage

- Clone repository
- From root directory in terminal run: **npm run dev**
- Use endpoints listed below at http://localhost:8080/

## API

Using your own deployed backend or the one hosted on Heroku at: [tft.nemil.io](https://tft.nemil.io/api/)

Heroku Base URL: `http://tft.nemil.io/`

| Endpoint                         | Description                                                  | 📝 Accepted Queries       |
| -------------------------------- | ------------------------------------------------------------ | ------------------------- |
| /                                | List of routes and available queries                         |                           |
| /api/                            | List of routes                                               |                           |
| /api/champions                   | Get all or filtered champion data                            | cost, hasClass, hasOrigin |
| /api/classes                     | Get all class data                                           |                           |
| /api/origins                     | Get all origin data                                          |                           |
| /api/items                       | Get all item data                                            |                           |
| /api/traits                      | Get all trait (origin + trait) data                          |                           |
| /icons/items/{item.icon}         | Get item icon with file name given by the items endpoint     |                           |
| /icons/champions/{champion.icon} | Get champion icon with file name given by the items endpoint |                           |
