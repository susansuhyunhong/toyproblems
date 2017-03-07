set @day1 = '2017-01-01';
set @day2 = '2017-01-02';
set @day3 = '2017-01-03';
set @day4 = '2017-01-04';
set @day5 = '2017-01-05';
set @day6 = '2017-01-06';
set @day7 = '2017-01-07';
set @day8 = '2017-01-08';
set @day9 = '2017-01-09';
set @day10 = '2017-01-10';

set @temp1 = 50;
set @temp2 = 55;
set @temp3 = 60;
set @temp4 = 70;

insert into dailytemp
values (NULL, @day1, @temp1),
      (NULL, @day2, @temp3),
      (NULL, @day3, @temp2),
      (NULL, @day4, @temp4),
      (NULL, @day5, @temp2),
      (NULL, @day6, @temp4),
      (NULL, @day7, @temp3),
      (NULL, @day8, @temp3),
      (NULL, @day9, @temp1),
      (NULL, @day10, @temp3);
