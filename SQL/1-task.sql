SELECT * FROM EMPLOYEE AS employees
WHERE employees.salary = (SELECT MAX(SALARY) FROM EMPLOYEE AS max WHERE max.DEPARTMENT_ID = employees.DEPARTMENT_ID);