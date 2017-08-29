BEGIN;

DROP TABLE IF EXISTS admins, blogs cascade ;

CREATE TABLE admins (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(300) NOT NULL
);

CREATE TABLE blogs (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(100) NOT NULL,
  contents text NOT NULL,
  img_url VARCHAR(100),
  blog_date date,
  admin_id integer references admins(id)
);

INSERT INTO admins (name, password) VALUES
('aia', 'engaia'),
('mahmoud', 'mahmoud'),
('salwa', 'salwa3'),
('samer', 'samer4');

INSERT INTO blogs (title, contents, img_url, blog_date, admin_id) VALUES
('blog1', 'Hello World','https://goo.gl/re4yz6', '2017-08-29',1),
('blog2', 'Welcome', 'https://goo.gl/c8NkST', '2017-08-29',2),
('blog3', '3eed Adha Mobarak','https://goo.gl/9VVikX', '2017-08-29',3),
('blog4', 'Enjoy Your Time', 'https://goo.gl/Xod6nC', '2017-08-29',4);

COMMIT ;
