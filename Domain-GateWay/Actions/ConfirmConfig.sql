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


		COMMIT	TRAN;
	END TRY
	BEGIN CATCH
		if (xact_state() = -1) ROLLBACK TRAN; throw;
	END CATCH
END
