CREATE TABLE "DEPARTMENT" (
	"ID"	NUMERIC NOT NULL UNIQUE,
	"NAME"	VARCHAR(100) NOT NULL,
	PRIMARY KEY("ID")
);

CREATE TABLE "EMPLOYEE" (
	"ID"	NUMERIC NOT NULL UNIQUE,
	"DEPARTMENT_ID"	NUMERIC NOT NULL,
	"CHEIF_ID"	NUMERIC NOT NULL,
	"NAME"	VARCHAR(100) NOT NULL,
	"SALARY"	NUMERIC NOT NULL,
	PRIMARY KEY("ID"),
	FOREIGN KEY("DEPARTMENT_ID") REFERENCES "DEPARTMENT"("ID") ON DELETE CASCADE ON UPDATE CASCADE
);