CREATE USER 'auth_service'@'%' IDENTIFIED BY 'auth_service_fld';
CREATE USER 'inventory_service'@'%' IDENTIFIED BY 'inventory_service_fld';
CREATE USER 'supply_service'@'%' IDENTIFIED BY 'supply_service_fld';

GRANT SELECT, INSERT, UPDATE, DELETE ON user_db.* TO 'auth_service'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE ON inventory_db.* TO 'inventory_service'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE ON supply_db.* TO 'supply_service'@'%';