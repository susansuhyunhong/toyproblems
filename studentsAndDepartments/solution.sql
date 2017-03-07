select D.DEPT_ID as dept_id, S.STUDENT_ID as student_id
from Departments as D left outer join Students as S
on D.DEPT_ID = S.DEPT_ID
group by dept_id;


select D.DEPT_NAME as dept_name, count(S.STUDENT_ID) as count
from Departments as D left outer join Students as S
on D.DEPT_ID = S.DEPT_ID
group by D.DEPT_ID;


-- COUNT(column_name) vs COUNT(DISTINCT column_name)
-- https://www.w3schools.com/sql/sql_func_count.asp


-- GROUP BY
-- https://www.w3schools.com/sql/sql_groupby.asp
-- https://www.techonthenet.com/sql/group_by.php

-- HAVING
-- https://www.techonthenet.com/sql/having.php


-- WHERE vs HAVING
-- http://stackoverflow.com/a/287496


-- execution order
-- http://www.designcise.com/web/tutorial/what-is-the-order-of-execution-of-an-sql-query