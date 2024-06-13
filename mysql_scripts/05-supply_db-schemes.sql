USE supply_db;

CREATE TABLE IF NOT EXISTS supply_history(
    id CHAR(36) NOT NULL,
    ingredient_id VARCHAR(20) NOT NULL,
    ingredient_label VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    supplied_on DATETIME NOT NULL,
	PRIMARY KEY (id)
);

-- DUMMIE DATA
INSERT INTO supply_history(id, ingredient_id, ingredient_label, quantity, supplied_on) VALUES
    ('386959d2-4446-4d75-b342-736fa0fa7c5d', 'Limón', 'lemon', 3, '2024-06-08 09:50'),
    ('9d9236d1-9ef1-49f8-8c46-85d6ccae9539', 'Arroz', 'rice', 2, '2024-06-08 13:02'),
    ('020945e0-e4b6-4434-912c-acd97159d771', 'Papa', 'potato', 2, '2024-06-08 15:47'),
    ('761d92dc-c46a-4e4d-8aa4-580ee9952b8f', 'Arroz', 'rice', 1, '2024-06-09 11:30');