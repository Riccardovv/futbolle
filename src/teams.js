// Base de datos de equipos - 60 equipos de todo el mundo
export const TEAMS_DATABASE = [
  // 🇪🇸 ESPAÑA - La Liga (12 equipos)
  {
    name: 'Real Madrid',
    country: 'España',
    colors: 'Blanco',
    founded: 1902,
    leagues: 36,
    lastTitle: 'Supercopa 2024',
    coach: 'Ancelotti'
  },
  {
    name: 'Barcelona',
    country: 'España',
    colors: 'Azulgrana',
    founded: 1899,
    leagues: 27,
    lastTitle: 'Liga 2023',
    coach: 'Flick'
  },
  {
    name: 'Atletico Madrid',
    country: 'España',
    colors: 'Rojiblanco',
    founded: 1903,
    leagues: 11,
    lastTitle: 'Liga 2021',
    coach: 'Simeone'
  },
  {
    name: 'Sevilla',
    country: 'España',
    colors: 'Rojiblanco',
    founded: 1905,
    leagues: 1,
    lastTitle: 'Europa League 2023',
    coach: 'García Pimienta'
  },
  {
    name: 'Valencia',
    country: 'España',
    colors: 'Blanquinegro',
    founded: 1919,
    leagues: 6,
    lastTitle: 'Copa 2019',
    coach: 'Baraja'
  },
  {
    name: 'Real Sociedad',
    country: 'España',
    colors: 'Azul y blanco',
    founded: 1909,
    leagues: 2,
    lastTitle: 'Copa 2020',
    coach: 'Imanol'
  },
  {
    name: 'Real Betis',
    country: 'España',
    colors: 'Verde y blanco',
    founded: 1907,
    leagues: 1,
    lastTitle: 'Copa 2022',
    coach: 'Pellegrini'
  },
  {
    name: 'Villarreal',
    country: 'España',
    colors: 'Amarillo',
    founded: 1923,
    leagues: 0,
    lastTitle: 'Europa League 2021',
    coach: 'Marcelino'
  },
  {
    name: 'Athletic Bilbao',
    country: 'España',
    colors: 'Rojiblanco',
    founded: 1898,
    leagues: 8,
    lastTitle: 'Copa 2024',
    coach: 'Valverde'
  },
  {
    name: 'Celta de Vigo',
    country: 'España',
    colors: 'Celeste',
    founded: 1923,
    leagues: 0,
    lastTitle: 'Copa 2001',
    coach: 'Claudio Giráldez'
  },
  {
    name: 'Rayo Vallecano',
    country: 'España',
    colors: 'Franjirrojo',
    founded: 1924,
    leagues: 0,
    lastTitle: 'Copa 2025',
    coach: 'Iraola'
  },
  {
    name: 'Osasuna',
    country: 'España',
    colors: 'Rojo',
    founded: 1920,
    leagues: 0,
    lastTitle: 'Copa 2005',
    coach: 'Vicente Moreno'
  },

  // 🏴󠁧󠁢󠁥󠁮󠁧󠁾󠁧󠁢󠁥󠁮󠁧󠁿 ENGLAND - Premier League (12 equipos)
  {
    name: 'Manchester City',
    country: 'Inglaterra',
    colors: 'Celeste',
    founded: 1880,
    leagues: 10,
    lastTitle: 'Premier 2024',
    coach: 'Guardiola'
  },
  {
    name: 'Manchester United',
    country: 'Inglaterra',
    colors: 'Rojo',
    founded: 1878,
    leagues: 20,
    lastTitle: 'Copa 2024',
    coach: 'Amorim'
  },
  {
    name: 'Liverpool',
    country: 'Inglaterra',
    colors: 'Rojo',
    founded: 1892,
    leagues: 19,
    lastTitle: 'Premier 2020',
    coach: 'Slot'
  },
  {
    name: 'Arsenal',
    country: 'Inglaterra',
    colors: 'Rojo y blanco',
    founded: 1886,
    leagues: 13,
    lastTitle: 'Premier 2004',
    coach: 'Arteta'
  },
  {
    name: 'Chelsea',
    country: 'Inglaterra',
    colors: 'Azul',
    founded: 1905,
    leagues: 6,
    lastTitle: 'Premier 2017',
    coach: 'Maresca'
  },
  {
    name: 'Tottenham',
    country: 'Inglaterra',
    colors: 'Blanco',
    founded: 1882,
    leagues: 2,
    lastTitle: 'Copa 2008',
    coach: 'Postecoglou'
  },
  {
    name: 'Newcastle',
    country: 'Inglaterra',
    colors: 'Blanco y negro',
    founded: 1892,
    leagues: 4,
    lastTitle: 'Premier 1927',
    coach: 'Howe'
  },
  {
    name: 'Aston Villa',
    country: 'Inglaterra',
    colors: 'Granate y azul',
    founded: 1874,
    leagues: 7,
    lastTitle: 'Premier 1981',
    coach: 'Emery'
  },
  {
    name: 'Everton',
    country: 'Inglaterra',
    colors: 'Azul real',
    founded: 1878,
    leagues: 9,
    lastTitle: 'Premier 1987',
    coach: 'Moyes'
  },
  {
    name: 'West Ham',
    country: 'Inglaterra',
    colors: 'Granate y azul',
    founded: 1895,
    leagues: 0,
    lastTitle: 'Conference 2023',
    coach: 'Potter'
  },
  {
    name: 'Brighton',
    country: 'Inglaterra',
    colors: 'Azul y blanco',
    founded: 1901,
    leagues: 0,
    lastTitle: 'Segunda 1979',
    coach: 'Hürzeler'
  },
  {
    name: 'Crystal Palace',
    country: 'Inglaterra',
    colors: 'Rojo y azul',
    founded: 1905,
    leagues: 0,
    lastTitle: 'Segunda 1994',
    coach: 'Glasner'
  },

  // 🇮🇹 ITALIA - Serie A (10 equipos)
  {
    name: 'Juventus',
    country: 'Italia',
    colors: 'Blanco y negro',
    founded: 1897,
    leagues: 36,
    lastTitle: 'Serie A 2020',
    coach: 'Motta'
  },
  {
    name: 'Inter de Milan',
    country: 'Italia',
    colors: 'Azul y negro',
    founded: 1908,
    leagues: 20,
    lastTitle: 'Serie A 2024',
    coach: 'Inzaghi'
  },
  {
    name: 'AC Milan',
    country: 'Italia',
    colors: 'Rojinegro',
    founded: 1899,
    leagues: 19,
    lastTitle: 'Serie A 2022',
    coach: 'Conceição'
  },
  {
    name: 'Napoles',
    country: 'Italia',
    colors: 'Azul claro',
    founded: 1926,
    leagues: 3,
    lastTitle: 'Serie A 2023',
    coach: 'Conte'
  },
  {
    name: 'Roma',
    country: 'Italia',
    colors: 'Granate y amarillo',
    founded: 1927,
    leagues: 3,
    lastTitle: 'Conference 2022',
    coach: 'Ranieri'
  },
  {
    name: 'Lazio',
    country: 'Italia',
    colors: 'Blanco y celeste',
    founded: 1900,
    leagues: 2,
    lastTitle: 'Serie A 2000',
    coach: 'Baroni'
  },
  {
    name: 'Atalanta',
    country: 'Italia',
    colors: 'Azul y negro',
    founded: 1907,
    leagues: 0,
    lastTitle: 'Europa League 2025',
    coach: 'Gasperini'
  },
  {
    name: 'Fiorentina',
    country: 'Italia',
    colors: 'Morado',
    founded: 1926,
    leagues: 2,
    lastTitle: 'Serie A 1969',
    coach: 'Palladino'
  },
  {
    name: 'Torino',
    country: 'Italia',
    colors: 'Granate',
    founded: 1906,
    leagues: 7,
    lastTitle: 'Serie A 1976',
    coach: 'Vanoli'
  },
  {
    name: 'Bolonia',
    country: 'Italia',
    colors: 'Rojo y azul',
    founded: 1909,
    leagues: 7,
    lastTitle: 'Serie A 1964',
    coach: 'Italiano'
  },

  // 🇩🇪 ALEMANIA - Bundesliga (8 equipos)
  {
    name: 'Bayern Munich',
    country: 'Alemania',
    colors: 'Rojo',
    founded: 1900,
    leagues: 33,
    lastTitle: 'Bundesliga 2023',
    coach: 'Kompany'
  },
  {
    name: 'Borussia Dortmund',
    country: 'Alemania',
    colors: 'Amarillo y negro',
    founded: 1909,
    leagues: 8,
    lastTitle: 'Bundesliga 2012',
    coach: 'Kovac'
  },
  {
    name: 'Bayer Leverkusen',
    country: 'Alemania',
    colors: 'Rojo y negro',
    founded: 1904,
    leagues: 1,
    lastTitle: 'Bundesliga 2024',
    coach: 'Alonso'
  },
  {
    name: 'RB Leipzig',
    country: 'Alemania',
    colors: 'Blanco y rojo',
    founded: 2009,
    leagues: 0,
    lastTitle: 'Copa 2023',
    coach: 'Rose'
  },
  {
    name: 'Eintracht Frankfurt',
    country: 'Alemania',
    colors: 'Rojo y negro',
    founded: 1899,
    leagues: 1,
    lastTitle: 'Europa League 2022',
    coach: 'Toppmöller'
  },
  {
    name: 'Wolfsburgo',
    country: 'Alemania',
    colors: 'Verde',
    founded: 1945,
    leagues: 1,
    lastTitle: 'Bundesliga 2009',
    coach: 'Hasenhüttl'
  },
  {
    name: 'Borussia Mönchengladbach',
    country: 'Alemania',
    colors: 'Negro y verde',
    founded: 1900,
    leagues: 5,
    lastTitle: 'Bundesliga 1977',
    coach: 'Gerardo Seoane'
  },
  {
    name: 'Stuttgart',
    country: 'Alemania',
    colors: 'Rojo y blanco',
    founded: 1893,
    leagues: 5,
    lastTitle: 'Bundesliga 2007',
    coach: 'Hoeneß'
  },

  // 🇫🇷 FRANCIA - Ligue 1 (6 equipos)
  {
    name: 'Paris Saint-Germain',
    country: 'Francia',
    colors: 'Azul y rojo',
    founded: 1970,
    leagues: 12,
    lastTitle: 'Ligue 1 2024',
    coach: 'Luis Enrique'
  },
  {
    name: 'Olympique de Marsella',
    country: 'Francia',
    colors: 'Blanco y azul',
    founded: 1899,
    leagues: 9,
    lastTitle: 'Ligue 1 2010',
    coach: 'De Zerbi'
  },
  {
    name: 'Olympique de Lyon',
    country: 'Francia',
    colors: 'Blanco y rojo',
    founded: 1950,
    leagues: 7,
    lastTitle: 'Ligue 1 2008',
    coach: 'Sage'
  },
  {
    name: 'Monaco',
    country: 'Francia',
    colors: 'Rojo y blanco',
    founded: 1924,
    leagues: 8,
    lastTitle: 'Ligue 1 2017',
    coach: 'Adi Hütter'
  },
  {
    name: 'Lille',
    country: 'Francia',
    colors: 'Rojo',
    founded: 1944,
    leagues: 4,
    lastTitle: 'Ligue 1 2021',
    coach: 'Génésio'
  },
  {
    name: 'Niza',
    country: 'Francia',
    colors: 'Negro y rojo',
    founded: 1904,
    leagues: 4,
    lastTitle: 'Ligue 1 1959',
    coach: 'Franck Haise'
  },

  // 🇵🇹 PORTUGAL - Primeira Liga (4 equipos)
  {
    name: 'Benfica',
    country: 'Portugal',
    colors: 'Rojo',
    founded: 1904,
    leagues: 38,
    lastTitle: 'Primeira Liga 2023',
    coach: 'Bruno Lage'
  },
  {
    name: 'Porto',
    country: 'Portugal',
    colors: 'Azul y blanco',
    founded: 1893,
    leagues: 30,
    lastTitle: 'Primeira Liga 2022',
    coach: 'Vítor Bruno'
  },
  {
    name: 'Sporting de Lisboa',
    country: 'Portugal',
    colors: 'Verde y blanco',
    founded: 1906,
    leagues: 20,
    lastTitle: 'Primeira Liga 2021',
    coach: 'Rui Borges'
  },
  {
    name: 'Sporting de Braga',
    country: 'Portugal',
    colors: 'Rojo y blanco',
    founded: 1921,
    leagues: 0,
    lastTitle: 'Copa 2021',
    coach: 'Daniel Sousa'
  },

  // 🇳🇱 HOLANDA - Eredivisie (2 equipos)
  {
    name: 'Ajax',
    country: 'Holanda',
    colors: 'Rojo y blanco',
    founded: 1900,
    leagues: 36,
    lastTitle: 'Eredivisie 2022',
    coach: 'Farioli'
  },
  {
    name: 'PSV Eindhoven',
    country: 'Holanda',
    colors: 'Blanco y rojo',
    founded: 1913,
    leagues: 25,
    lastTitle: 'Eredivisie 2024',
    coach: 'Peter Bosz'
  },

  // 🇧🇷 BRASIL - Brasileirão (2 equipos)
  {
    name: 'Flamengo',
    country: 'Brasil',
    colors: 'Rojo y negro',
    founded: 1895,
    leagues: 7,
    lastTitle: 'Brasileirão 2020',
    coach: 'Filipe Luís'
  },
  {
    name: 'Palmeiras',
    country: 'Brasil',
    colors: 'Verde',
    founded: 1914,
    leagues: 12,
    lastTitle: 'Brasileirão 2023',
    coach: 'Abel Ferreira'
  },

  // 🇦🇷 ARGENTINA - Primera División (2 equipos)
  {
    name: 'Boca Juniors',
    country: 'Argentina',
    colors: 'Azul y oro',
    founded: 1905,
    leagues: 35,
    lastTitle: 'Primera 2022',
    coach: 'Fernando Gago'
  },
  {
    name: 'River Plate',
    country: 'Argentina',
    colors: 'Blanco y rojo',
    founded: 1901,
    leagues: 38,
    lastTitle: 'Primera 2023',
    coach: 'Gallardo'
  }
]
