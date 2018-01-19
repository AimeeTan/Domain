﻿CREATE FUNCTION [svc].[SearchEngine$Row]()
RETURNS TABLE
WITH SCHEMABINDING, ENCRYPTION
AS RETURN
(

	select	p.ID, p.PID, p.AID, p.Type, p.Source, p.Alias 
	from	core.Party#Raw() p, core.Party#Type() t
	where	p.Type=t.ZebraStore
)