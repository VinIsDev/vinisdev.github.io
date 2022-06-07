export const TimeLineData = [
    {year: 2019, text: 'I became interested in programming',},
    {year: 2021, text: 'I did my first paid project.',},
    {year: 2022, text: 'I have been helping in projects in the field of videogames.',},
    {year: 'NOW', text: 'I am trying to learn new frameworks.',},
];

export const presentYear = new Date().getFullYear();

export const reformatString = (string) => (
    string.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
);
