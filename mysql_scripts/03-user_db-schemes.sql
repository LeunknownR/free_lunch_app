USE user_db;

CREATE TABLE IF NOT EXISTS user(
	id INT AUTO_INCREMENT NOT NULL,
	username VARCHAR(50) NOT NULL,
	password CHAR(60) NOT NULL,
	name VARCHAR(100) NOT NULL,
	surname VARCHAR(100) NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO user(username, password, name, surname) VALUES(
	'mrivera', '$2a$12$fOyrzYr2vB/P/V1u89Rr1.LKOTFqCFMaz/nCHQg9hgGxqUdp9IlIq', 'Manuel', 'Rivera'
	-- password = Mrivera_123
);