CREATE PROCEDURE [core].[Slice_Return](@slip nvarchar(max),
@sep nvarchar(10),
--@result nvarchar(max) out
)
AS
BEGIN
	SET NOCOUNT    ON;
	SET XACT_ABORT ON;
	BEGIN TRY
		BEGIN	TRAN;
			declare	@list nvarchar(500),@sql nvarchar(max)=''; 
			declare	@temp table ([value] nvarchar(max));
			select	@list=isnull(@list,'')+',['+ltrim(aid)+']'
			from	(select ROW_NUMBER() over(order by getdate()) as aid,* 
			from	[core].[StringSlice](@slip,@sep,default)) as b 
			set		@list=stuff(@list,1,1,'');
		
			set		@sql= 'select row_number() over(order by getdate()) as aid,*
							from [core].[StringSlice]('''+@slip+''','''+@sep+''',1)';
			set		@sql='select * from ('+@sql+') as b 
						pivot(max(value) for aid in ('+@list+')) as c';
						
			--if object_id('tempdb..#tempTable') is not null
			--begin
			--	drop table [dbo].[#Tb]
			--end 
			create table [dbo].[#Tb] ( [ID] int identity(1,1)) 

			declare	@idx int=0, @count int,@addcolsql nvarchar(max);
			select @count =count(*) from [core].[StringSlice](@slip,@sep,default);
			while	(@count>0)
			begin
				set @idx +=1;
				set @addcolsql='alter table 
				[dbo].[#Tb] add [V'+convert(nvarchar(max),@idx) +'] nvarchar(max)';
				exec sp_executesql @addcolsql;
				set	@count = @count-1;
			end
			
			insert into [dbo].[#Tb] exec sp_executesql @sql,
			N'select * from [dbo].[#Tb]',@result output
			
    --SET @PARAM='@PARA1 VARCHAR(8),@PARA2 VARCHAR(32),@RTN OUTPUT ' ;
    --EXEC SP_EXECUTESQL @ATOMSQL,@PARAM,@PARA1 =@V_1,@PARA2 =@V_2,@RTN=@V_RESULT OUTPUT ;
			--exec	sp_executesql @sql

		COMMIT	TRAN;
	END TRY
	BEGIN CATCH
		if (xact_state() = -1) ROLLBACK TRAN; throw;
	END CATCH
END
