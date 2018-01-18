﻿using System;

namespace Domain
{
	public abstract class Entity
	{
		public long ID { get; set; }
	}
	public abstract class Entity<T> : Entity<T, long> where T : Entity<T> { }
	public abstract class Entity<T, PK> : IEntity<PK>, IEquatable<T>, ISlip
		where T : Entity<T, PK> where PK : IEquatable<PK>
	{
		public PK ID { get; set; }

		/// <summary>
		/// 将Model转成TVP string
		/// </summary>
		/// <returns></returns>
		public virtual string ToTvp() => ToString();
		public override string ToString() => ID.ToString();

		public bool Equals(T other) => other != null && ID.Equals(other.ID);
		public sealed override bool Equals(object obj) => Equals(obj as T);
		public sealed override int GetHashCode() => ID.GetHashCode();
	}
}
