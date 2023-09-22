CREATE TABLE gallery (
	"id" serial primary key,
	"path" varchar(80) not null,
	"description" varchar(1000),
	"likes" int default 0
);

SELECT * FROM gallery;

INSERT INTO gallery ("path", "description", "likes")
VALUES ('images/mtb.jpg', 'Mountain biking outing for our 2 year anniversary.', '0'),
	   ('images/camping.JPG', 'The yearly October camping trip with my wife, brother, and sister in law.', '0'),
	   ('images/fin-boi.jpg', 'My cat Fin who is such a handsome boi.', '0'),
	   ('images/fam-boat.jpg', 'Family pontoon rides in the summer are one of my favorite things to do.', '0'),
	   ('images/wedding-pic.jpg', 'One of my favorite pictures from our wedding day.', '0'),
	   ('images/fam-easter.jpg', 'Family picture on easter, I love any excuse to wear a fun sweater.', '0'),
	   ('images/wifey.jpg', 'My beautiful Wife, Brittany, who I love endlessly.', '0'),
	   ('images/lola@drekker.jpg', 'My adorable neice, Lola, and I at the brewery I used to work at.', '0');