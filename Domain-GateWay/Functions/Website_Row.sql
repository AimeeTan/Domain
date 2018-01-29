CREATE FUNCTION [svc].[Website$Row]()
RETURNS TABLE
WITH SCHEMABINDING, ENCRYPTION
AS RETURN
(
	select	ID, Website, Name, DirectDownload
	from	core._Website
)