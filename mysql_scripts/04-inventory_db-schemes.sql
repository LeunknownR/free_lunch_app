USE inventory_db;

CREATE TABLE IF NOT EXISTS ingredient(
	id VARCHAR(20) NOT NULL,
	label VARCHAR(50) NOT NULL,
	stock INT NOT NULL DEFAULT 0,
	PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS suply_history(
    id INT AUTO_INCREMENT NOT NULL,
    ingredient_id VARCHAR(20) NOT NULL,
    recorded_at DATETIME NOT NULL,
	PRIMARY KEY (id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredient(id)
);

-- DATA
INSERT INTO ingredient(id, label, stock) VALUES
    ('tomato', 'Tomate', 6),
    ('lemon', 'Limón', 3),
    ('potato', 'Papa', 12),
    ('rice', 'Arroz', 4),
    ('ketchup', 'Ketchup'),
    ('lettuce', 'Lechuga', 6),
    ('onion', 'Cebolla', 5),
    ('cheese', 'Queso', 3),
    ('meat', 'Carne', 5),
    ('chicken', 'Pollo', 8);

INSERT INTO suply_history(ingredient_id, recorded_at) VALUES
    ('lemon', "2024-06-08 09:50"),
    ('rice', "2024-06-08 13:02"),
    ('potato', "2024-06-08 15:47"),
    ('rice', "2024-06-09 11:30");