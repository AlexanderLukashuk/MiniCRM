using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniCRM.Domain.Common
{
    public abstract class BaseEntity
    {
        public int Id { get; set; }
    }
}