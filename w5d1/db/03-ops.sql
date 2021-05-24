-- Basic fetching

-- SELECT * FROM jokes;

-- Filtering

-- SELECT * FROM jokes WHERE rating < 5;
-- SELECT * FROM jokes WHERE rating > 3 AND LOWER(question) LIKE 'w%';
-- SELECT * FROM jokes WHERE rating > 3 AND question ILIKE 'w%';

-- Aggregate

-- SELECT COUNT(*), description FROM authors GROUP BY description HAVING COUNT(*) > 1;

-- Joining

-- SELECT * FROM jokes JOIN authors ON jokes.author_id = authors.id;

-- SELECT 
--   jokes.*, authors.name, authors.description 
-- FROM jokes 
-- JOIN authors 
-- ON jokes.author_id = authors.id;

-- SELECT 
--   jokes.*, authors.name, authors.description 
-- FROM jokes 
-- JOIN authors 
-- ON jokes.author_id = authors.id
-- WHERE rating > 3
-- ORDER BY question
-- OFFSET 2
-- LIMIT 2
-- ;


-- SELECT 
--   jokes.question,
--   jokes.answer,
--   jokes.id AS joke_id,
--   authors.name,
--   authors.id AS author_id
-- FROM jokes 
-- JOIN authors 
-- ON jokes.author_id = authors.id
-- ORDER BY question
-- ;


SELECT 
  jokes.question,
  jokes.answer,
  jokes.id AS joke_id,
  authors.name,
  authors.id AS author_id
FROM jokes 
JOIN authors 
ON jokes.author_id = authors.id
WHERE author_id IN (SELECT author_id FROM jokes GROUP BY author_id HAVING COUNT(*) > 1)
ORDER BY question
;


-- SELECT author_id FROM jokes GROUP BY author_id HAVING COUNT(*) > 1;