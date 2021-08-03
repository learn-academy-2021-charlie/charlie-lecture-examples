# PostgreSQL 8/3/2021


General purpose programming languages - JS, Ruby, perform logic
Domain-specific language - HTML, RSpec, SQL

PostgreSQL/ postgres - open-source, object-relational db

Version 13.3
$ psql --version

PGAdmin - password is the one for your computer (SDlearn123)

Open server file menu until you see country
Tools >> Query tool

General query:
SELECT * FROM country;

Limit the number of columns:
SELECT name, continent
FROM country;

Limiting the number of rows:
SELECT name, continent
FROM country
LIMIT 10;

Creating conditions:
SELECT name, continent
FROM country
WHERE continent = 'North America';

Relational operators:
SELECT name, continent, population
FROM country
WHERE population > 1e6; (same thing as 1000000)

Logical operators:
SELECT name, continent, population
FROM country
WHERE population > 1e6
AND continent = 'North America';

String matching and the wildcard:
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America';

Ordering:
SELECT name, region, indepyear
FROM country
ORDER BY indepyear
LIMIT 10;

Ordering descending:
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10;


AS can create an alias column:
SELECT name, population, surfacearea, population/surfacearea AS density
FROM country
ORDER BY density DESC;

AS to create an alias table:
WITH largest_countries AS (SELECT name, surfacearea, population
FROM country
ORDER BY surfacearea DESC
LIMIT 10)

SELECT *
FROM largest_countries
ORDER BY population
LIMIT 1;

1.312e+07
13,120,000

Aggregate Functions:
SELECT MAX(surfacearea)
FROM country;

GROUP BY and Aggregate functions:
SELECT continent, SUM(population)
FROM country
GROUP BY continent;
