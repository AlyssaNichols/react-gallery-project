-- in postico create a database and name it: `react_gallery`

-- database with a table named gallery
-- Has `id`, `title`, `path`, `description`, and `likes` for each of your images
CREATE TABLE gallery (
	"id" serial primary key,
	"path" varchar(200) not null,
	"title" varchar (200),
	"description" varchar(1000),
	"likes" int default 0
);

SELECT * FROM gallery;

INSERT INTO gallery ("path", "title", "description", "likes")
VALUES ('images/mtb.jpg', 'Mountain Biking', 'Mountain biking outing for our 2 year anniversary.', '0'),
	   ('images/camping.JPG', 'Camping trip','The yearly October camping trip with my wife, brother, and sister in law.', '0'),
	   ('images/fin-boi.jpg', 'My cat', 'My cat Fin who is such a handsome boi.', '0'),
	   ('images/fam-boat.jpg', 'Pontoon Ride','Family pontoon rides in the summer are one of my favorite things to do.', '0'),
	   ('images/wedding-pic.jpg', 'Wedding', 'One of my favorite pictures from our wedding day.', '0'),
	   ('images/fam-easter.jpg', 'Easter', 'Family picture on easter, I love any excuse to wear a fun sweater.', '0'),
	   ('images/wifey.jpg', 'Wife','My beautiful Wife, Brittany, who I love endlessly.', '0'),
	   ('images/lola@drekker.jpg', 'Neice', 'My adorable neice, Lola, and I at the brewery I used to work at.', '0');