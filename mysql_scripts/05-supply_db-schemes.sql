USE supply_db;

CREATE TABLE IF NOT EXISTS supply_history(
    id INT AUTO_INCREMENT NOT NULL,
    ingredient_id VARCHAR(20) NOT NULL,
    quantity INT NOT NULL,
    supplied_on DATETIME NOT NULL,
	PRIMARY KEY (id)
);

-- DUMMIE DATA
INSERT INTO supply_history(ingredient_id, quantity, supplied_on) VALUES
    ('lemon', 3, '2024-06-08 09:50'),
    ('rice', 2, '2024-06-08 13:02'),
    ('potato', 2, '2024-06-08 15:47'),
    ('rice', 1, '2024-06-09 11:30');