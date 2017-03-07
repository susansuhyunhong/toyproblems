-- If you're given a table with dates in one column and temperature in one column
-- output all the rows where the previous day had a higher temperature than the day after

 select D.date as prev_date, D.temp as prev_temp, A.date as next_date, A.temp as next_temp
 from dailytemp as D inner join dailytemp as A
 on D.date+1 = A.date
 having prev_temp > next_temp

-- CREATE FUNCTION CalcIncome ( starting_value INT )
-- RETURNS INT
-- BEGIN
--   DECLARE income INT unsigned default 0;
--    SET income = 0;
--    label1: WHILE income <= 3000 DO
--      SET income = income + starting_value;
--    END WHILE label1;
--    RETURN income;
-- END;

-- SELECT CalcIncome(1);



-- CREATE FUNCTION higherTemp ( starting_value INT )
-- RETURNS INT
-- BEGIN
--    DECLARE income INT;
--    SET income = 0;
--    label1: WHILE income <= 3000 DO
--      SET income = income + starting_value;
--    END WHILE label1;
--    RETURN income;
-- END;

-- SELECT CalcIncome(1);

-- var selected = []; // ?
-- var prevTemp = firstRow.temp;
-- for every R (row) of 'dailytemp'
--   if(prevTemp > R.temp){
--     print out the row? or add to selected
--   }
-- }
-- prevTemp = R.temp;


-- delimiter $$
-- create procedure findClosestTimeStamp()
-- begin
--     -- Variables to hold values from the communications table
--     declare prevTemp int;
--     -- declare cTimeStamp datetime;
--     -- Variables related to cursor:
--     --    1. 'done' will be used to check if all the rows in the cursor
--     --       have been read
--     --    2. 'curComm' will be the cursor: it will fetch each row
--     --    3. The 'continue' handler will update the 'done' variable
--     declare done int default false;
--     declare curComm cursor for
--         select fromId, timestamp from communication; -- This is the query used by the cursor.
--     declare continue handler for not found -- This handler will be executed if no row is found in the cursor (for example, if all rows have been read).
--         set done = true;

--     -- Open the cursor: This will put the cursor on the first row of its
--     -- rowset.
--     open curComm;
--     -- Begin the loop (that 'loop_comm' is a label for the loop)
--     loop_comm: loop
--         -- When you fetch a row from the cursor, the data from the current
--         -- row is read into the variables, and the cursor advances to the
--         -- next row. If there's no next row, the 'continue handler for not found'
--         -- will set the 'done' variable to 'TRUE'
--         fetch curComm into cFromId, cTimeStamp;
--         -- Exit the loop if you're done
--         if done then
--             leave loop_comm;
--         end if;
--         -- Execute your desired query.
--         -- As an example, I'm putting a SELECT statement, but it may be
--         -- anything.
--         select *
--         from movement as m
--         where m.vID = cFromId and m.timeStamp <= cTimeStamp
--         order by timestampdiff(SECOND, cTimeStamp, m.timeStamp)
--         limit 1;
--     end loop;
--     -- Don't forget to close the cursor when you finish
--     close curComm;
-- end $$
-- delimiter ;

