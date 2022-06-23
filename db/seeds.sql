INSERT INTO department (dep_name)
VALUES ("Marketing"),
       ("Engineering"),
       ("Sales"),
       ("Legal");

INSERT INTO empRole (title, salary, department_id)
VALUES ("Marketing Manager", 100000, 1),
       ("Junior Marketer", 50000, 1),
       ("Senior Engineer", 130000, 2),
       ("Junior Engineer", 80000, 2),
       ("Sales Lead", 90000, 3),
       ("Sales Associate", 40000, 3),
       ("Lawyer", 120000, 4),
       ("Paralegal", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Connor", 'Fitzsimmons', 3, null),
       ("Adam", 'Marcelo', 1, null),
       ("Jeiam", 'Marseigan', 2, null);

       
       
        


  
