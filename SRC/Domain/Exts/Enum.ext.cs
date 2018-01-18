using System;
using System.ComponentModel;
using System.Reflection;

namespace Zebra.InfoPath
{
	partial class extInfoPath
	{
		public static TEnum BeEnum<TEnum>(this string me) where TEnum : struct
		{
			TEnum units;
			Enum.TryParse(me ?? string.Empty, true, out units);
			return units;
		}
		public static TEnum BeEnum<TEnum>(this string me, Func<string, string> func) where TEnum : struct
			=> func(me ?? string.Empty).BeEnum<TEnum>();

		public static string EnumName<TEnum>(this int me) where TEnum : struct
			=> me == 0 ? string.Empty : Enum.GetName(typeof(TEnum), me).FallbackOnVacant(me.ToString());
		public static string EnumAlias<TEnum>(this int me) where TEnum : struct
		{
			if (me == 0) return string.Empty;
			var name = me.EnumName<TEnum>();
			FieldInfo fi = typeof(TEnum).GetField(name);

			DescriptionAttribute[] attributes = (DescriptionAttribute[])
				fi?.GetCustomAttributes(typeof(DescriptionAttribute), false);

			return (attributes != null && attributes.Length > 0)
					? attributes[0].Description : name;
		}
	}
}
