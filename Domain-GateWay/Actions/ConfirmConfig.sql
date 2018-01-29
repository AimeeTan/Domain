/*
	@slip    = Many[at.Tvp.Triad.Join(x.ID, x.StartKey, x.EndKey)]
*/
CREATE PROCEDURE [svc].[ConfirmConfig](@slip tvp)
AS
BEGIN
	SET NOCOUNT    ON;
	SET XACT_ABORT ON;
	BEGIN TRY
		BEGIN	TRAN;
		
declare @str1 varchar(max), @Separator varchar(10);
declare @Sql nvarchar(max)='',@Cols varchar(3);
declare @i varchar(500),@j varchar(500)=''; 
set @str1 = '1	|	site	|	555	';
set @Separator=' | ';
--with cte as
--(
--	select ID=1, Value from [core].[StringSlice](@str1, '|', default) 
--)
  
