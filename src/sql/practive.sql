CREATE TABLE Users (
Id INT AUTO_INCREMENT,
FirstName TEXT,
LastName TEXT,
Email TEXT,
PRIMARY KEY (Id)
);

CREATE TABLE Products (
Id INT AUTO_INCREMENT, 
Description TEXT,
SKU TEXT,
UserId INT,
PRIMARY KEY (Id),
FOREIGN KEY (UserId) REFERENCES Users(Id)
);

INSERT INTO USERS (FirstName, LastName, Email) VALUES ('Darie', 'Dorlus', 'darie@dorlus.com');
INSERT INTO Products (Description, SKU, UserId) VALUES ('Iphone 13', 'SKU123', null);

