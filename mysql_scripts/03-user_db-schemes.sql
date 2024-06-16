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
	'mrivera', '$2a$12$FZ5RzS5IYn280VRLW3GHUu9EuL4eJJL2oneICSSjn5jeUCS1rSjB6', 'Manuel', 'Rivera'
	-- password = Mrivera_123
);