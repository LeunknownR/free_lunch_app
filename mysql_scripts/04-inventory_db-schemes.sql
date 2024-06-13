USE inventory_db;

CREATE TABLE IF NOT EXISTS ingredient(
	id VARCHAR(20) NOT NULL,
	label VARCHAR(50) NOT NULL,
	stock INT NOT NULL,
	PRIMARY KEY (id)
);

-- DUMMIE DATA
INSERT INTO ingredient(id, label, stock) VALUES
    ('tomato', 'Tomate', 5),
    ('lemon', 'Limón', 5),
    ('potato', 'Papa', 5),
    ('rice', 'Arroz', 5),
    ('ketchup', 'Ketchup', 5),
    ('lettuce', 'Lechuga', 5),
    ('onion', 'Cebolla', 5),
    ('cheese', 'Queso', 5),
    ('meat', 'Carne', 5),
    ('chicken', 'Pollo', 5);