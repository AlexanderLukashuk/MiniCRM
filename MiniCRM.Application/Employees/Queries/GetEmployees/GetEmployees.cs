using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using MediatR;
using Microsoft.EntityFrameworkCore;
using MiniCRM.Application.Common.Interfaces;
using MiniCRM.Application.Common.Models;
using MiniCRM.Domain.Enums;

namespace MiniCRM.Application.Employees.Queries.GetEmployees
{
    public record GetEmployeesQuery : IRequest<EmployeeVm>;

    public class GetEmployeesQueryHandler : IRequestHandler<GetEmployeesQuery, EmployeeVm>
    {
        private readonly IApplicationDbContext _context;

        private  readonly IMapper _mapper;

        public GetEmployeesQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<EmployeeVm> Handle(GetEmployeesQuery request, CancellationToken cancellationToken)
        {
            return new EmployeeVm
            {
                PriorityLevels = Enum.GetValues(typeof(PriorityLevel))
                    .Cast<PriorityLevel>()
                    .Select(p => new LookupDto { Id = (int)p, Title = p.ToString() })
                    .ToList(),

                Employees = await _context.Employees
                    .AsNoTracking()
                    .ProjectTo<EmployeeDto>(_mapper.ConfigurationProvider)
                    .OrderBy(t => t.FullName)
                    .ToListAsync(cancellationToken)
            };
        }
    }
}