using System;
using System.Collections.Generic;
using System.Linq;
using Zebra.InfoPath;

namespace Zebra.IC.WebUI
{
	using M = PageFilter;
	using E = Stage.IDs;
	using B = Stage.Boundary;
	using S = State.ID;
	public enum PageFilter
	{
		All = 0,

		Exception = 1001,
		Exception_Storage = E.PreInterventionNeeded,
		Exception_Processing = E.CurInterventionNeeded,
		Exception_Intransit = E.PostInterventionNeeded,

		Route = 1002,
		Route_Unrouted = E.RouteAssigned,
		Route_Routed = E.RouteCfmed,

		Outdate = 1003,
		Outdate_Waitbagging = E.LoadBalanced,
		Outdate_Baggingtransport = E.SackMfted,
		Outdate_Outgated = E.Outgated,
		Customsclearing = -B.CustomsClearing,
		LastStage = -B.LastStage,

		ShippingPlan = 1004,
		Shippingplan_Awaitingplan = E.ShippingPlanning,
		Shippingplan_Planned = E.ShippingPlaned,
		Shippingplan_Awaitingprocessing = E.ShippingPlanedHub,

		Goods = 1005,
		Goods_Untranslated = E.ContentVerified,
		Goods_UnClassify = E.BrokerageTranslated,
		Goods_Translated = E.RouteAssigned,

		SackManfest_Flight = 1006,
		Awaiting_Transload = S.SackMftCreated,
		Awaiting_Onboard = S.SackMftTransloaded,
		Awaiting_Depart = S.SackMftOnboarded,
		Awaiting_Arrive = S.SackMftDeparted,

		SackManfest = 1007,
		Awaiting_Onboarded = S.SackMftCreated,

		Flight = 1008,
		Awaiting_Departed = S.FlightBooked,
		Awaiting_Arrived = S.FlightDeparted,
		Flight_Cancelled = S.FlightCancelled,

	}
	partial class extIC
	{
		public static IEnumerable<Referring> GoodsStatus() => FilterRange(M.Goods).EnumTo();
		public static IEnumerable<Referring> RouteStatus() => FilterRange(M.Route).EnumTo();
		public static IEnumerable<Referring> SackManfest_FlightStatus() => FilterRange(M.SackManfest_Flight).EnumTo();
		public static IEnumerable<Referring> SackManfestStatus() => FilterRange(M.SackManfest).EnumTo();
		public static IEnumerable<Referring> FlightStatus() => FilterRange(M.Flight).EnumTo();
		public static IEnumerable<Referring> OutdateStatus() => FilterRange(M.Outdate).EnumTo();
		public static IEnumerable<Referring> ExceptionStatus() => FilterRange(M.Exception).EnumTo();
		public static IEnumerable<Referring> ShippingPlanStatus() => FilterRange(M.ShippingPlan).EnumTo();
		private static IEnumerable<Referring> EnumTo(this IEnumerable<M> me)
			=> me.Union(FilterRange(M.All)).EachTo(x => Referring.Of(x, x.ToString().ToUpper()));

		public static IEnumerable<Referring> RouteToReferring(this Route.IDs me)
			=> me.EnumCast().Where(x => x != me).EachTo(x => Referring.Of(x, x.ToString().Replace("_", "-")));
		public static IEnumerable<Referring> SourceToReferring(this Source.IDs me)
			=> me.EnumCast().Where(x => x != me).EachTo(x => Referring.Of(x, x.ToString()));
		public static IEnumerable<Referring> StageToReferring(this E me)
			=> me.EnumCast().Where(x => x != me).EachTo(x => Referring.Of(x, x.ToString().ToUpper())).Distinct();
		public static IEnumerable<Referring> SvcTypeToReferring(this SvcType me)
			=> me.EnumCast().Where(x => x != me).EachTo(x => Referring.Of(x, x.ToDescription().Fallback(x.ToString().Replace("_", "-"))));
		public static IEnumerable<Referring> AllocateStateToReferring()
			=> AllocateState.All.EnumCast().EachTo(x => Referring.Of(x, x.ToString().ToUpper())).Distinct();
		public static IEnumerable<Referring> ConcernToReferring(this ConcernType me)
			=> me.EnumCast().Where(x => x != me).EachTo(x => Referring.Of(x, x.ToString().ToUpper()));

		private static IEnumerable<T> EnumCast<T>(this T me) => Enum.GetValues(typeof(T)).Cast<T>();

		private static IEnumerable<M> FilterRange(this M me)
		{
			var statusFilter = M.All.EnumCast();
			switch (me)
			{
				case M.All: return statusFilter.Where(x => x == M.All);
				case M.Exception:
					return statusFilter.Where(x => x == M.Exception_Storage || x == M.Exception_Processing || x == M.Exception_Intransit);
				case M.Route: return statusFilter.Where(x => x == M.Route_Routed || x == M.Route_Unrouted);
				case M.Outdate:
					return statusFilter.Where(x => x == M.Outdate_Waitbagging || x == M.Outdate_Baggingtransport || x == M.Outdate_Outgated
					|| x == M.Customsclearing || x == M.LastStage);
				case M.ShippingPlan:
					return statusFilter.Where(x => x == M.Shippingplan_Awaitingplan || x == M.Shippingplan_Planned || x == M.Shippingplan_Awaitingprocessing);
				case M.Goods:
					return statusFilter.Where(x => x == M.Goods_Untranslated || x == M.Goods_Translated || x == M.Goods_UnClassify)
						.OrderByDescending(x => x == M.Goods_Untranslated);
				case M.SackManfest_Flight:
					return statusFilter.Where(x => x == M.Awaiting_Transload || x == M.Awaiting_Onboard || x == M.Awaiting_Depart || x == M.Awaiting_Arrive).OrderByDescending(x => x == M.Awaiting_Transload);
				case M.SackManfest:
					return statusFilter.Where(x => x.Equals(M.Awaiting_Onboarded));
				case M.Flight:
					return statusFilter.Where(x => x == M.Awaiting_Departed || x == M.Awaiting_Arrived || x == M.Flight_Cancelled);
				default: return statusFilter;
			}
		}
	}
}
