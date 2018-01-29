USE [Domain_Sys]
GO
/****** Object:  StoredProcedure [core].[Slice_Return]    Script Date: 2018/1/28 21:10:12 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [core].[Slice_Return](@slip nvarchar(max),@sep nvarchar(10))
AS
BEGIN
	SET NOCOUNT    ON;
	SET XACT_ABORT ON;
	BEGIN TRY
		BEGIN	TRAN;
			declare	@list nvarchar(500),@sql nvarchar(max)=''; 
			declare	@temp table ([value] nvarchar(max))
			select	@list=isnull(@list,'')+',['+ltrim(aid)+']'
			from	(select ROW_NUMBER() over(order by getdate()) as aid,* 
			from	[core].[StringSlice](@slip,@sep,default)) as b 
			set		@list=stuff(@list,1,1,'');
		
			set		@sql= 'select row_number() over(order by getdate()) as aid,*
							from [core].[StringSlice]('''+@slip+''','''+@sep+''',1)';
			set		@sql='select * from ('+@sql+') as b 
						pivot(max(value) for aid in ('+@list+')) as c'
			exec sp_executesql @sql

		COMMIT	TRAN;
	END TRY
	BEGIN CATCH
		if (xact_state() = -1) ROLLBACK TRAN; throw;
	END CATCH
END