--CREATE FUNCTION [svc].[Search_Row](
--	@Input nvarchar(max),
--	@Separator nvarchar(max)=',')
--RETURNS TABLE
--WITH SCHEMABINDING, ENCRYPTION
--AS RETURN
--(
--	with cte as(
--		select id,1 as flg,convert(nvarchar(20),left(ShipName,charindex(' ',ShipName+' ')-1))ShipName,convert(nvarchar(20),right(ShipName+' ',len(ShipName)-charindex(' ',ShipName+' ')+1))RShipName from tb
--	union all
--	select id,flg+1 as flg,convert(nvarchar(20),left(RShipName,charindex(' ',RShipName)-1))ShipName,convert(nvarchar(20),right(RShipName,len(RShipName)-charindex(' ',RShipName)+1))RShipName from cte where len(RShipName)>1
--	)
--	select a.id,a.ShipName as firstname,isnull(b.shipname,'') as middlename,isnull(c.shipname,'') as lastname from cte a left join cte b on a.id=b.id and a.flg=b.flg-1 left join cte c on b.id=c.id and b.flg=c.flg-1
--	where a.flg=(case when c.flg is not null then c.flg-2 else a.flg end) and a.flg=1
--	--drop table tb
--)

go
CREATE FUNCTION  [core].[Slice_return](
	@slip nvarchar(max),
	@sep nvarchar(max)=',')
	returns nvarchar(max)
	as
	begin
			declare	@list nvarchar(500),@sql nvarchar(max)=''; 
			--declare	@temp table ([value] nvarchar(max));
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
    return [dbo].[#Tb];
	end 


CREATE function [core].[Slice_return](
	@slip nvarchar(max),
	@sep nvarchar(max)=',')
	returns table
	as
	begin
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
			select * from @table
			-- table [dbo].[#Tb];
	return [dbo].[#Tb];
	end
	
	
			--create table [dbo].[#Tb] ( [ID] int identity(1,1)) 

	--declare @str1 varchar(max), @Separator varchar(10);
	--declare @Sql nvarchar(max)='',@Cols varchar(3);
	--declare @i varchar(500),@j varchar(500)=''; 
	--declare @temp table ([value] nvarchar(max) )
	--set @str1 ='1	|	site	|	555	';
	--set @Separator='|';
	--select @i=isnull(@i,'')+',['+ltrim(aid)+']' from 
	--(select ROW_NUMBER()over(order by getdate()) as aid,* 
	--from [core].[StringSlice](@str1,@Separator,default)) as b 
	--set @i=stuff(@i,1,1,'');

	--set @j= 'select row_number() over(order by getdate()) as aid,*
	--from [core].[StringSlice]('''+@str1+''','''+@Separator+''',1)';
	--set @j='select * from ('+@j+') as b pivot(max(value) for aid in ('+@i+')) as c'
	--exec(@j)
)