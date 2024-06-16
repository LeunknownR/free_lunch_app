USE inventory_db;

CREATE TABLE IF NOT EXISTS ingredient(
	id VARCHAR(20) NOT NULL,
	label VARCHAR(50) NOT NULL,
	image VARCHAR(50) NOT NULL,
	stock INT NOT NULL,
	PRIMARY KEY (id)
);

-- DUMMIE DATA
INSERT INTO ingredient(id, label, image, stock) VALUES
    ('tomato', 'Tomate', 'tomato.jpg', 5),
    ('lemon', 'Limón', 'lemon.jpg', 5),
    ('potato', 'Papa', 'potato.jpg', 5),
    ('rice', 'Arroz', 'rice.jpg', 5),
    ('ketchup', 'Ketchup', 'ketchup.jpg', 5),
    ('lettuce', 'Lechuga', 'lettuce.jpg', 5),
    ('onion', 'Cebolla', 'onion.jpg', 5),
    ('cheese', 'Queso', 'cheese.jpg', 5),
    ('meat', 'Carne', 'meat.jpg', 5),
    ('chicken', 'Pollo', 'chicken.jpg', 5);