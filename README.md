# Project 

This project was created with material ui in order to display list with emplooyees in 2 ways:

* Grid
* Cards

## How To Start

To start the project: 
```bash
npm i && npm run start
```

## How To Generate another data 

Example Json was generated with [JSON GENERATOR](https://www.json-generator.com/#)

```
[
  '{{repeat(50)}}',
  {
    id: '{{index()}}',
    picture: 'http://placehold.it/190x190',
    subordinates: '{{integer(1, 20)}}',
    position: '{{random("Support specialist", "Quality assurance tester", "Web developer", "Network engineer", "Software engineer", "Data scientist" )}}',
    firstName: '{{firstName()}}',
    lastName: '{{surname()}}',
    dob: '{{date(new Date(1970, 0, 1), new Date(1999, 0, 1), "YYYY-MM-dd")}}'
  }
]
```